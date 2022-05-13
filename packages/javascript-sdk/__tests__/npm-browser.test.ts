/**
 * @jest-environment jsdom
 *
 * DO NOT DELETE LINE ABOVE, THIS IS AN INSTRUCTION FOR JEST
 *
 * This test suite verifies that Jitsu works as a npm package with DOM
 * env
 */

import { envs, jitsuClient } from "../src/jitsu";
import { JitsuClient } from "../src/interface";
import { sleep, waitFor } from "./common/common";
import * as jest from "jest"

type RequestCache = {
  url: string;
  headers: Record<string, string>;
  payload: string;
};

const requestLog: RequestCache[] = [];

let mockDisabled = false

class XHRMock {
  private url: string;
  private headers = {};
  private onload: any
  private onerror: any
  private status: number

  constructor() {}

  open(url: string) {
    this.url = url;
  }

  setRequestHeader(name: string, val: string) {
    this.headers[name.toLocaleLowerCase()] = val;
  }

  send(payload) {
    if (mockDisabled) {
      this.status = 403
      if (this.onerror) {
        this.onerror()
      }

      return
    }

    requestLog.push({ url: this.url, headers: this.headers, payload });
    this.status = 200;
    if (this.onload) {
      this.onload()
    }
  }
}

beforeAll(() => {
  // @ts-ignore
  window.XMLHttpRequest = XHRMock;
});

test("test browser", async () => {
  let counter = 0;
  let jitsu: JitsuClient = jitsuClient({
    key: "Test",
    tracking_host: "https://test-host.com",
    custom_headers: () => ({
      "test1": "val1",
      "test2": "val" + (counter++)
    }),
    max_send_attempts: 1
  });
  await jitsu.id({ email: "john.doe@gmail.com", id: "1212" });
  await jitsu.track("page_view", { test: 1 });
  expect(requestLog.length).toBe(2)
  console.log("Requests", requestLog)
  const event1 = JSON.parse(requestLog[0].payload)
  const event2 = JSON.parse(requestLog[1].payload)

  expect(requestLog[0].headers?.test2).toBe("val0")
  expect(requestLog[1].headers?.test2).toBe("val1")

  expect(requestLog[0].headers?.test1).toBe("val1")
  expect(requestLog[1].headers?.test1).toBe("val1")

  expect(event1?.user?.anonymous_id).toBe(event2?.user?.anonymous_id)
  expect(event1?.user?.email).toBe('john.doe@gmail.com')
  expect(event2?.user?.email).toBe('john.doe@gmail.com')
  expect(event1?.user?.id).toBe('1212')
  expect(event2?.user?.id).toBe('1212')
  expect(event1.event_type).toBe('user_identify')
  expect(event2.event_type).toBe('page_view')
});

test("test browser with retries", async () => {
  mockDisabled = true
  let jitsu: JitsuClient = jitsuClient({
    key: "Test",
    tracking_host: "https://test-host.com",
    custom_headers: () => ({
      "test1": "val1",
      "test2": "val2"
    }),
    max_send_attempts: 100000,
    min_send_timeout: 10,
    max_send_timeout: 10,
  });

  await jitsu.id({ email: "john.doe@gmail.com", id: "1212" });
  await jitsu.track("page_view", { test: 1 });

  await sleep(500)
  mockDisabled = false

  await waitFor(() => requestLog.length === 1)

  const payload = JSON.parse(requestLog[0].payload)
  console.log("Requests", payload)
  expect(payload.length).toBe(2)
  const event1 = payload[0]
  const event2 = payload[1]

  expect(requestLog[0].headers?.test1).toBe("val1")
  expect(requestLog[0].headers?.test2).toBe("val2")

  expect(event1?.user?.anonymous_id).toBe(event2?.user?.anonymous_id)
  expect(event1?.user?.email).toBe('john.doe@gmail.com')
  expect(event2?.user?.email).toBe('john.doe@gmail.com')
  expect(event1?.user?.id).toBe('1212')
  expect(event2?.user?.id).toBe('1212')
  expect(event1.event_type).toBe('user_identify')
  expect(event2.event_type).toBe('page_view')
});

test("test browser max attempts exceeded", async () => {
  mockDisabled = true
  let jitsu: JitsuClient = jitsuClient({
    key: "Test",
    tracking_host: "https://test-host.com",
    custom_headers: () => ({
      "test1": "val1",
      "test2": "val2"
    }),
    max_send_attempts: 3,
    min_send_timeout: 10,
    max_send_timeout: 10,
  });

  await jitsu.id({ email: "john.doe@gmail.com", id: "1212" });

  await sleep(500)
  mockDisabled = false

  await jitsu.track("page_view", { test: 1 });

  await waitFor(() => requestLog.length === 1)

  const payload = JSON.parse(requestLog[0].payload)
  console.log("Requests", payload)
  expect(payload.length).toBe(1)
  const event2 = payload[0]

  expect(requestLog[0].headers?.test1).toBe("val1")
  expect(requestLog[0].headers?.test2).toBe("val2")

  expect(event2?.user?.email).toBe('john.doe@gmail.com')
  expect(event2?.user?.id).toBe('1212')
  expect(event2.event_type).toBe('page_view')
});

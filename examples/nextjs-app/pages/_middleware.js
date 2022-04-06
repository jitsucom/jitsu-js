import { createClient } from "@jitsu/react";

export function middleware(req, ev) {
  const jitsu = createClient({
    tracking_host: "http://localhost:8001/",
    key: "js.bqexj4t3vs7i4q7q1j3358.ixbyul0pyd5crmdftlif7"
  })
  console.log(JSON.stringify(ev))
  // jitsu.track("nextjs_api_test")
}
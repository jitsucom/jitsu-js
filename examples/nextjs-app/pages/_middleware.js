import { createClient, middlewareEnv } from "@jitsu/nextjs";
import { NextResponse } from "next/server";

const jitsu = createClient({
  key: "js.rp15myjljp75nj5q40qbj1.buw2k6zs10oowdgnr7203d"
})

export function middleware(req, ev) {
  let res = NextResponse.next()
  if (!req?.page?.name) {
    return;
  }
  jitsu.track("middleware_pageview", {env: middlewareEnv(req, res)})
  return res
}
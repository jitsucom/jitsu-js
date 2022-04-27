import { createClient } from "@jitsu/nextjs";

const jitsu = createClient({
  tracking_host: "http://localhost:8001/",
  key: "js.bqexj4t3vs7i4q7q1j3358.ixbyul0pyd5crmdftlif7"
})

export function middleware(req, ev) {
  const { page } = req
  if ( !page?.name ) {
    return;
  }
  jitsu.track("middleware_pageview", {page: req.page})
}
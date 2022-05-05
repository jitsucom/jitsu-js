import { JitsuClient, jitsuClient, JitsuOptions } from "@jitsu/sdk-js";

function createClient(params: JitsuOptions): JitsuClient {
  return jitsuClient(params)
}

export default createClient
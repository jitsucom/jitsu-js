import { createClient, JitsuProvider, useNextPageView } from "@jitsu/react";

const jitsuClient = createClient({
  tracking_host: "http://localhost:8001/",
  key: "js.bqexj4t3vs7i4q7q1j3358.ixbyul0pyd5crmdftlif7"
});

function MyApp({Component, pageProps}) {
  useNextPageView()

  return <JitsuProvider client={jitsuClient}>
    <Component {...pageProps} />
  </JitsuProvider>
}

export default MyApp
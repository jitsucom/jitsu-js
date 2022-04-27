import { createClient, JitsuProvider, usePageView } from "@jitsu/nextjs";

// initialize Jitsu client
const jitsuClient = createClient({
  tracking_host: "http://localhost:8001/",
  key: "js.bqexj4t3vs7i4q7q1j3358.ixbyul0pyd5crmdftlif7"
});

// wrap our app with Jitsu provider
function MyApp({Component, pageProps}) {
  usePageView(jitsuClient); // this hook will send pageview track event on router change

  return <JitsuProvider client={jitsuClient}>
    <Component {...pageProps} />
  </JitsuProvider>
}

export default MyApp
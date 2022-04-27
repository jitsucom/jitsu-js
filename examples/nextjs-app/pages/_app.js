import { createClient, JitsuProvider } from "@jitsu/react";

// initialize Jitsu client
const jitsuClient = createClient({
  tracking_host: "http://localhost:8001/",
  key: "js.bqexj4t3vs7i4q7q1j3358.ixbyul0pyd5crmdftlif7"
});

// wrap our app with Jitsu provider
function MyApp({Component, pageProps}) {
  return <JitsuProvider client={jitsuClient}>
    <Component {...pageProps} />
  </JitsuProvider>
}

export default MyApp
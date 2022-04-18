import Link from "next/link";
import Head from "next/head";
import { useJitsu } from "@jitsu/react";
import { useEffect } from "react";

export default function Page() {
  const {trackPageView} = useJitsu();

  useEffect(() => {
    trackPageView()
  }, [trackPageView])

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      /page: Go to <Link href="/">home page</Link>
    </div>
  )
}
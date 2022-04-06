import Head from 'next/head'
import { useJitsu } from "@jitsu/react";
import Link from "next/link";
import { useEffect } from "react";

export default function App() {
  const {id, track, trackPageView} = useJitsu();

  // useEffect(() => {
  //   id({id: '123456', email: 'test@email.com'})
  //   track('custom_event', {test: true});
  // }, [])

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      /: Go to <Link href="/page">other page</Link>
    </div>
  )
}
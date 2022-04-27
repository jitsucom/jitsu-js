import Head from 'next/head'
import { useJitsu } from "@jitsu/nextjs";
import Link from "next/link";
import { useEffect } from "react";

export default function App() {
  const {id, track} = useJitsu(); // import methods from useJitsu hook

  useEffect(() => {
    id({id: '123456', email: 'test@email.com'}) // identify current user for all track events
    track('custom_event', {test: true}); // send custom event with payload
  }, [id, track])

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
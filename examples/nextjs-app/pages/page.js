import Link from "next/link";
import Head from "next/head";

export default function Page() {
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
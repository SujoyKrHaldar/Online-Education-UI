import Head from "next/head";
import Courses from "../components/home/Courses";
import Landing from "../components/home/Landing";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next tailwind starter</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Landing />
        <Courses />
      </Layout>
    </>
  );
}

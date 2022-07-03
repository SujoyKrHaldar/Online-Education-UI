import Head from "next/head";
import Categories from "../components/home/categories";
import Contact from "../components/home/Contact";
import Courses from "../components/home/Courses";
import Details from "../components/home/Details";
import Faq from "../components/home/Faq";
import Features from "../components/home/Features";
import Landing from "../components/home/Landing";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Online learning at E education.</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Landing />
        {/* <Features /> */}
        {/* <Details /> */}
        {/* <Categories /> */}
        <Courses />
        {/* <Faq /> */}
        {/* <Contact /> */}
      </Layout>
    </>
  );
}

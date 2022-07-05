import Head from "next/head";
import Category from "../components/home/Category";
// import Contact from "../components/home/Contact";
import Courses from "../components/home/Courses";
import Details from "../components/home/Details";
import Join from "../components/home/Join";
import Faq from "../components/home/Faq";
// import WayOfWork from "../components/home/WayOfWork";
import Landing from "../components/home/Landing";
import Layout from "../components/layout/Layout";
import Blog from "../components/home/Blog";

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
        <Category />
        <Courses />
        <Details />
        {/* <WayOfWork /> */}
        <Blog />
        <Faq />
        {/* <Contact /> */}
        <Join />
      </Layout>
    </>
  );
}

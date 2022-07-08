import Link from "next/link";

function HomeAboutContent() {
  return (
    <>
      <div className="ml-auto max-w-[450px]">
        <h2 className="mb-2">
          About the{" "}
          <span className="font-bold text-green-500">Online Education</span>
        </h2>
        <p>
          What Will You discover here? Explore new skills, deepen existing
          passions, and get lost in creativity. What you find just might
          surprise and inspire you. With so much to explore, real projects to
          create, and the support of fellow-creatives, Skillshare’s online
          learning platform empowers you to learn new skills and accomplish real
          growth.
        </p>

        <Link href="/">
          <a className="text-sm font-medium px-5 py-2 bg-green-500 hover:bg-green-800 text-white rounded-md mt-8">
            Lets explore
          </a>
        </Link>
      </div>
    </>
  );
}

export default HomeAboutContent;

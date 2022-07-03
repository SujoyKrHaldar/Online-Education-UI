import Link from "next/link";

function HomeContent() {
  return (
    <div className="max-w-lg py-4 text-white">
      <p className="text-[#eaeaea]">
        Investing in <span className="font-bold text-white">Knowledge</span> and{" "}
        <span className="font-bold text-white">your Future</span>.
      </p>
      <h1 className="font-bold mb-4">
        Explore thousands of hands-on{" "}
        <span className="text-green-500">Creative classes</span>.
      </h1>
      <p className="max-w-[350px] sm:max-w-md">
        Our Career Path helps motivated students become hireable developers for
        a fraction of the cost. Join the millions learning to code with us for
        free.
      </p>

      <div className="flex flex-col items-start sm:flex-row sm:items-center gap-2 mt-8">
        <Link href="#">
          <a className="bg-green-500 hover:bg-green-700 px-5 py-3 text-white font-medium rounded-md">
            Start learning for free
          </a>
        </Link>

        <Link href="#courses">
          <a className="hidden sm:inline-block text-white hover:bg-[#59c46f3b] font-medium px-5 py-3 rounded-md">
            Explore courses
          </a>
        </Link>
      </div>
    </div>
  );
}

export default HomeContent;

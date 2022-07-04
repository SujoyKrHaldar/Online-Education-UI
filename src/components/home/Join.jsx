import Link from "next/link";

function Join() {
  return (
    <>
      <div
        className=" bg-green-300 rounded-xl mx-auto  h-[250px]
      flex items-center justify-center"
      >
        <div className="p-16 flex items-center justify-between gap-4">
          <h2>
            Are you ready to start your{" "}
            <span className="font-bold block">Learning Journey</span> now?
          </h2>

          <Link href="/">
            <a className="mt-4 bg-green-500 hover:bg-green-700 px-6 py-2 text-white font-medium rounded-md">
              Get started
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Join;

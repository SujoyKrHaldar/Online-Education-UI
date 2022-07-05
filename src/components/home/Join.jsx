import Link from "next/link";
import Container from "../layout/Container";

function Join() {
  return (
    <>
      <div className="py-16">
        <div className="bg-[#212121] h-1/2 w-full absolute bottom-0 left-0"></div>

        <Container>
          <div
            className=" bg-green-300 rounded-xl mx-auto h-auto sm:h-[250px]
          flex items-center justify-start sm:justify-center"
          >
            <div className="p-8 sm:p-16 text-left sm:text-center">
              <p className=" mb-2">Join over 500,000 students</p>
              <h2 className="mb-4 max-w-lg font-medium">
                Are you ready to start your Learning Journey now?
              </h2>

              <Link href="/">
                <a className=" bg-green-500 hover:bg-green-700 px-6 py-2 text-white font-medium rounded-md">
                  Get started
                </a>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Join;

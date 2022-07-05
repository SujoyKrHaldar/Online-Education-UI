import Link from "next/link";
import Container from "../layout/Container";

function Join() {
  return (
    <>
      <div className="py-6 bg-slate-100">
        <div className="w-full absolute -bottom-1 sm:-bottom-8 left-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#212121"
              fillOpacity="1"
              d="M0,160L120,138.7C240,117,480,75,720,90.7C960,107,1200,181,1320,218.7L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>

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

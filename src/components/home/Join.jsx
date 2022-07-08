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
            flex items-center justify-start sm:justify-center overflow-hidden"
          >
            <div className="absolute w-[260px] h-auto bottom-[-4rem] left-[-5rem]">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#5ddb8a"
                  d="M68.3,-37C82.6,-14.6,84.2,17.5,70.7,38.3C57.2,59.2,28.6,68.8,2,67.7C-24.7,66.6,-49.4,54.7,-58.9,36.1C-68.4,17.5,-62.8,-7.7,-50.4,-29C-38.1,-50.3,-19,-67.6,4,-69.9C27,-72.2,53.9,-59.5,68.3,-37Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
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

            <div className="absolute w-[260px] h-auto top-[-4rem] right-[-5rem]">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#5ddb8a"
                  d="M57.5,-35.2C68.8,-13.6,68.4,12.8,56.8,26.5C45.3,40.2,22.6,41.1,-0.5,41.4C-23.7,41.7,-47.4,41.4,-61.4,26.3C-75.4,11.3,-79.6,-18.6,-67.7,-40.5C-55.8,-62.4,-27.9,-76.5,-2.4,-75.1C23.1,-73.7,46.2,-56.8,57.5,-35.2Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Join;

import BackgroundImage from "../designs/others/BackgroundImage";
import Container from "../layout/Container";

function Landing() {
  return (
    <>
      <div className="w-full h-[90vh]">
        <BackgroundImage
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1232&q=80"
          alt="landing page"
        />
        <Container className="flex items-center justify-start">
          <div className="max-w-xl mx-auto text-center py-4">
            <h1 className="bg-white px-8 py-4 font-bold">
              Next.js Tailwind Starter
            </h1>
          </div>
        </Container>

        <div className="absolute -bottom-8 left-0 w-full h-fit">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffff"
              fillOpacity="1"
              d="M0,64L80,90.7C160,117,320,171,480,197.3C640,224,800,224,960,213.3C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}

export default Landing;

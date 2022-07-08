import BackgroundImage from "../designs/others/BackgroundImage";
import Container from "../layout/Container";
import HomeAboutContent from "./components/HomeAboutContent";

function About() {
  return (
    <>
      <div className="w-full py-28">
        <Container className="flex items-center justify-center gap-4">
          <div className="flex-1 ">
            <HomeAboutContent />
          </div>

          <div className="flex-1 w-full h-auto">
            <div className="absolute w-full h-[360px] max-w-[350px] bg-green-300 inset-0 -translate-y-8 rounded-3xl"></div>
            <div className="max-w-[350px] h-[450px] mx-auto translate-y-8 -translate-x-8 overflow-hidden shadow-lg rounded-3xl">
              <BackgroundImage
                src="https://images.unsplash.com/photo-1607004468138-e7e23ea26947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                alt="landing page"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default About;

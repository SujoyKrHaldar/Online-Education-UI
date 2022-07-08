import BackgroundImage from "../designs/others/BackgroundImage";
import Container from "../layout/Container";
import HomeAboutContent from "./components/HomeAboutContent";

function About() {
  return (
    <>
      <div className="w-full py-28">
        <Container
          className="flex flex-col justify-center items-center 
        md:flex-row md:justify-between gap-8
        "
        >
          <div className="flex-1 py-4">
            <HomeAboutContent />
          </div>

          <div className="flex-1 w-full h-auto">
            <div className="w-full md:max-w-[350px] h-[450px] mx-auto overflow-hidden shadow-lg rounded-3xl">
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

import BackgroundImage from "../designs/others/BackgroundImage";
import Container from "../layout/Container";
import HomeAvatar from "./components/HomeAvatar";
import HomeContent from "./components/HomeContent";

function Landing() {
  return (
    <>
      <div className="w-full h-screen py-16 bg-[#202020] md:border-[1rem] border-white">
        <BackgroundImage
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1232&q=80"
          alt="landing page"
          className="opacity-30"
        />
        <Container className="flex flex-col justify-end gap-4 lg:gap-8 lg:flex-row lg:items-end lg:justify-between lg:pb-8">
          <HomeContent />
          <HomeAvatar />
        </Container>
      </div>
    </>
  );
}

export default Landing;

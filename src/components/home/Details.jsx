import BackgroundImage from "../designs/others/BackgroundImage";
import Container from "../layout/Container";
import HomeDetails from "./components/HomeDetails";

function Details() {
  return (
    <>
      <div className="bg-[#212121] text-white h-[450px] ">
        <div className="absolute w-full md:w-1/2 h-full inset-0 opacity-20 lg:opacity-100">
          <BackgroundImage
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="landing page"
          />
        </div>
        <Container className="flex items-end sm:items-center justify-center lg:justify-end">
          <div className="py-8 max-w-[450px]">
            <h2 className=" mb-4 text-white ">
              What makes us{" "}
              <span className="font-bold text-green-500">Different</span>
            </h2>

            <HomeDetails />
          </div>
        </Container>
      </div>
    </>
  );
}

export default Details;

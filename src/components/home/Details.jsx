import Container from "../layout/Container";
import HomeDetails from "./components/HomeDetails";

function Details() {
  return (
    <>
      <div className="bg-[#212121] text-white py-16">
        <Container className="sm:text-center">
          <h2 className=" mb-4 text-white ">
            Join in on{" "}
            <span className="font-bold text-green-500">Something Big</span>
          </h2>

          <HomeDetails />
        </Container>
      </div>
    </>
  );
}

export default Details;

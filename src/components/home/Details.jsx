import Container from "../layout/Container";
import HomeDetails from "./components/HomeDetails";

function Details() {
  return (
    <>
      <div className="bg-[#212121] text-white py-16">
        <Container>
          <h2 className="sm:text-center mb-4 px-3 py-2 bg-white inline-block text-black">
            Join in on <span className="font-bold">Something Big</span>
          </h2>

          <HomeDetails />
        </Container>
      </div>
    </>
  );
}

export default Details;

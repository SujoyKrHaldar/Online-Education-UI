import { quality } from "../../data/data";
import ContextQualityCard from "../designs/cards/ContextQualityCard";
import Container from "../layout/Container";

function CourseQualities() {
  return (
    <>
      <div className="w-full py-28 bg-slate-100">
        <div className="absolute w-full h-1/3 bottom-0 left-0 bg-white"></div>
        <Container>
          <p className=" px-3 py-1 mb-2 bg-white inline-block font-bold">
            Quality content
          </p>
          <h2 className="max-w-md mb-4">
            We are{" "}
            <span className="font-bold text-green-500">Quality service</span>{" "}
            provider with love
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-8">
            {quality.map((data, index) => (
              <ContextQualityCard data={data} key={index} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

export default CourseQualities;

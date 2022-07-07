import { quality } from "../../data/data";
import ContextQualityCard from "../designs/cards/ContextQualityCard";
import Container from "../layout/Container";

function CourseQualities() {
  return (
    <>
      <div className="w-full py-28">
        <Container className="text-center">
          <p className=" px-3 py-1 mb-2 bg-slate-100 inline-block font-bold">
            Quality content
          </p>
          <h2 className="  font-bold mb-4">
            What we will <span className="font-bold">Offer</span>
          </h2>

          <div className="grid grid-cols-3 gap-4 mt-8">
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

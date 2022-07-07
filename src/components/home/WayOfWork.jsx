import { howItWorks } from "../../data/data";
import Container from "../layout/Container";

function WayOfWork() {
  return (
    <>
      <div className="w-full  py-28 bg-slate-100">
        <Container>
          <p className="px-3 py-1 mb-2 bg-white inline-block font-bold">
            How it works
          </p>
          <h2 className="mb-4">
            This is the way <span className="font-bold">We actully work</span>
          </h2>

          <div className="flex items-center justify-start gap-4 flex-wrap sm:justify-center">
            {howItWorks.map((d, index) => (
              <div key={index} className="py-3 px-4 bg-white mb-4 max-w-md">
                <p className="text-xl font-bold mb-2">{d.main}</p>
                <p>{d.para}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

export default WayOfWork;

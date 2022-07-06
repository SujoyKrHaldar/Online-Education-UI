import { faq } from "../../data/data";
import Container from "../layout/Container";

function Faq() {
  return (
    <>
      <div className="w-full py-16 bg-slate-50">
        <div className="absolute w-[600px] h-auto top-[-16rem] right-0">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#ffff"
              d="M50.9,-45.3C64.5,-37.4,72.8,-18.7,72.9,0.1C73,18.9,64.9,37.9,51.4,53.7C37.9,69.5,18.9,82.1,2.6,79.5C-13.7,76.8,-27.3,58.9,-36.6,43.1C-45.8,27.3,-50.7,13.7,-48.2,2.5C-45.7,-8.7,-35.9,-17.4,-26.6,-25.3C-17.4,-33.2,-8.7,-40.4,5,-45.4C18.7,-50.4,37.4,-53.3,50.9,-45.3Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <Container>
          <h2 className="font-bold ">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {faq.map((q, index) => (
              <div
                key={index}
                className="p-4 px-5 h-fit border-2 border-slate-200 bg-white hover:bg-green-200"
              >
                <p className="font-medium text-xl mb-2">{q.q}</p>
                <p className="text-sm max-w-lg">{q.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Faq;

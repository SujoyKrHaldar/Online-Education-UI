import { faq } from "../../data/Faq";
import Container from "../layout/Container";

function Faq() {
  return (
    <>
      <div className="w-full py-16 ">
        <Container>
          <h2 className="font-bold ">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
            {faq.map((q, index) => (
              <div key={index} className="">
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

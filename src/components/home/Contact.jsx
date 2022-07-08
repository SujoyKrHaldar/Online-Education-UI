import ContactForm from "../designs/others/ContactForm";
import Container from "../layout/Container";

function Contact() {
  return (
    <>
      <div className="bg-slate-50">
        <div className="w-full absolute -bottom-1 h-auto left-0 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#f1f5f9"
              fillOpacity="1"
              d="M0,64L1440,160L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
        <Container>
          <div
            className="bg-white p-8 md:py-16 lg:p-16 flex flex-col justify-center items-center overflow-hidden shadow-lg
           md:flex-row md:items-start md:justify-between gap-8 mb-8 border-b-2 border-b-green-500 rounded-lg flex-wrap"
          >
            <div className="flex-1 z-10">
              <p className="px-3 py-1 mb-2 bg-green-100 inline-block">
                Contact us
              </p>
              <h1 className="font-bold mb-2">Need any kind of help?</h1>
              <p className="mb-2">
                Call us for any emergency{" "}
                <span className="font-medium text-green-500 md:block">
                  537 430 669
                </span>
              </p>
            </div>
            <div className="flex-1 max-w-md z-10">
              <ContactForm />
            </div>

            <div className="w-full absolute -bottom-1 h-auto left-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#f8fafc"
                  fillOpacity="1"
                  d="M0,64L1440,160L1440,320L0,320Z"
                ></path>
              </svg>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Contact;

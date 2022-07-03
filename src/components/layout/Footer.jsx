import Container from "./Container";

function Footer() {
  return (
    <>
      <div className="bg-[#ffffff] text-[#000000] py-6  mt-auto">
        <Container className="flex items-center justify-between gap-4">
          <p>Copyright ©{new Date().getFullYear()} - All rights reserved.</p>
          <p>
            Created by{" "}
            <a
              className="font-bold"
              href="https://github.com/SujoyKrHaldar"
              target="_blank"
            >
              Sujoy
            </a>
          </p>
        </Container>
      </div>
    </>
  );
}

export default Footer;

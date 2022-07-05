import FooterBottom from "./components/footer/FooterBottom";
import FooterTop from "./components/footer/FooterTop";
import Container from "./Container";

function Footer() {
  return (
    <>
      <div className="bg-[#212121] py-6 text-white mt-auto">
        <Container>
          <FooterTop />
          <FooterBottom />
        </Container>
      </div>
    </>
  );
}

export default Footer;

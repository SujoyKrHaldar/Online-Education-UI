import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineSlack,
  AiFillLinkedin,
} from "react-icons/ai";

import { IoLogoStackoverflow } from "react-icons/io5";
import ProductLogo from "../logo/ProductLogo";

function FooterTop() {
  return (
    <>
      <div className="py-4 my-4 border-b-[1px] sm:border-t-[1px] sm:border-b-0 border-[#3f3f3f] flex items-center justify-between gap-4 flex-wrap">
        <ProductLogo />

        <div className="flex items-center justify-start gap-4 gap-y-2 sm:gap-6 flex-wrap">
          <p>Courses</p>
          <p>Catagory</p>
          <p>Blogs</p>
          <p>About</p>
          <p>Contact</p>
          <p>Pricing</p>
        </div>

        <div className="flex items-start justify-start gap-4 flex-wrap">
          <div className="text-3xl cursor-pointer text-[#c1c1c1] hover:text-[#fcfcfc]">
            <AiFillFacebook />
          </div>
          <div className="text-3xl cursor-pointer text-[#c1c1c1] hover:text-[#fcfcfc]">
            <AiFillInstagram />
          </div>
          <div className="text-3xl cursor-pointer text-[#c1c1c1] hover:text-[#fcfcfc]">
            <AiFillLinkedin />
          </div>
          <div className="text-3xl cursor-pointer text-[#c1c1c1] hover:text-[#fcfcfc]">
            <AiOutlineSlack />
          </div>
          <div className="text-3xl cursor-pointer text-[#c1c1c1] hover:text-[#fcfcfc]">
            <IoLogoStackoverflow />
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterTop;

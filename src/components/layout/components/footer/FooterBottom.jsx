function FooterBottom() {
  return (
    <>
      <div className="flex flex-col-reverse items-start gap-2 sm:flex-row sm:items-center justify-between sm:gap-4 text-[#6b6b6b] ">
        <p>Copyright ©{new Date().getFullYear()} - All rights reserved.</p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <p className="cursor-pointer hover:text-[#c1c1c1]">Privacy policy</p>
          <p className="cursor-pointer hover:text-[#c1c1c1]">
            Terms and condition
          </p>
        </div>
      </div>
    </>
  );
}

export default FooterBottom;

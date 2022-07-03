import Link from "next/link";
import { IoMdClose } from "react-icons/io";

function Navbar_Mobile({ navLinks, open, setOpen }) {
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="md:hidden w-screen h-screen fixed top-0 right-0 z-[11] overflow-hidden pointer-events-none flex items-center justify-end">
        <div
          className={`flex-1 p-[6rem] h-full max-w-[460px] bg-black text-white flex items-center justify-start pointer-events-auto duration-300
          ${open ? " translate-x-0 opacity-100" : " translate-x-full opacity-0"}
        
          `}
        >
          <div
            onClick={closeMenu}
            className="flex text-3xl cursor-pointer absolute top-8 right-8 "
          >
            <IoMdClose />
          </div>
          <div className="flex flex-col">
            {navLinks.map((links, index) => (
              <Link href={links.url} key={index}>
                <a className="p-4 text-xl font-semibold">{links.link}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar_Mobile;

import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Navbar_Desktop from "./components/navbar/Navbar_Desktop";
import Navbar_Mobile from "./components/navbar/Navbar_Mobile";

const navLinks = [
  {
    link: "Home",
    url: "/",
  },

  {
    link: "Catalogs",
    url: "/",
  },

  {
    link: "Courses",
    url: "#courses",
  },

  {
    link: "Courses",
    url: "/",
  },

  {
    link: "Pricing",
    url: "/",
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const openModel = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="absolute bg-white w-full top-0 z-[10] border-b-[1px] border-[#0000001a]">
        <div className="container flex items-center justify-between gap-4 ">
          <div className="flex items-center justify-start gap-8">
            <Link href="/">
              <div className="cursor-pointer py-4 flex flex-col items-start gap-0">
                <p className="font-bold text-lg">Education</p>
                <p>Online</p>
              </div>
            </Link>

            <Navbar_Desktop navLinks={navLinks} />
          </div>

          <div className="flex items-center justify-between gap-2">
            <Link href="#">
              <a className="px-5 py-2 hover:bg-slate-200 ">Log in</a>
            </Link>

            <Link href="#">
              <a className="px-5 py-2 bg-slate-200 hover:bg-slate-500 hover:text-white">
                Get started
              </a>
            </Link>
            <div
              onClick={openModel}
              className="md:hidden flex text-3xl cursor-pointer"
            >
              <FiMenu />
            </div>
          </div>
        </div>
      </div>

      <Navbar_Mobile navLinks={navLinks} open={open} setOpen={setOpen} />
    </>
  );
}

export default Navbar;

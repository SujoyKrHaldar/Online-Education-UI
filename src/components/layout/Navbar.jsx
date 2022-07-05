import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "./components/logo/Logo";
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
      <div className="fixed bg-white w-full top-0  py-2 z-50 shadow-md ">
        <div className="container flex items-center justify-between gap-4 ">
          <div className="flex items-center justify-start gap-8">
            <Link href="/">
              <Logo />
            </Link>

            <Navbar_Desktop navLinks={navLinks} />
          </div>

          <div className="flex items-center justify-between gap-2">
            <Link href="#">
              <a className="text-sm hidden lg:block px-5 py-2 hover:bg-green-300 rounded-md">
                Log in
              </a>
            </Link>

            <Link href="#">
              <a className="text-sm font-medium px-5 py-2 bg-green-500 hover:bg-green-800 text-white rounded-md">
                Get started
              </a>
            </Link>

            <div
              onClick={openModel}
              className="md:hidden flex text-3xl cursor-pointer ml-4"
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

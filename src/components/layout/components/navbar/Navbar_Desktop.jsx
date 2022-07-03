import Link from "next/link";
import { useRouter } from "next/router";

function Navbar_Desktop({ navLinks }) {
  const router = useRouter();

  return (
    <>
      <div className="hidden md:flex items-center justify-between gap-2">
        {navLinks.map((links, index) => (
          <Link href={links.url} key={index}>
            <a className="px-5 py-2 hover:bg-green-300 rounded-md first:bg-green-200 text-sm">
              {links.link}
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Navbar_Desktop;

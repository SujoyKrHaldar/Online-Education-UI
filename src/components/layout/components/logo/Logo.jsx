import { SiSololearn } from "react-icons/si";

function Logo() {
  return (
    <>
      <div className="cursor-pointer py-4 flex items-center justify-start gap-2">
        <div className="p-1 bg-green-500 text-green-100 rounded-full text-2xl">
          <SiSololearn />
        </div>
        <div className="">
          <p className="text-md font-medium leading-5 ">
            Online{" "}
            <span className="font-bold text-green-500 block">Education</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Logo;

import { BsFillPlayFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { MdPhonelink } from "react-icons/md";

function HomeDetails() {
  return (
    <>
      <div className="flex items-center justify-start gap-4 my-4 ">
        <div className="text-xl text-white ">
          <BsFillPlayFill />
        </div>
        <p>
          Learn in-demand skills with over{" "}
          <span className="font-bold">185,000 video courses</span>.
        </p>
      </div>

      <div className="flex items-center justify-start gap-4 my-4 ">
        <div className="text-xl text-white ">
          <AiFillStar />
        </div>
        <p>
          Choose courses taught by{" "}
          <span className="font-bold">real-world experts</span>.
        </p>
      </div>

      <div className="flex items-center justify-start gap-4 my-4 ">
        <div className="text-xl text-white ">
          <MdPhonelink />
        </div>
        <p>
          Learn at your own pace, with{" "}
          <span className="font-bold">Lifetime access</span> on{" "}
          <span className="font-bold">mobile and desktop</span>.
        </p>
      </div>
    </>
  );
}

export default HomeDetails;

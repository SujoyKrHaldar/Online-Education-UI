import Link from "next/link";
import BackgroundImage from "../others/BackgroundImage";

function CourseCard({ data }) {
  return (
    <>
      <div className="p-2 bg-white h-fit">
        <p
          className={`text-black ${
            data.tag_col || "bg-white"
          } absolute top-5 left-4 z-10 px-4 py-1
         text-sm font-medium rounded-full`}
        >
          {data.tag}
        </p>

        <div className="bg-black w-full h-[150px]">
          {data?.thumbnail && (
            <BackgroundImage src={data.thumbnail} alt={data.name} />
          )}
        </div>
        <div className="p-4">
          <p className="mb-1">
            <span>{data.lessions} lessions</span> | <span>{data.span}</span>
          </p>
          <p className="font-bold mb-1 text-lg ">{data.name}</p>
          <p className="text-[#a4a4a4] text-sm mb-1">
            by <i className="font-medium">{data.author}</i>
          </p>
          <p className="text-[#a4a4a4] text-sm">
            Updated on <span className="font-medium">{data.updatedAt}</span>
          </p>
        </div>
        <Link href="#">
          <a
            className=" text-sm mb-1 px-5 py-2 hover:bg-[#f4f4f4] border-l-[1px] 
          border-l-black block -translate-x-2"
          >
            View course
          </a>
        </Link>
      </div>
    </>
  );
}

export default CourseCard;

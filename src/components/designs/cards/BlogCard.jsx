import Link from "next/link";
import BackgroundImage from "../others/BackgroundImage";

function BlogCard({ data }) {
  return (
    <>
      <div className="flex-[1_1_225px] p-2 bg-slate-100 h-fit border-2 border-transparent hover:border-gray-300 hover:bg-white hover:shadow-md">
        <div className="bg-black w-full h-[130px] md:h-[150px] ">
          {data?.thumbnail && (
            <BackgroundImage
              src={data.thumbnail}
              alt={data.name}
              className="group-hover:scale-105"
            />
          )}
        </div>
        <div className="p-4">
          <p className="text-black text-sm mb-1">{data.tag}</p>
          <p className="font-bold mb-1 text-lg">{data.name}</p>
          <p className="text-[#a4a4a4] text-sm mb-1">
            by <i className="font-medium">{data.author}</i>
          </p>
          <p className="text-[#a4a4a4] text-sm font-medium mb-4">
            {data.createdAt}
          </p>
          <Link href={data.slug}>
            <a className=" text-sm font-bold ">Read more</a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BlogCard;

function CategoryCard({ data }) {
  return (
    <>
      <div className="group p-4 px-8 bg-white rounded-lg text-center border-2 border-transparent hover:border-green-500">
        <div className="flex items-center justify-center mb-2 mt-4 text-3xl text-black group-hover:text-green-500 duration-75">
          {data.icons}
        </div>
        <p className="font-bold">{data.name}</p>
      </div>
    </>
  );
}

export default CategoryCard;

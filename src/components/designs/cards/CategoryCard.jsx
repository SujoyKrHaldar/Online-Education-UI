function CategoryCard({ data }) {
  return (
    <>
      <div
        className="group px-4 py-2 bg-white rounded-lg text-center border-2 border-transparent hover:border-green-500 
      flex items-center justify-center gap-4"
      >
        <div className="p-2 rounded-full text-green-700 border-2 border-transparent group-hover:border-green-500 bg-green-200 text-2xl ">
          {data.icons}
        </div>
        <p className="font-bold">{data.name}</p>
      </div>
    </>
  );
}

export default CategoryCard;

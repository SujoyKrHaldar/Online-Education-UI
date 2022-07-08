function CategoryCard({ data }) {
  return (
    <>
      <div className="group py-8 px-4 bg-white rounded-lg text-center border-2 border-transparent hover:border-black shadow-lg">
        <div className="text-2xl mb-4 text-black flex items-center justify-center">
          {data.icons}
        </div>
        <p>{data.name}</p>
      </div>
    </>
  );
}

export default CategoryCard;

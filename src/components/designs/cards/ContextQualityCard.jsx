function ContextQualityCard({ data }) {
  return (
    <>
      <div className="group p-8 bg-white shadow-lg rounded-lg overflow-hidden text-left sm:odd:translate-y-10">
        <div className="z-10">
          <div className="p-4 rounded-full inline-block text-xl mb-2 bg-green-100">
            {data.icons}
          </div>
          <p className=" mb-2 font-medium text-xl">{data.main}</p>
          <p>{data.para}</p>
        </div>
      </div>
    </>
  );
}

export default ContextQualityCard;

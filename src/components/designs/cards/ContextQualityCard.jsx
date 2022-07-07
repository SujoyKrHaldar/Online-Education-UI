function ContextQualityCard({ data }) {
  return (
    <>
      <div className="group p-8 bg-green-300 rounded-lg overflow-hidden text-left">
        <div
          className="w-[250px] h-auto absolute top-[-4rem] right-[-6rem] 
                md:group-hover:top-[-6rem] md:group-hover:right-[-6rem]"
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#63e891"
              d="M47.8,-22.9C53.1,1,42.7,22.7,25.9,34.7C9.1,46.6,-14,48.9,-33,37.1C-51.9,25.3,-66.7,-0.6,-60.5,-25.7C-54.3,-50.8,-27.2,-75.1,-3,-74.1C21.2,-73.2,42.4,-46.9,47.8,-22.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="z-10">
          <div className="p-4 rounded-full inline-block text-xl mb-2 bg-green-100">
            {data.icons}
          </div>
          <p className="font-bold mb-2 text-2xl">{data.main}</p>
          <p>{data.para}</p>
        </div>

        <div
          className="w-[250px] h-auto absolute bottom-[-4rem] left-[-6rem] 
                md:group-hover:bottom-[-6rem] md:group-hover:left-[-6rem]"
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#63e891"
              d="M56.7,-16.4C63.7,3.2,52.9,30.6,30.9,47.7C9,64.9,-24.1,71.9,-38,60C-51.9,48.1,-46.6,17.3,-37,-5.7C-27.5,-28.7,-13.7,-44.1,5.5,-45.9C24.8,-47.7,49.6,-35.9,56.7,-16.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default ContextQualityCard;

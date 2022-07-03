const avtar = [
  {
    src: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },

  {
    src: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

function HomeAvatar() {
  return (
    <>
      <div className="max-w-[350px] lg:max-w-[200px]">
        <div className="flex -space-x-2 mb-4">
          {avtar.map((dp, index) => (
            <img
              key={index}
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
              src={dp.src}
              alt="Avtar"
            />
          ))}
        </div>

        <p className="text-white text-sm">
          Over 185,000 peoples join us. We are pleased to welcome you onboard.
        </p>
      </div>
    </>
  );
}

export default HomeAvatar;

const behindtheSceneData = [
  {
    name: "Confession of dangerous Mind: An Unauthorised Autbiography ",
    image: "/assets/Documenteries/1.png",
  },
  {
    name: "LoConfession of dangerous Mind: An Unauthorised Autbiography otera",
    image: "/assets/Documenteries/2.png",
  },
  {
    name: "Confession of dangerous Mind: An Unauthorised Autbiography",
    image: "/assets/Documenteries/3.png",
  },
];
const Documentaries = () => {
  return (
    <div className="mt-[68px]">
      <div className="flex justify-between">
        <h1 className="font-bold text-[30px]">Documentaries</h1>
        <a href="#" className="text-primary font-semibold text-[18px]">
          View All
        </a>
      </div>

      <div className=" relative mt-[20px]">
        {/* Scrollable Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">
          {behindtheSceneData.map((movie, index) => (
            <div key={index} className="relative">
              <button className="absolute bg-[#888888] font-semibold text-[13px] rounded-lg px-2.5 py-1.5 top-2 left-2 tracking-wide">
                Documentaries{" "}
              </button>
              <img
                src={movie.image}
                alt={`Poster of ${movie.name}`}
                className="w-full h-auto rounded-md"
              />
              <h2 className="mt-2 text-[22px] font-medium">{movie.name}</h2>
            </div>
          ))}
        </div>

        {/* Static Arrows in the Middle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between w-full px-4">
          <button className="text-white p-2 rounded-full ">
            <img src="/assets/rl.svg"></img>
          </button>

          <button className="text-white p-2 rounded-full ">
            <img src="/assets/ra.svg"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Documentaries;

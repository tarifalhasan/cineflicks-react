const hindiMoviesData = [
  {
    image: "/assets/newRelease/1.png",
  },
  {
    image: "/assets/newRelease/2.png",
  },
  {
    image: "/assets/newRelease/3.png",
  },
];
const NewRealase = () => {
  return (
    <div className="mt-[68px]">
      <div className="flex justify-between">
        <h1 className="font-bold text-[30px] text-white z-10">New Releases </h1>
        <a href="#" className="text-primary font-semibold text-[18px] z-10">
          View All
        </a>
      </div>

      <div className="relative mt-[20px]">
        {/* Scrollable Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">
          {hindiMoviesData.map((movie, index) => (
            <div key={index}>
              <img
                src={movie.image}
                alt={`Poster of ${movie.name}`}
                className="w-full h-auto rounded-md"
              />
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

export default NewRealase;

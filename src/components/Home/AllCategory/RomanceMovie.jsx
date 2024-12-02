const romanceMovieData = [
  {
    name: "Love Aj Kal",
    image: "/assets/RomanceMovie/love.png",
  },
  {
    name: "Lootera",
    image: "/assets/RomanceMovie/lootera.png",
  },
  {
    name: "Raanjhanaa",
    image: "/assets/RomanceMovie/rann.png",
  },
];
const RomanceMovie = () => {
  return (
    <div className="mt-[68px]">
      <div className="flex justify-between">
        <h1 className="font-bold text-[30px]">Romance Movies </h1>
        <a href="#" className="text-primary font-semibold text-[18px]">
          View All
        </a>
      </div>

      <div className="relative mt-[20px]">
        {/* Scrollable Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">
          {romanceMovieData.map((movie, index) => (
            <div key={index}>
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

export default RomanceMovie;

import Container from "../Shared/Container";

const PremiumMovie = [
  {
    name: "Love Aj Kal",
    image: "/assets/premium.png",
  },
  {
    image: "/assets/premium.png",
  },
  {
    name: "Love Aj Kal",
    image: "/assets/premium.png",
  },
  {
    name: "Love Aj Kal",
    image: "/assets/premium.png",
  },
];

const TrendingNowMovie = [
  {
    name: "Love Aj Kal",
    image: "/assets/TrendingNow/love.png",
  },
  {
    name: "Lootera",
    image: "/assets/TrendingNow/lootera.png",
  },
  {
    name: "Raanjhanaa",
    image: "/assets/TrendingNow/rann.png",
  },
  {
    name: "Raanjhanaa",
    image: "/assets/TrendingNow/rann.png",
  },
];

const TrendingNowPage = () => {
  return (
    <div className="mt-[68px]">
      <Container>
        <div className="flex justify-between">
          <h1 className="font-bold text-[30px]">Trending Now</h1>
          <a href="#" className="text-primary font-semibold text-[18px]">
            View All
          </a>
        </div>

        {/* First Line (4 Images, No Buttons) */}
        <div className="mt-[20px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px]">
            {TrendingNowMovie.map((movie, index) => (
              <div key={index}>
                <img
                  src={movie.image}
                  alt={`Poster of ${movie.name}`}
                  className="w-full h-auto rounded-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Line (4 Images with Buttons for First 3) */}

        <div className="relative mt-[20px]">
          {/* Scrollable Grid Container */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px]">
            {PremiumMovie.map((movie, index) => (
              <div key={index} className="relative">
                {/* Show king.png only on the 1st (index 0) and 3rd (index 2) cards */}
                {(index === 0 || index === 2) && (
                  <button className="absolute px-2.5 py-1.5 top-2 left-2 tracking-wide">
                    <img src="/assets/king.png" alt="King Icon" />
                  </button>
                )}
                <img
                  src={movie.image}
                  alt={`Poster of ${movie.name}`}
                  className="w-full h-auto rounded-md"
                />
              </div>
            ))}
          </div>

          {/* Static Arrows in the Middle */}
          <div className="absolute top-1/3 left-2/2  flex justify-between w-3/4 px-4">
            <button className="text-white p-2 rounded-full ">
              <img src="/assets/rl.svg"></img>
            </button>

            <button className="text-white p-2 rounded-full ">
              <img src="/assets/ra.svg"></img>
            </button>
          </div>
        </div>

        {/* Third Line (4 Images, No Buttons) */}
        <div className="mt-[20px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px]">
            {TrendingNowMovie.map((movie, index) => (
              <div key={index}>
                <img
                  src={movie.image}
                  alt={`Poster of ${movie.name}`}
                  className="w-full h-auto rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TrendingNowPage;

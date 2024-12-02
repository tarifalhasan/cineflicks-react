import MovieSlides from "@/components/Shared/MovieSlides";
const TrendingNowMovie = [
  {
    name: "Love Aj Kal",
    image: "/assets/TrendingNow/love.png",
    slug: "tranding-1",
  },
  {
    name: "Lootera",
    image: "/assets/TrendingNow/lootera.png",
    slug: "tranding-2",
  },
  {
    name: "Raanjhanaa",
    image: "/assets/TrendingNow/Rann.png",
    slug: "tranding-3",
  },
  {
    name: "Love Aj Kal",
    image: "/assets/TrendingNow/love.png",
    slug: "tranding-4",
  },
  {
    name: "Lootera",
    image: "/assets/TrendingNow/lootera.png",
    slug: "tranding-5",
  },
  {
    name: "Raanjhanaa",
    image: "/assets/TrendingNow/Rann.png",
    slug: "tranding-6",
  },
];

const TrendingNow = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold relative after:border after:border-black after:h-[16px] after:absolute after:w-full after:left-3 z-20 after:-z-10 after:top-2 text-xl font-ar-one-sans lg:text-3xl l">
            Trending Now
          </h2>
        </div>
        <a href="#" className="text-primary font-semibold text-[18px]">
          View All
        </a>
      </div>

      <MovieSlides items={TrendingNowMovie} />
    </div>
  );
};

export default TrendingNow;

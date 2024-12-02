import MovieDetailsSlides from "@/components/Shared/MovieDetailsSlider";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
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

const MoviewDetails = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: "url('/background_1.png')",
      }}
      className=" py-16 bg-no-repeat bg-cover"
    >
      <div className="container">
        <div className="flex justify-between">
          <div className="inline-flex items-center gap-4">
            <button onClick={() => navigate("/")}>
              <ChevronLeft size={30} />
            </button>
            <h2 className="font-bold relative after:border after:border-black after:h-[16px] after:absolute after:w-full after:left-3 z-20 after:-z-10 after:top-2 text-xl font-ar-one-sans lg:text-3xl l">
              Trending Now
            </h2>
          </div>
          <a href="#" className="text-primary font-normal text-[18px]">
            View All
          </a>
        </div>
        <MovieDetailsSlides items={TrendingNowMovie} />
        <MovieDetailsSlides items={TrendingNowMovie} />
        <MovieDetailsSlides items={TrendingNowMovie} />
      </div>
    </div>
  );
};

export default MoviewDetails;

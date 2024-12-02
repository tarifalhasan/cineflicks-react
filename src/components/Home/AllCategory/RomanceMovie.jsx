import MovieSlides from "@/components/Shared/MovieSlides";

const romanceMovieData = [
  {
    name: "Love Aj Kal",
    image: "/assets/RomanceMovie/love.png",
    slug: "romance-movie",
  },
  {
    name: "Lootera",
    image: "/assets/RomanceMovie/lootera.png",
    slug: "romance-movie",
  },
  {
    name: "Raanjhanaa",
    image: "/assets/RomanceMovie/rann.png",
    slug: "romance-movie",
  },
  {
    name: "Love Aj Kal",
    image: "/assets/RomanceMovie/love.png",
    slug: "romance-movie",
  },
  {
    name: "Lootera",
    image: "/assets/RomanceMovie/lootera.png",
    slug: "romance-movie",
  },
  {
    name: "Raanjhanaa",
    image: "/assets/RomanceMovie/rann.png",
    slug: "romance-movie",
  },
];
const RomanceMovie = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold relative  text-xl font-ar-one-sans lg:text-3xl l">
            Romance Movies
          </h2>
        </div>
        <a
          href="#"
          className="text-[#F2AA4C] font-ar-one-sans  font-medium  text-base font-lg"
        >
          View All
        </a>
      </div>

      <MovieSlides items={romanceMovieData} />
    </div>
  );
};

export default RomanceMovie;

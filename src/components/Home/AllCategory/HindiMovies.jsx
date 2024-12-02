import MovieSlides from "@/components/Shared/MovieSlides";

const hindiMoviesData = [
  {
    name: "Love Aj Kal",
    image: "/assets/HindiMovies/1.png",
    slug: "11",
  },
  {
    name: "Lootera",
    image: "/assets/HindiMovies/2.png",
    slug: "11",
  },
  {
    name: "Raanjhanaa",
    image: "/assets/HindiMovies/3.png",
    slug: "11",
  },
  {
    name: "Love Aj Kal",
    image: "/assets/HindiMovies/1.png",
    slug: "11",
  },
  {
    name: "Lootera",
    image: "/assets/HindiMovies/2.png",
    slug: "11",
  },
  {
    name: "Raanjhanaa",
    image: "/assets/HindiMovies/3.png",
    slug: "11",
  },
];
const HindiMovies = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold relative  text-xl font-ar-one-sans lg:text-3xl l">
            Thriller Movies
          </h2>
        </div>
        <a
          href="#"
          className="text-[#F2AA4C] font-ar-one-sans  font-medium  text-base font-lg"
        >
          View All
        </a>
      </div>

      <MovieSlides items={hindiMoviesData} />
    </div>
  );
};

export default HindiMovies;

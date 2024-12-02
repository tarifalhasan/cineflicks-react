import MovieSlides from "@/components/Shared/MovieSlides";

const thrillerMovies = [
  {
    name: "All of us are dead",
    image: "/assets/ThrillerMovie/1.png",
    slug: "12121",
  },
  {
    name: "Lootera",
    image: "/assets/ThrillerMovie/2.png",
    slug: "12121",
  },
  {
    name: "Raanjhanaa",
    image: "/assets/ThrillerMovie/3.png",
    slug: "12121",
  },
  {
    name: "All of us are dead",
    image: "/assets/ThrillerMovie/1.png",
    slug: "12121",
  },
  {
    name: "Lootera",
    image: "/assets/ThrillerMovie/2.png",
    slug: "12121",
  },
  {
    name: "Raanjhanaa",
    image: "/assets/ThrillerMovie/3.png",
    slug: "12121",
  },
];
const ThrillerMovie = () => {
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

      <MovieSlides items={thrillerMovies} />
    </div>
  );
};

export default ThrillerMovie;

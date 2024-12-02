import MovieSlides from "@/components/Shared/MovieSlides";

const festiveFavData = [
  {
    name: "Kung Fu Panda",
    image: "/assets/FestiveMovies/1.png",
    slug: "12121",
  },
  {
    name: "Zootopia ",
    image: "/assets/FestiveMovies/2.png",
    slug: "12121",
  },
  {
    name: "Spiderman: No way Home",
    image: "/assets/FestiveMovies/3.png",
    slug: "12121",
  },
  {
    name: "Kung Fu Panda",
    image: "/assets/FestiveMovies/1.png",
    slug: "12121",
  },
  {
    name: "Zootopia ",
    image: "/assets/FestiveMovies/2.png",
    slug: "12121",
  },
  {
    name: "Spiderman: No way Home",
    image: "/assets/FestiveMovies/3.png",
    slug: "12121",
  },
];
const FestiveFav = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold relative text-xl font-ar-one-sans lg:text-3xl l">
            Festive Favourites
          </h2>
        </div>
        <a
          href="#"
          className="text-[#F2AA4C] font-ar-one-sans  font-medium  text-base font-lg"
        >
          View All
        </a>
      </div>

      <MovieSlides items={festiveFavData} />
    </div>
  );
};

export default FestiveFav;

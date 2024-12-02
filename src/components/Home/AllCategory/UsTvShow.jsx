import MovieSlides from "@/components/Shared/MovieSlides";

const usTvShowdata = [
  {
    name: "Love Aj Kal",
    image: "/assets/RomanceMovie/love.png",
    slug: "12121",
  },
  {
    name: "Lootera",
    image: "/assets/RomanceMovie/lootera.png",
    slug: "12121",
  },
  {
    name: "Raanjhanaa",
    image: "/assets/RomanceMovie/rann.png",
    slug: "12121",
  },
  {
    name: "Love Aj Kal",
    image: "/assets/RomanceMovie/love.png",
    slug: "12121",
  },
  {
    name: "Lootera",
    image: "/assets/RomanceMovie/lootera.png",
    slug: "12121",
  },
  {
    name: "Raanjhanaa",
    image: "/assets/RomanceMovie/rann.png",
    slug: "12121",
  },
];
const UsTvShow = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold relative  text-xl font-ar-one-sans lg:text-3xl l">
            US TV Shows
          </h2>
        </div>
        <a
          href="#"
          className="text-[#F2AA4C] font-ar-one-sans  font-medium  text-base font-lg"
        >
          View All
        </a>
      </div>
      <MovieSlides items={usTvShowdata} />
    </div>
  );
};

export default UsTvShow;

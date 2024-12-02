import MovieSlides from "@/components/Shared/MovieSlides";

const hindiMoviesData = [
  {
    image: "/assets/newRelease/1.png",
    name: "",
    slug: "45154",
  },
  {
    image: "/assets/newRelease/2.png",
    name: "",
    slug: "45154",
  },
  {
    image: "/assets/newRelease/3.png",
    name: "",
    slug: "45154",
  },
  {
    image: "/assets/newRelease/1.png",
    name: "",
    slug: "45154",
  },
  {
    image: "/assets/newRelease/2.png",
    name: "",
    slug: "45154",
  },
  {
    image: "/assets/newRelease/3.png",
    name: "",
    slug: "45154",
  },
];
const NewRealase = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="font-bold relative text-xl font-ar-one-sans lg:text-3xl l">
          New Releases
        </h2>
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

export default NewRealase;

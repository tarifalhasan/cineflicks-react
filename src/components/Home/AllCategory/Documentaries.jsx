import MovieSlides from "@/components/Shared/MovieSlides";

const behindtheSceneData = [
  {
    name: "Confession of dangerous Mind: An Unauthorised Autbiography ",
    image: "/assets/Documenteries/1.png",
    slug: "dfdfd",
  },
  {
    name: "LoConfession of dangerous Mind: An Unauthorised Autbiography otera",
    image: "/assets/Documenteries/2.png",
    slug: "dfdfd",
  },
  {
    name: "Confession of dangerous Mind: An Unauthorised Autbiography",
    image: "/assets/Documenteries/3.png",
    slug: "dfdfd",
  },
  {
    name: "Confession of dangerous Mind: An Unauthorised Autbiography ",
    image: "/assets/Documenteries/1.png",
    slug: "dfdfd",
  },
  {
    name: "LoConfession of dangerous Mind: An Unauthorised Autbiography otera",
    image: "/assets/Documenteries/2.png",
    slug: "dfdfd",
  },
  {
    name: "Confession of dangerous Mind: An Unauthorised Autbiography",
    image: "/assets/Documenteries/3.png",
    slug: "dfdfd",
  },
];
const Documentaries = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="font-bold relative text-xl font-ar-one-sans lg:text-3xl l">
          Documentaries
        </h2>
        <a
          href="#"
          className="text-[#F2AA4C] font-ar-one-sans  font-medium  text-base font-lg"
        >
          View All
        </a>
      </div>
      <MovieSlides items={behindtheSceneData} />
    </div>
  );
};

export default Documentaries;

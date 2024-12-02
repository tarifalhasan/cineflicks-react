import MovieSlides from "@/components/Shared/MovieSlides";

const behindtheSceneData = [
  {
    name: "Confession of dangerous Mind: An Unauthorised Autbiography ",
    image: "/assets/BehindTheScene/1.png",
    slug: "121212",
  },
  {
    name: "LoConfession of dangerous Mind: An Unauthorised Autbiography otera",
    image: "/assets/BehindTheScene/2.png",
    slug: "121212",
  },
  {
    name: "Confession of dangerous Mind: An Unauthorised Autbiography",
    image: "/assets/BehindTheScene/3.png",
    slug: "121212",
  },
  {
    name: "Confession of dangerous Mind: An Unauthorised Autbiography ",
    image: "/assets/BehindTheScene/1.png",
    slug: "121212",
  },
  {
    name: "LoConfession of dangerous Mind: An Unauthorised Autbiography otera",
    image: "/assets/BehindTheScene/2.png",
    slug: "121212",
  },
  {
    name: "Confession of dangerous Mind: An Unauthorised Autbiography",
    image: "/assets/BehindTheScene/3.png",
    slug: "121212",
  },
];
const BehindtheSchene = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="font-bold relative text-xl font-ar-one-sans lg:text-3xl l">
          Behind the Scenes
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

export default BehindtheSchene;

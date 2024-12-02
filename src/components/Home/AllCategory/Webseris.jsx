import MovieSlides from "@/components/Shared/MovieSlides";

const webSerisData = [
  {
    image: "/assets/WebSeries/2.png",
    name: "SDfdfdf",
  },
  {
    image: "/assets/WebSeries/3.png",
    name: "45454",
  },
  {
    image: "/assets/WebSeries/1.png",
    name: "874584584",
  },
  {
    image: "/assets/WebSeries/2.png",
    name: "SDfdfdf",
  },
  {
    image: "/assets/WebSeries/3.png",
    name: "45454",
  },
  {
    image: "/assets/WebSeries/1.png",
    name: "874584584",
  },
];
const Webseris = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="font-bold relative text-xl font-ar-one-sans lg:text-3xl l">
          Web Series
        </h2>
        <a
          href="#"
          className="text-[#F2AA4C] font-ar-one-sans  font-medium  text-base font-lg"
        >
          View All
        </a>
      </div>
      <MovieSlides items={webSerisData} />
    </div>
  );
};

export default Webseris;

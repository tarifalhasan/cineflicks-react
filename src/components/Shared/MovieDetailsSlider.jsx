import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const MovieDetailsSlides = ({ items }) => {
  return (
    <div className="mt-8  bg-cover lg:mt-12">
      <Carousel
        opts={{
          align: "start",
        }}
        className="relative mt-[20px]"
      >
        {/* Scrollable Grid Container */}
        <CarouselContent>
          {items.map((movie, index) => (
            <CarouselItem
              className=" md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              key={index}
            >
              <Link to={`/movie/${movie.slug}`} className="w-full">
                <div>
                  <img
                    src={movie.image}
                    alt={`Poster of ${movie.name}`}
                    className="w-full h-[190px] md:h-[200px] object-cover rounded-md"
                  />
                  <h4 className="mt-2 text-base lg:text-lg font-medium">
                    {movie.name}
                  </h4>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MovieDetailsSlides;

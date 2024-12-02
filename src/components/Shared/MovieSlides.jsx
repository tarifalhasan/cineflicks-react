import MovieCard from "@/components/Shared/MovieCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MovieSlides = ({ items }) => {
  return (
    <div className="mt-8  lg:mt-12">
      <Carousel
        opts={{
          align: "start",
        }}
        className="relative mt-[20px]"
      >
        {/* Scrollable Grid Container */}
        <CarouselContent>
          {items.map((movie, index) => (
            <CarouselItem className=" md:basis-1/2 lg:basis-1/3" key={index}>
              <MovieCard
                slug={movie.slug}
                imgSrc={movie.image}
                name={movie.name}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className=" -left-1" />
        <CarouselNext className="right-1" />
      </Carousel>
    </div>
  );
};

export default MovieSlides;

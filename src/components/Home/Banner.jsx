import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React, { useState } from "react";

const CarouselDots = ({ api, items }) => {
  const [selected, setSelected] = useState(0);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelected(api.selectedScrollSnap());
    };

    // Listen to Embla events
    api.on("select", onSelect);
    onSelect(); // Initialize selected dot on mount

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="flex justify-center gap-2 mt-4">
      {items.map((_, index) => (
        <Button
          key={index}
          variant="outline"
          size="icon"
          className={`w-3 h-3 border-none rounded-full p-0 ${
            selected === index ? "bg-[#F2AA4C]" : "bg-white"
          }`}
          onClick={() => api && api.scrollTo(index)} // Scroll to specific slide
        />
      ))}
    </div>
  );
};

const HomeBanner = () => {
  const [api, setApi] = useState(null);

  const items = [
    { imgSrc: "/home-banner.png", id: 20 },
    { imgSrc: "/home-banner.png", id: 21 },
    { imgSrc: "/home-banner.png", id: 22 },
    { imgSrc: "/home-banner.png", id: 23 },
    { imgSrc: "/home-banner.png", id: 24 },
  ];

  return (
    <div className="relative ">
      <Carousel setApi={setApi} className="relative">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={item.id}>
              <img
                src={item.imgSrc}
                alt={`Slide ${index}`}
                className="w-full object-cover rounded-lg shadow-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {api && <CarouselDots api={api} items={items} />} {/* Render dots */}
    </div>
  );
};

export default HomeBanner;

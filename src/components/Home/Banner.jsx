import Slider from "react-slick";
import Container from "../Shared/Container";
const HomeBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  };

  const items = [
    {
      imgSrc: "/home-banner.png",
      id: 20,
    },
    {
      imgSrc: "/home-banner.png",
      id: 21,
    },
    {
      imgSrc: "/home-banner.png",
      id: 22,
    },
    {
      imgSrc: "/home-banner.png",
      id: 23,
    },
    {
      imgSrc: "/home-banner.png",
      id: 24,
    },
  ];

  return (
    <Container>
      <div className="p-4">
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={item.id} className="p-2">
              <img
                src={item.imgSrc}
                alt={`Slide ${index}`}
                className="w-full  object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default HomeBanner;

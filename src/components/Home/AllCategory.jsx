import BehindtheSchene from "./AllCategory/BehindtheSchene";
import CategorybyButton from "./AllCategory/CategorybyButton";
import Documentaries from "./AllCategory/Documentaries";
import FestiveFav from "./AllCategory/FestiveFav";
import HindiMovies from "./AllCategory/HindiMovies";
import LanguageCategory from "./AllCategory/LanguageCategory";
import NewRealase from "./AllCategory/NewRealase";
import RomanceMovie from "./AllCategory/RomanceMovie";
import ThrillerMovie from "./AllCategory/ThrillerMovie";
import TrendingNow from "./AllCategory/TrendingNow";
import UsTvShow from "./AllCategory/UsTvShow";
import Webseris from "./AllCategory/Webseris";

const AllCategory = () => {
  return (
    <div className="my-[63px] relative">
      <div className="">
        <div className="flex container flex-col gap-y-8 lg:gap-y-12">
          <TrendingNow />
          <CategorybyButton />
          <RomanceMovie />
          <ThrillerMovie />
          {/* Add Banner 1 */}
          {/* <AddBanner1 /> */}
          <UsTvShow />
          <HindiMovies />
        </div>
        {/* <Cashback /> */}

        <div
          className=" my-6  container pt-8  bg-top rounded-none w-full bg-no-repeat backdrop-blur-[110px] "
          style={{
            backgroundImage: "url('/background_1.png')",
            backgroundSize: "100% 85%",
          }}
        >
          <div className=" gap-y-8 lg:gap-y-12 flex flex-col">
            <FestiveFav />
            <LanguageCategory />
            <BehindtheSchene />
            <Documentaries />
          </div>
        </div>
      </div>

      <div
        className="w-full relative py-20 bg-cover "
        style={{
          backgroundImage: "url(/background_2.png)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] rounded-xl"></div>
        <div className="container">
          <div className="h-[300px]"></div>
          <NewRealase />
        </div>
      </div>
      <div className="container">
        <Webseris />
      </div>
    </div>
  );
};
export default AllCategory;

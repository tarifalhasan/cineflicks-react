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
      <div className="container">
        {/* Trending Movies */}
        <TrendingNow />
        {/* Movie Category Button */}
        <CategorybyButton />
        {/*Romace Movie Category  */}
        <RomanceMovie />
        {/*Thriller Movie Category  */}
        <ThrillerMovie />
        {/* Add Banner 1 */}

        {/* <AddBanner1 /> */}
        {/* Us Tv Show */}
        <UsTvShow />
        {/* HindiMovies  */}
        <HindiMovies />
        {/* Cashback offer */}
        {/* <Cashback /> */}
        {/* Festive Favourite Movies */}
        <FestiveFav />
        {/* Category by lagnguage */}
        <LanguageCategory />

        {/* Behind the schene */}
        <BehindtheSchene />

        {/* Docuemneries */}
        <Documentaries />
      </div>

      <div
        className="w-full relative py-20 bg-cover mt-20"
        style={{
          backgroundImage: "url(/assets/logowithbannerbottom.png)",
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

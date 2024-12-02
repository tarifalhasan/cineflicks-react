import Container from "../Shared/Container";
import AddBanner1 from "./AllCategory/AddBanner1";
import BehindtheSchene from "./AllCategory/BehindtheSchene";
import Cashback from "./AllCategory/Cashback";
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
      <Container>
        {/* Trending Movies */}
        <TrendingNow></TrendingNow>
        {/* Movie Category Button */}
        <CategorybyButton></CategorybyButton>
        {/*Romace Movie Category  */}
        <RomanceMovie></RomanceMovie>
        {/*Thriller Movie Category  */}
        <ThrillerMovie></ThrillerMovie>
        {/* Add Banner 1 */}
        <AddBanner1></AddBanner1>
        {/* Us Tv Show */}
        <UsTvShow></UsTvShow>
        {/* HindiMovies  */}
        <HindiMovies></HindiMovies>
        {/* Cashback offer */}
        <Cashback></Cashback>
        {/* Festive Favourite Movies */}
        <FestiveFav></FestiveFav>
        {/* Category by lagnguage */}
        <LanguageCategory></LanguageCategory>

        {/* Behind the schene */}
        <BehindtheSchene></BehindtheSchene>

        {/* Docuemneries */}
        <Documentaries></Documentaries>
      </Container>

      <div
        className="w-full relative py-20 bg-cover mt-20"
        style={{
          backgroundImage: "url(/assets/logowithbannerbottom.png)",
        }}
      >
        {" "}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] rounded-xl"></div>
        <Container>
          <div className="h-[300px]"></div>
          {/* New Release */}
          <NewRealase></NewRealase>

          {/* Web Seris */}
        </Container>
      </div>
      <Container>
        <Webseris></Webseris>
      </Container>
    </div>
  );
};
export default AllCategory;

import AllCategory from "@/components/Home/AllCategory";
import HomeBanner from "@/components/Home/Banner";
import CategoryButtonGroup from "@/components/Home/CategoryButtonGroup";
import ConnectWalletState from "@/components/Home/ConnectWalletState";
import Review from "@/components/Home/Review";
import { useState } from "react";

function HomePage() {
  const [selectedTab, setSelectedTab] = useState("For You");

  return (
    <div className=" container relative overflow-hidden">
      <CategoryButtonGroup onTabSelect={setSelectedTab} />
      <HomeBanner />
      <Review />
      <ConnectWalletState />
      <AllCategory />
      {/* <SellectWallet></SellectWallet> */}
      {/* <TrendingNowPage></TrendingNowPage> */}

      <img
        className=" absolute w-full top-[12rem] lg:top-[38rem] -z-30"
        src="/background_3.png"
        alt=""
      />
    </div>
  );
}

export default HomePage;

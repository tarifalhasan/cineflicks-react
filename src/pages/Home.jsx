import AllCategory from "@/components/Home/AllCategory";
import HomeBanner from "@/components/Home/Banner";
import CategoryButtonGroup from "@/components/Home/CategoryButtonGroup";
import ConnectWalletState from "@/components/Home/ConnectWalletState";
import Review from "@/components/Home/Review";
import { useState } from "react";

function HomePage() {
  const [selectedTab, setSelectedTab] = useState("For You");

  return (
    <>
      <CategoryButtonGroup onTabSelect={setSelectedTab} />
      <HomeBanner />
      <Review />
      <ConnectWalletState />
      <AllCategory />
      {/* <SellectWallet></SellectWallet> */}
      {/* <TrendingNowPage></TrendingNowPage> */}
    </>
  );
}

export default HomePage;

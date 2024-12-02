import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";

import { useState } from "react";
import AllCategory from "./components/Home/AllCategory";
import HomeBanner from "./components/Home/Banner";
import CategoryButtonGroup from "./components/Home/CategoryButtonGroup";
import ConnectWalletState from "./components/Home/ConnectWalletState";
import Review from "./components/Home/Review";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";
// import SellectWallet from "./components/Shared/SellectWallet";
// import TrendingNowPage from "./components/TrendingNowPage/TrendingNow";

function App() {
  const [selectedTab, setSelectedTab] = useState("For You");

  return (
    <>
      <Header />
      <CategoryButtonGroup onTabSelect={setSelectedTab} />
      <HomeBanner />
      <Review />
      <ConnectWalletState />
      <AllCategory />
      {/* <SellectWallet></SellectWallet> */}
      {/* <TrendingNowPage></TrendingNowPage> */}
      <Footer />
    </>
  );
}

export default App;

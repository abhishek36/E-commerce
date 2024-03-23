import React from "react";
import Banner from "../components/Banner";
import MenuContainer from "../components/MenuContainer";
import TwoCards from "../components/TwoCards";
import TopCategories from "../components/TopCategories";

const Home = () => {
  return (
    <>
      <Banner />
      <TopCategories />
      <MenuContainer />
      <TwoCards />
    </>
  );
};

export default Home;

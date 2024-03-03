import React from "react";
import banner01 from "../assets/banner-01.jpg";
import banner02 from "../assets/banner-02.jpg";

const TwoCards = () => {
  return (
    <>
      <div className="md:flex md:flex-row flex flex-col items-center md:gap-0 gap-10 justify-between md:max-w-[80%] max-w-[90%] mx-auto mt-10">
        <div className="rounded-md overflow-hidden relative md:w-[48%]">
          <img src={banner01} alt="" className="rounded-md" />
          <div className="absolute md:top-16 top-5 md:left-10 left-5 text-white">
            <h3 className="md:text-5xl text-2xl font-serif font-medium">
              fresh made <br /> fruit juice
            </h3>
            <button className="bg-white text-sm text-black px-5 py-2 mt-3 rounded-full">
              get flat 30% off
            </button>
          </div>
        </div>
        <div className="rounded-md overflow-hidden relative md:w-[48%]">
          <img src={banner02} alt="" className="rounded-md" />
          <div className="absolute md:top-16 top-5 md:left-10 left-5 text-white">
            <h3 className="md:text-5xl text-2xl font-serif font-medium">
              fresh made <br /> fruit juice
            </h3>
            <button className="bg-white text-black text-sm px-5 py-2 mt-3 rounded-full">
              get flat 30% off
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoCards;

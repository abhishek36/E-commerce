import React from "react";
import banner from "../assets/banner2.jpg";
import pattern from "../assets/pattern.png";

const Banner = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className="w-full relative md:h-[110vh] h-[500px] mt-[99px]  bg-no-repeat bg-cover bg-center"
      >
        <div className="absolute md:top-[10%] top-[15%] left-[10%]">
          <h4 className="font-sans text-white capitalize tracking-[2px] text-xl">
            yummy & tasty shop
          </h4>
          <h2 className="text-white md:text-[55px] sm:text-4xl text-xl font-medium md:leading-[60px] py-2 font-sans ">
            healthy summer juice <br /> everyday
          </h2>
          <div className="bg-[#FB667A] md:w-fit px-5 py-3 text-white text-md capitalize my-3  rounded-md md:block hidden">
            exclusive summer shop, big deals
          </div>
          <button className="bg-white px-6 md:py-[12px] py-2 rounded-full capitalize hover:bg-[#fb667a] duration-500 hover:text-white">
            shop now
          </button>
        </div>
        <div
          style={{ backgroundImage: `url(${pattern})` }}
          className="absolute md:bottom-[-2px] bottom-[-5px]  w-full h-[145px]"
        ></div>
      </div>
    </>
  );
};

export default Banner;

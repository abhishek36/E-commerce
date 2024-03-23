import React from "react";
import banner from "../assets/banner2.jpg";
import banner1 from "../assets/banner1.jpg";

import pattern from "../assets/pattern.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div>
        <Slider {...settings} className="slider-container">
          <div
            // style={{ backgroundImage: `url(${banner})` }}
            className=" bg-banner1  relative  md:h-[110vh] h-[500px]  bg-no-repeat bg-cover bg-center"
          >
            <div className="absolute md:top-[25%] top-[30%] left-[10%]">
              <h4 className="font-sans text-white capitalize tracking-[2px] text-xl">
                yummy & tasty shop
              </h4>
              <h2 className="text-white md:text-[55px] sm:text-4xl text-xl font-medium md:leading-[60px] py-2 font-sans ">
                ice cream made with <br /> passion
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
              className="absolute md:bottom-[-2px] bottom-[0px]  w-full h-[139px]"
            ></div>
          </div>
          <div
            // style={{ backgroundImage: `url(${banner1})` }}
            className=" bg-banner2 relative md:h-[110vh] h-[500px] bg-no-repeat bg-cover bg-center"
          >
            <div className="absolute md:top-[25%] top-[30%] left-[10%]">
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
              className="absolute md:bottom-[-2px] bottom-[0px]  w-full h-[139px]"
            ></div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Banner;

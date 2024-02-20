import React from "react";
import about from "../assets/about-us.png";
import tag from "../assets/tag.png";

const About = () => {
  return (
    <div className="mt-[150px]">
      <div className="max-w-[80%] py-5 mx-auto flex items-center">
        <div className="w-[60%]">
          <div className="w-full relative">
            <img src={about} alt="" className="w-full" />
            <img
              src={tag}
              alt=""
              className="absolute animate-pulse right-[-50px] top-[-40px]"
            />
          </div>
        </div>
        <div className="w-[40%] p-5 text-center">
          <h4 className="text-[#FF8E9D] text-4xl capitalize font-medium ">
            fresh juice shop
          </h4>
          <h3 className="text-[55px] font-medium ">summer juice</h3>
          <div className="flex justify-center items-center gap-2">
            <span className="text-4xl">.</span>
            <span className="text-4xl">.</span>
            <span className="text-4xl">.</span>
          </div>
          <p className="text-[16px] font-medium py-2">
            Lorem ipsum dolor sit amet, consectetur adialiquip commodincididunt
            ut labore etsectetur adialiquipsectetur adialiquip
          </p>
          <button className="bg-black text-white py-2 px-5 rounded-full my-1 hover:bg-[#FF8E9D] duration-500">
            shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

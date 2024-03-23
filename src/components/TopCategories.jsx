import React from "react";
import glass from "../assets/glass.png";
import ice1 from "../assets/ice1.jpg";
import ice2 from "../assets/ice2.jpg";
import ice3 from "../assets/ice3.jpg";

const TopCategories = () => {
  return (
    <div>
      <div className="flex items-center justify-center pt-10 pb-3 flex-col">
        <img src={glass} alt="" />
        <h3
          className="text-3xl mt-1 text-black font-bold font-sans capitalize
          "
        >
          top categories
        </h3>
      </div>

      <div className="flex md:flex-row flex-col justify-center items-center m-auto md:gap-10 max-w-[80%] gap-[200px] mt-48">
        <div className="md:w-[33%] w-full bg-[#FF9FAC] rounded-md relative">
          <img
            src={ice1}
            alt=""
            className="absolute top-[-10%] left-[50%] translate-y-[-50%] translate-x-[-50%]"
          />
          <div className="text-center pt-[130px] pb-10">
            <h2 className="text-white text-4xl font-medium font-sans">
              ice cream
            </h2>
            <div className="flex justify-center items-center gap-2 py-4">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
            </div>
            <div className="text-white flex flex-col gap-2 text-[18px] capitalize font-sans">
              <p>mint chocolate</p>
              <p>buttered pecan</p>
              <p>strawberry</p>
              <p>vanilla</p>
              <p>baskin rubbins</p>
            </div>
          </div>
        </div>
        <div className="md:w-[33%] w-full bg-[#9ECBDD] rounded-md relative">
          <img
            src={ice2}
            alt=""
            className="absolute top-[-10%] left-[50%] translate-y-[-50%] translate-x-[-50%]"
          />
          <div className="text-center pt-[130px] pb-10">
            <h2 className="text-white text-4xl font-medium font-sans">
              ice cream
            </h2>
            <div className="flex justify-center items-center gap-2 py-4">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
            </div>
            <div className="text-white flex flex-col gap-2 text-[18px] capitalize font-sans">
              <p>mint chocolate</p>
              <p>buttered pecan</p>
              <p>strawberry</p>
              <p>vanilla</p>
              <p>baskin rubbins</p>
            </div>
          </div>
        </div>
        <div className="md:w-[33%] w-full bg-[#99D3AB] rounded-md relative">
          <img
            src={ice3}
            alt=""
            className="absolute top-[-10%] left-[50%] translate-y-[-50%] translate-x-[-50%]"
          />
          <div className="text-center pt-[130px] pb-10">
            <h2 className="text-white text-4xl font-medium font-sans">
              ice cream
            </h2>
            <div className="flex justify-center items-center gap-2 py-4">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
            </div>
            <div className="text-white flex flex-col gap-2 text-[18px] capitalize font-sans">
              <p>mint chocolate</p>
              <p>buttered pecan</p>
              <p>strawberry</p>
              <p>vanilla</p>
              <p>baskin rubbins</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;

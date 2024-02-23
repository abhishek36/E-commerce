import React, { useEffect } from "react";
import glass from "../assets/glass.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchJuice } from "../features/juice/juiceSlice";
import anim from "../assets/animation1.png";
import anim2 from "../assets/animation2.png";
import anim3 from "../assets/animation3.png";
import anim4 from "../assets/animation4.png";
import pattern from "../assets/pattern.png";
import MenuItem from "./MenuItem";

const MenuContainer = ({ setModal }) => {
  const { alljuice, isLoading } = useSelector((state) => state.juice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchJuice());
  }, []);

  if (isLoading) {
    return <h1>loading...</h1>;
  }
  
  return (
    <>
      <div className="pt-[80px] pb-[100px] w-full bg-[#ff9fac] mt-[100px] relative">
        <div className="flex items-center justify-center flex-col">
          <img src={glass} alt="" />
          <h3
            className="text-3xl text-white font-bold py-2 font-sans capitalize
          "
          >
            trending products
          </h3>
        </div>

        <div className="w-full">
          <div className="flex justify-between gap-5 px-2 flex-wrap md:max-w-[80%] max-w-[90%] mx-auto py-[50px]">
            {alljuice?.map((juice) => (
              <MenuItem key={juice.id} juice={juice} setModal={setModal} />
            ))}
          </div>
        </div>
        <img
          src={anim}
          alt=""
          className="absolute md:top-4 md:w-[200px] animate-bounce-slow"
        />
        <img
          src={anim2}
          alt=""
          className="absolute md:top-4 right-0 md:w-[150px]"
        />
        <img
          src={anim3}
          alt=""
          className="absolute md:bottom-0 left-[-50px] md:w-[180px]"
        />
        <img
          src={anim4}
          alt=""
          className="absolute md:bottom-0 animate-bounce-slow duration-1000 right-0 md:w-[150px]"
        />
        <div
          style={{ backgroundImage: `url(${pattern})` }}
          className="absolute md:bottom-[-2px] bottom-[-6px]  w-full h-[145px]"
        ></div>
      </div>
    </>
  );
};

export default MenuContainer;

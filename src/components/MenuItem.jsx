import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const MenuItem = ({ juice }) => {
  const { img, name, price, id } = juice;

  return (
    <>
      <div className="border md:w-[23%] z-10 sm:w-[48%] w-full bg-white p-3 rounded-md">
        <div className="relative">
          <img src={img} alt="" className="w-full" />
          <Link to={`singlejuice/${id}`}>
            <div className="absolute left-[50%] bottom-[-20px] translate-x-[-50%] bg-white rounded-full  w-[45px] h-[45px] flex items-center justify-center text-white">
              <FaEye
                size={20}
                className="bg-[#dadada] text-black w-10 h-10 p-3
              hover:bg-[#ff9fac] hover:text-white duration-500 cursor-pointer
              rounded-full " // onClick={handleCart}
              />
            </div>
          </Link>
        </div>
        <span className="flex justify-center text-orange-500 mt-7">
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
        </span>
        <h4 className="text-center capitalize py-1 font-medium">{name}</h4>
        <h6 className="text-[#FF8E9D] font-bold text-center">₹{price}</h6>
      </div>
    </>
  );
};

export default MenuItem;

import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import footer from "../assets/logo.jpg";

const Footer = () => {
  return (
    <>
      <div className="bg-[#191919] text-[#aaa] mt-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="items-center justify-center text-sm capitalize py-5 border-b border-[rgba(255,255,255,.15)] md:flex hidden">
            <p>
              terms and conditions of use <span className="px-3">|</span> about
              us <span className="px-3">|</span>
              secure payment <span className="px-3">|</span> contact us
              <span className="px-3">|</span>stores
            </p>
          </div>

          <ul className="pt-10 px-3 gap-10 pb-[80px] flex md:flex-row flex-col justify-between border-b  border-[rgba(255,255,255,.15)] ">
            <li className="md:w-[33%] w-full flex flex-col items-center">
              <h4 className="text-white mb-5 text-xl capitalize font-sans">
                store information
              </h4>
              <div className="flex mb-1 items-center gap-2 text-sm capitalize">
                <FaLocationDot />
                <h6>summer store indore</h6>
              </div>
              <div className="flex mb-1 items-center gap-2 text-sm capitalize">
                <FaPhoneAlt />
                <h6>+91 0123456789</h6>
              </div>
              <div className="flex mb-1 items-center gap-2 text-sm capitalize">
                <FaEnvelope />
                <h6>summer@gmail.com</h6>
              </div>
            </li>

            <li
              className="md:w-[33%] w-full
             flex justify-center flex-col gap-5 items-center"
            >
              <img src={footer} alt="" />
              <div className="bg-white relative w-full p-1 rounded-full overflow-hidden">
                <input
                  type="email"
                  placeholder="your email address"
                  className="w-full h-[40px] pl-5 outline-none placeholder:text-black text-black"
                />
                <button className="bg-[#FB667A] absolute right-1 px-5 text-white font-medium rounded-full h-[40px]">
                  subscribe
                </button>
              </div>
            </li>

            <li className="md:w-[33%] w-full flex items-center flex-col md:text-right text-center">
              <h4 className="text-white mb-5 text-xl capitalize font-sans">
                about us
              </h4>
              <p className="text-[#aaa] text-sm">
                Style too own civil out along. Perfectly offending attempted add
                arranging age gentleman. Get who uncommonly
              </p>
            </li>
          </ul>

          <div className="text-center py-5 text-sm">
            ©2024 - made by ❤ abhishek sharma
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [fix, setFix] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const Scroll = () => {
    if (window.scrollY >= 75) {
      setFix(true);
    } else {
      setFix(false);
    }
  };
  window.addEventListener("scroll", Scroll);
  return (
    <>
      <nav
        className={`fixed bg-[#FFB9C3] top-0 z-10 left-0 right-0 px-5 py-3 flex items-center justify-between ${
          fix ? "bg-[#FF9FAC] duration-500 z-20" : null
        }`}
      >
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="md:flex hidden items-center gap-8 text-xl text-white capitalize ">
          <li>
            <Link to={"/"}>home</Link>
          </li>
          <li>
            <Link to={"/about"}>about</Link>
          </li>
          <li>
            <Link to={"/news"}>news</Link>
          </li>
        </ul>
        <div className="flex items-center bg-white px-4 py-2 rounded-full gap-2">
          <Link to={"/cart"} className="flex items-center gap-2">
            <FiShoppingCart />
            <div className="bg-pink-500 rounded-full w-5 h-5 flex items-center justify-center text-white p-1">
              {cartItems.length}
            </div>
            <p className="text-xl">cart</p>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

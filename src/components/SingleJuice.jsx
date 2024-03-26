import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleJuice } from "../features/juice/juiceSlice";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { useParams } from "react-router-dom";
import truck from "../assets/truck.png";
import cash from "../assets/cash.png";
import gits from "../assets/gits.png";
import hours from "../assets/hours.png";
import { addToCart } from "../features/cart/cartSlice";
import toast from "react-hot-toast";
import { PulseLoader } from "react-spinners";

const SingleJuice = () => {
  const { singleJuice, isLoading } = useSelector((state) => state.juice);
  const { img, price, id, name, desc, rating } = singleJuice;
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(fetchSingleJuice(params.id));
  }, []);

  const handleCart = () => {
    dispatch(addToCart({ id, img, name, price, qty: 1 }));
    toast.success(`added ${name}`, {
      style: {
        backgroundColor: "#FF9FAC",
        fontWeight: 500,
        textTransform: "capitalize",
        color: "white",
      },
    });
  };

  if (isLoading) {
    return (
      <h1 className="flex justify-center align-middle py-20">
        <PulseLoader
          loading={true}
          color="pink"
          style={{ paddingBlock: "20px" }}
        />
      </h1>
    );
  }
  return (
    <>
      <div className="py-[150px] w-full bg-[#ff9face5] text-white">
        <div className="max-w-[1000px] px-2 md:flex mx-auto">
          <div className="w-[35%] p-2 border rounded-md">
            <img
              src={img}
              alt="singleimg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-[65%]  p-2">
            <h2 className="text-2xl capitalize">{name}</h2>
            <p className="text-xl capitalize py-2">rating: {rating}</p>
            <p className="text-[17px]">{desc}...</p>

            <p className="text-2xl capitalize py-1 border-t border-[#dadada] my-3">
              price: ₹{price}
            </p>
            <button
              onClick={handleCart}
              className="bg-[#ef497e] text-white font-medium capitalize px-3 flex items-center gap-2 py-3 rounded-md my-2 text-xl hover:bg-pink-300 duration-500"
            >
              add to cart
              <LiaShoppingCartSolid size={25} />
            </button>
            <div className="md:flex md:flex-row flex flex-col gap-3 py-5 md:items-center md:justify-between">
              <div className="flex flex-col gap-1">
                <img className="w-[40px]" src={truck} alt="" />
                <p className="text-[14px] font-medium capitalize">
                  free shipping on order above ₹699
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <img className="w-[35px]" src={cash} alt="" />
                <p className="text-[14px] font-medium capitalize">
                  cash on delivery available
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <img className="w-[35px]" src={gits} alt="" />
                <p className="text-[14px] font-medium capitalize">
                  free gifts on above ₹500
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <img className="w-[40px]" src={hours} alt="" />
                <p className="text-[14px] font-medium capitalize">
                  24 hours shipping
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleJuice;

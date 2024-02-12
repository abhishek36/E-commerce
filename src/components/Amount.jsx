import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Amount = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const totalAmount = cartItems.reduce((p, c) => p + c.qty * c.price, 0);
  const totalQnt = cartItems.reduce((p, c) => p + c.qty, 0);
  return (
    <>
      <h5 className="text-xl border-b border-[#aaa] font-medium capitalize p-4 bg-gray-200">
        price details
      </h5>
      <ul className="p-2 py-5 flex flex-col gap-3">
        <li className="flex capitalize font-medium items-center justify-between">
          <p>price ({totalQnt} item)</p>
          <p>₹{totalAmount}</p>
        </li>

        <li className="flex capitalize items-center font-medium justify-between">
          <p>delivery charges</p>
          <p className="flex gap-1">
            <del>₹40</del>
            <span className="text-green-500">free</span>
          </p>
        </li>
        <li className="flex flex-col capitalize border-y border-[#aaa] py-2 my-5 font-medium">
          <div className="flex w-full items-center justify-between">
            <p className="text-1xl">total quantity:</p>
            <p className="text-1xl">{totalQnt}</p>
          </div>
          <div className="flex w-full items-center justify-between">
            <p className="text-2xl">total amount:</p>
            <p className="text-2xl font-normal">₹{totalAmount}</p>
          </div>
        </li>
        <li>
          <Link to={"/checkout"}>
            <button className="bg-black text-white w-full py-3 text-xl capitalize">
              proceed to checkout
            </button>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Amount;

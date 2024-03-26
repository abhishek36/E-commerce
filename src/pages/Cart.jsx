import React from "react";
import { useSelector } from "react-redux";
import CartItems from "../components/CartItems";
import { FaShoppingBag } from "react-icons/fa";
import Amount from "../components/Amount";
import empty from "../assets/empty.gif";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  if (cartItems.length === 0) {
    return (
      <div className="mt-[150px] flex-col gap-2 items-center flex justify-center">
        <h1 className="text-xl capitalize">your cart is empty</h1>
        <img src={empty} alt="" />
      </div>
    );
  }
  return (
    <>
      <div className="py-[150px] bg-[#91D7CF]">
        <div className="flex items-center gap-2 justify-center">
          <FaShoppingBag size={40} className="text-[#FB667A]" />
          <h4 className="text-2xl capitalize">my cart</h4>
        </div>
        <div className="md:flex md:flex-row px-2 flex flex-col gap-10 justify-between max-w-[1200px] mx-auto mt-10">
          <div className="md:w-[68%] w-full flex flex-col gap-5">
            {cartItems?.map((cartItem) => (
              <CartItems key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>
          <div className="md:w-[28%] w-full h-fit border bg-gray-100">
            <Amount />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

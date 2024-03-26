import React from "react";
import { useSelector } from "react-redux";

const CheckOut = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const totalAmount = cartItems.reduce((p, c) => p + c.qty * c.price, 0);
  const totalQnt = cartItems.reduce((p, c) => p + c.qty, 0);

  return (
    <div className="py-[150px] bg-[#91D7CF]">
      <div className="  md:flex md:flex-row flex flex-col-reverse md:gap-0 gap-3 md:max-w-[80%] max-w-[90%] mx-auto">
        <div className="left md:w-[60%] w-full  p-3">
          <div>
            <h2 className="text-[20px] capitalize font-medium">contact</h2>
            <input
              type="email"
              placeholder="email"
              className="border outline-none w-full p-2 my-2 capitalize text-xl"
            />
          </div>
          <div>
            <h2 className="font-medium capitalize text-[20px]">delivery</h2>
            <select name="" id="" className="w-full p-2 border my-2 capitalize">
              <option value="">country</option>
              <option value="">india</option>
              <option value="">pakistan</option>
              <option value="">england</option>
              <option value="">australia</option>
            </select>
          </div>
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="first name"
              className="w-[48%] border p-2 capitalize text-xl outline-none"
            />
            <input
              type="text"
              placeholder="last name"
              className="w-[48%] border p-2 capitalize text-xl outline-none"
            />
          </div>
          <input
            type="address"
            placeholder="address"
            className="w-full border my-2 p-2 text-xl capitalize outline-none"
          />
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="city"
              className="border w-[32%] p-2 capitalize text-xl"
            />
            <select
              name=""
              id=""
              className="border w-[32%] text-xl p-2 capitalize"
            >
              <option value="">state</option>
              <option value="">madhya pradesh</option>
              <option value="">rajasthan</option>
              <option value="">punjab</option>
            </select>
            <input
              type="number"
              placeholder="pincode"
              className="border w-[32%] text-xl capitalize p-2"
            />
          </div>

          <div className="mt-10">
            <div className="flex gap-2">
              <input type="checkbox" />
              <h2 className="text-xl capitalize font-medium">payment</h2>
            </div>
            <p className="capitalize my-1">
              all transactions are secured and encrypted
            </p>
            <div className="bg-gray-200 p-5">
              <h3 className="text-xl capitalize font-medium my-1">
                credit card
              </h3>
              <input
                type="number"
                placeholder="card number"
                className="bg-white outline-none my-2 p-2 capitalize text-xl "
              />
              <div className="flex justify-between">
                <input
                  type="number"
                  placeholder="expiration date(MM /YY)"
                  className="p-2 bg-white capitalize text-xl outline-none my-2 w-[48%]"
                />
                <input
                  type="text"
                  placeholder="security code"
                  className="p-2 bg-white capitalize text-xl outline-none my-2 w-[48%]"
                />
              </div>
              <input
                type="text"
                placeholder="name on card"
                className="p-2 bg-white capitalize text-xl outline-none my-2 w-full"
              />
            </div>

            <div className="flex gap-2 my-2">
              <input type="checkbox" />
              <h2 className="text-xl capitalize font-medium">
                cash on delivery (COD)
              </h2>
            </div>
            <button className="w-full capitalize text-xl bg-[#006EA6] text-white p-2 font-medium">
              pay now
            </button>
          </div>
        </div>
        <div className="right md:w-[40%] w-full md:p-10 p-4 bg-[#FAFAFA]">
          {cartItems.map((item) => {
            return (
              <>
                <div
                  key={item.id}
                  className="flex mb-2 items-center justify-between border"
                >
                  <div className="flex">
                    <div className="relative">
                      <img src={item.img} alt="img" className="w-[50px]" />
                      <div className="absolute top-[-5px] bg-slate-500 w-5 p-1 h-5 rounded-full flex items-center justify-center text-white">
                        {item.qty}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl capitalize">{item.name}</h4>
                      <p className="text-[18px]">₹{item.price}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}

          <div className="flex gap-2 mt-5">
            <input
              type="text"
              placeholder="apply your coupon"
              className="flex flex-1 capitalize w-[75%] text-xl p-2 outline-none"
            />
            <button className="bg-[#F1F1F1] w-[25%] capitalize text-xl outline-none border text-black p-2">
              apply
            </button>
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <p className="capitalize text-xl">total quantity:</p>
              <p className="text-[18px]">{totalQnt}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="capitalize text-xl">delivery charges:</p>
              <p className="text-[18px] text-green-500">
                <del>-₹40 free</del>
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="capitalize font-medium text-xl">total:</p>
              <p className="text-[18px]">₹{totalAmount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;

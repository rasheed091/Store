import React, { useState } from "react";
import { TbShoppingCartDollar } from "react-icons/tb";
import { useCartStore } from "../store/ricCart";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { FaArrowLeftLong } from 'react-icons/fa6';
export default function Cart() {
  const {
    carts,
    increaseQuantity,
    decreaseQuantity,
    clearQuantity,
    removeQuantity,
  } = useCartStore();
  // const [count, setCount] = useState(0)
  const total = carts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (carts.length == 0) {
    return (
      <div style={{fontFamily: 'Berkshire Swash',}} className='flex flex-col justify-center items-center h-[100vh] bg-[#241a14]  '>
        <div className='rounded p-[20px] shadow justify-center flex flex-col items-center mt-[20%] mb-[13%] bg-[brown]/10 slide-in'>
          <img className=' w-[fit] h-[50vh]' src= 'src/assets/emptyCart.jpg' alt="" />
            <h1 className='font-bold text-[30px] mt-5 text-center text-white'>Your Cart is Empty</h1>
              <button className='flex gap-5 border border-white mt-4 rounded-2xl px-3 py-1 hover:bg-white hover:text-[#241a14] transition duration-300'>
                <FaArrowLeftLong size={25} color='#241a14'/>
                  <Link to='/shop'>
                    <h1 className='text-[17px font-bold'>Back to Shop</h1>
                  </Link>
              </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className=" bg-[#33241e] px-7 h-full">
        <div className="flex justify-center place-content-between">
          {/* left content */}
          <div className="mt-[10%]">
            <div className="">
              {carts.map((eachcart) => (
                
                <div
                  className=" "
                  style={{ fontFamily: "poppins" }}
                >
                  <div className=" text-white  py-3">
                    <div className="px-4">
                      <div className="flex items-center place-content-between font-extrabold my-2">
                        <p className="ml-[90px]">Product</p>
                        <p className="ml-[28%]">Quality</p>
                        <p className="mr-[11%]">Price</p>
                      </div>
                      <div className="flex shadow p-2 items-center place-content-between rounded bg-[brown]/10">
                        <div className="flex items-center w-[45%] h-[15vh] gap-3">
                          <div className="w-[20%] p-5 rounded-[10px] ">
                            <img src={eachcart.image} alt="" />
                          </div>
                          <div>
                            <p className="font-bold">{eachcart.title}</p>
                            <p>{eachcart.category}</p>
                          </div>
                        </div>
                        <div className="flex justify-center rounded-[20px] bg-[#33241e] items-center w-[10%] gap-3 p-1 ">
                          <FaMinus
                            onClick={() => decreaseQuantity(eachcart.id)}
                          />
                          <p className="border-x border-x-[gray] px-3">
                            {eachcart.quantity}
                          </p>
                          <FaPlus
                            onClick={() => increaseQuantity(eachcart.id)}
                          />
                        </div>
                        <div className="flex items-center justify-center gap-[54px]">
                          <h1 className="font-bold">{eachcart.price}</h1>
                          <IoTrash
                            onClick={() => removeQuantity(eachcart.id)}
                            size={27}
                            color="orangered"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className=" h-[10vh] mt-[10%] gap-[20%] flex p-7 items-center" style={{fontFamily: 'Berkshire Swash',}}>
              <Link to={"/proo"}>
                <button className='flex gap-5 border border-white mt-4 rounded-2xl px-3 py-1 hover:bg-white hover:text-[#241a14] transition duration-300'>Procced to CheckOut</button>
              </Link>
              <button className='flex gap-5 border border-white mt-4 rounded-2xl px-3 py-1 hover:bg-white hover:text-[#241a14] transition duration-300' onClick={() => clearQuantity()}>Remove Cart</button>
            </div>
          </div>

          {/* right content */}
          <div className="w-[30%] mt-[10%]  text-white  ml-4">
            <div className="bg-[brown]/10 w-[80%] rounded shadow p-2 mb-4">
              <h1 className="border-b border-[#33241e] font-bold py-3 mb-2">
                Coupon Code
              </h1>
              <input
                className="bg-[#33241e] p-3 w-[100%] rounded"
                type="text"
                placeholder="Enter Your Coupon Code"
              />
              <button className="my-5 bg-[brown]/10 p-3 w-[100%] font-bold  text-white hover:bg-white hover:text-black transition-300 rounded">
                Apply Your Coupon
              </button>
            </div>
            <div className="bg-[brown]/10 w-[80%] rounded shadow p-2 mb-4">
              <h1 className="border-b border-b-[gray] font-bold py- mb-[20px]">
                Order Summary
              </h1>
              <div className="flex place-content-between">
                <h1>Discount</h1>
                <p>$00.00</p>
              </div>
              <div className="flex place-content-between gap-10">
                <h1>Delivery</h1>
                <p>$00.00</p>
              </div>
              <div className="flex place-content-between">
                <h1>Tax</h1>
                <p>$00.00</p>
              </div>
              <div className="flex place-content-between">
                <h1>Total</h1>
                <p>{total}</p>
              </div>
            </div>
            <div className="bg-[brown]/10 w-[80%] rounded shadow p-2">
              <h1 className="border-b border-b-[gray] font-bold py-3 mb-7">
                Coupon Code
              </h1>
              <input
                className="bg-[#33241e] p-3 w-[100%] rounded"
                type="text"
                placeholder="Enter Your Coupon Code"
              />
              <button className="my-5 font-bold  text-white hover:bg-white hover:text-black transition-300 rounded">
                Apply Your Coupon
              </button>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

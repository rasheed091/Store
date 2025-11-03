import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsFillStarFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCalendarScheduleFill } from "react-icons/ri";

import { useCartStore } from "../store/ricCart";
import { TbGardenCartFilled } from "react-icons/tb";
import { BsCart4 } from "react-icons/bs";

export default function Single() {
  const [single, setSingle] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const [count, setCount] = useState(0);

  const addToCart = useCartStore((state) => state.addToCart);
  const Cart = useCartStore((state) => state.carts);
  const totalCount = Cart.reduce((sum, item) => sum + item.quantity, 0);

  const URL = "https://fakestoreapi.com/products";
  const { id } = useParams();

  const Singles = async (id) => {
    try {
      const resp = await axios.get(`${URL}/${id}`);
      setSingle(resp.data);
      console.log(resp.data);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    Singles(id);
  }, [id]);

  return (
    <>
      <div className="  bg-[#33241e]">
        <div
          className=" gap-[30px] flex justify-center items-center"
          style={{ fontFamily: "Public Sans Variable" }}
        >
          <img
            className="shadow p-[70px] w-[20%] bg-[brown]/10 rounded-2xl "
            src={single.image}
            alt=""
          />

          <div>
            
          </div>
          <div className="  flex flex-col mt-[10%] w-[40%] ">
            <div className="bg-[brown]/10 shadow-2xl text-white px-5 py-2">
                <h2 className="text-[20px] font-bold ">{single.title}</h2>
                <h1>{single.description}</h1>
            </div>
            <div className="flex my-5 ">
              <BsFillStarFill color="green" />
              <BsFillStarFill color="green" />
              <BsFillStarFill color="green" />
              <BsFillStarFill color="green" />
              <BsFillStarFill color="green" />
            </div>
            <h1 className=" w-[20%] py-2  flex justify-center rounded mb-4 text-[white] shadow font-bold bg-[brown]/10 ">
              ${single.price}
            </h1>
            <div className=" ">
              <div className="">
                <div className="rounded-4xl h-[15%] w-[20%] bg-[#d8d6d6] mb-[20px] p-2 justify-center items-center flex gap-4 relative">
                  <FaMinus onClick={() => setCount(count - 1)} size={18} />
                  <p className="">{count}</p>
                  <FaPlus onClick={() => setCount(count + 1)} size={18} />
                </div>
                <AiFillDelete className="h-[25%]" size={30} color="red" />
              </div>
              <div className="flex items-center gap-[10px] pb-7 text-[10px]">
                <button className="font-bold w-[20%] bg-green-600 rounded-[20px] h-[10%] p-2">
                  Buy Now
                </button>
                <button
                  onClick={() => addToCart(single)}
                  className="font-bold w-[20%] text-[green] border rounded-[20px] h-[10%] p-2"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className=" h-[20vh] bg-[brown]/10 shadow rounded-2xl w-[54%] p-[18px] text-white mt-5 mb-[50px]">
              <div className="flex gap-4 mb-4 border-b pb-3 border-b-[#c5c3c3]">
                <TbTruckDelivery size={25} color="orangered" />
                <div className="text-[10px]">
                  <p className="font-bold">Free Delivery</p>
                  <h2 className="underline">
                    Enter your postal code for delivery availability
                  </h2>
                </div>
              </div>
              <div className="flex gap-4 mb-[30%]">
                <RiCalendarScheduleFill size={20} color="orangered" />
                <div className="text-[10px]">
                  <h1 className="font-bold">Return Delivery</h1>
                  <p>
                    Free 30Days delivery Returns.{" "}
                    <span className="underline">Details</span>{" "}
                  </p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

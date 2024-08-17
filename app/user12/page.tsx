"use client";
import Link from "next/link";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

export default function User12() {
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 1) {
    decrementCounter = () => setCounter(1);
  }

  return (
    <div className="h-screen flex justify-between items-center flex-col text-xl">
      <div className="flex justify-between items-center  ">
        <div className="flex justify-between items-center ">
          <button className="border-2 border-black rounded-full ml-2 mt-2 h-10 w-10 mr-80 ">
            <Link href={"/user3"}>
              <ArrowBack />
            </Link>
          </button>
        </div>
      </div>
      <div className="text-center text-2xl ">Cart</div>
      <div>
        <div className="">
          <div className="border-4  ml-2 mr-2 grid grid-cols-2 p-2 ">
            <img src="/balaji.png"></img>
            <div className="text-2xl ">
              {" "}
              simply salted
              <div>price= ₹10</div>
              <div className="flex">
                <button onClick={incrementCounter} className="mr-2">
                  <ArrowDropUpIcon className="border-2 rounded-full " />
                </button>
                {counter}
                <button onClick={decrementCounter} className="ml-2">
                  <ArrowDropDownIcon className="border-2 rounded-full" />
                </button>
                <button className="rounded-full border-2 ml-20 i ">
                  <DeleteIcon />
                </button>
              </div>
             </div>
          </div>

          <div className="border-4  ml-2 mr-2 grid grid-cols-2 row-span-2 ">
            <img src="/thumsup.png"></img>
            <div className="text-2xl">
              {" "}
              Thums Up
              <div>price=₹38</div>
            </div>
          </div>
          <div>
            <div className="border-2 grid grid-cols-2 col ml-2 mr-2 ">
              <img src="/oreoo.png"></img>
              <div className="text-left text-2xl">
                {" "}
                Oreo
                <div className="text-2xl"> price= ₹10</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-xl text-bold ">ORDER INFORMATION</div>
          <div className="flex justify-between items-center p-2">
            <div>Sub Total</div>
            <div> ₹58</div>
          </div>
          <div className="flex justify-between items-center p-2">
            <div>Discount </div>
            <div>-</div>
          </div>
          <div className="flex justify-between items-center p-2">
            <div>Total</div>
            <div> ₹58</div>
          </div>
        </div>

        <div className="w-full">
          <button className="bg-violet-700 w-full  h-20 text-white text-center">
            <Link href={"/user9"}>Place Order</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

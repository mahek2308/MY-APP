"use client";
import Link from "next/link";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";

export default function User12() {
  return (
    <div className="h-screen flex-col ">
      <div className=" p-4 ">
        <div className="flex justify-between items-center p-2">
          <button className="border-2 border-black rounded-full  h-10 w-10 ">
            <Link href={"/order"}>
              <ArrowBack />
            </Link>
          </button>
        </div>
      </div>
      <div className="">
        <div className="border-4  ml-2 mr-2 grid grid-cols-2 p-2 mt-5 border-black">
          <img  className="" src="/balaji.png"></img>
          <div className="text-xl ">
            {" "}
            simply salted
            <div>price= ₹10</div>
          </div>
        </div>
      </div>
      <div className="mt-80">
        <div className="flex justify-between items-center p-2">
          <h1 className="text-xl">Date & Time</h1>
          <div>31/07/2024,4:45PM</div>
        </div>
        <div className="text-xl text-bold p-2 ">ORDER INFORMATION</div>
        <div className="flex justify-between items-center p-2">
          <div>Sub Total</div>
          <div> ₹10</div>
        </div>
        <div className="flex justify-between items-center p-2">
          <div>Discount </div>
          <div>-</div>
        </div>
        <div className="flex justify-between items-center p-2">
          <div>Total</div>
          <div> ₹10</div>
        </div>
      </div>
    </div>
  );
}

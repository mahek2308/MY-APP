"use client";
import * as React from "react";
import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import Home from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import user4 from "../user4/page";
import user5 from "../user5/page";
import user6 from "../user6/page";
import Link from "next/link";
import GradingIcon from "@mui/icons-material/Grading";
import { CardTravel } from "@mui/icons-material";
import { useState } from "react";
import { useRouter } from "next/navigation";

const defaultCategories = [
  { id: "4", name: "Waffers" },
  { id: "5", name: "Cold Drinks" },
  { id: "6", name: "Biscuits" },
];

export default function User3() {
  const navigate = useRouter();
  const getProductById = (id: string) => {
    navigate.push("/user" + id);
  };

  return (
    <div className="flex h-screen flex-col justify-between items-center overflow-hidden">
      <div className="w-full flex justify-between items-center ">
        <div>
          
          <div className="text-2xl ml-2 mt-5 ">
            <Image src={"/logo.png"} width={80} height={50} alt={""}/>
            Grab Your Product Here,
          </div>
        </div>
        <div>
          <button className="border-2 rounded-lg h-10 w-20 mr-2 mt-5">
            <Link href={"/profile"}>
              <PersonIcon />
            </Link>
          </button>
        </div>
      </div>

      <div className="w-full overflow-y-scroll">
      <div>
        <div className="mt-5  mr-2  text-center">
          <input
            className="border-2 color-black text-2xl h-10  w-full ml-1  border-black rounded-lg "
            type="text"
            placeholder="search"
          />
        </div>
      </div>
      <div>
        <div className="p-3 mt-2 text-bold text-black text-2xl ml-2">
          <p>category</p>
        </div>
        {defaultCategories.map((value) => {
          return (
            <button
              key={value.id}
              className=" p-2 ml-5  text-bold text-xl text-center bg-slate-50 w-22 border-2 border-radius-lg "
              onClick={() => getProductById(value.id)}
            >
              {value.name}
            </button>
          );
        })}
      </div>
      <div>
        <div className="grid grid-cols-2 gap-4 w-full p-4 mt-4">
          <div className="h-[235px] ">
            <div className="p-4">
              <div className="relative">
                <img
                  className="border-2 rounded ml-2 border-radius-lg h-48 border-black p-6"
                  src="/lay.png"
                />
              </div>
              <div className="text-center text-bold">Lays</div>
              <div className="text-center">₹10</div>
            </div>
          </div>

          <div className="h-[235px]">
            <div className="p-4 ">
              <img
                className="border-2 rounded ml-2 border-radius-lg h-48 border-black "
                src="/balaji.png"
              />

              <div className="text-center text-bold text-xl">
                Balaji Waffers
              </div>
              <div className="text-center">₹20</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full p-4">
          <div>
            <div className="h-[235px]">
              <div className="p-4 ">
                <img
                  className="border-2 rounded ml-2 border-radius-lg h-48 border-black"
                  src="/thumsup.png"
                />

                <div className="text-bold text-xl text-center"> Thums Up </div>
                <div className="text-center">₹38</div>
              </div>
            </div>
          </div>
          <div>
            <div className="h-[235px]">
              <div className="p-4 ">
                <img
                  className="border-2 border-black rounded ml-2 border-radius-lg h-48"
                  src="/cake.png"
                />

                <div>
                  <div className="text-bold text-xl text-center ">
                    {" "}
                    Chocolate Cake
                  </div>
                  <div className="text-center">₹500</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="w-full">
        <div className=" flex  bg-violet-500 justify-between items-center">
          <button className=" h-20 ml-5">
            <Link href={"/user3"}>
              <HomeIcon />
            </Link>
          </button>
          <button className=" h-20">
            <Link href={"/user12"}>
              <ShoppingCartIcon />
            </Link>
          </button>

          <button className="  mr-2 h-20">
            <Link href={"/order"}>
              <GradingIcon />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

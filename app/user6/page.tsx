import ArrowBack from "@mui/icons-material/ArrowBack";
import Person from "@mui/icons-material/Person";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const defaultdrinks = [
  { productname: "Oreo", productprice: "₹10", url: "oreoo.png" },
  { productname: "BourBon", productprice: "₹10", url: "brb.png" },
  { productname: "Jim Jam", productprice: "₹10", url: "jim.png" },
  { productname: "Parle G", productprice: "₹10", url: "par.png" },
  { productname: "Monaco", productprice: "₹10", url: "monaco.png" },
  { productname: "Krack Jack", productprice: "₹10", url: "krack.png" },
];

export default function user6() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <button className="border-2 border-black rounded-full ml-2 mt-2 h-10 w-10 ">
          <Link href={"/user3"}>
            <ArrowBack/>
          </Link>
        </button>
        <div>
          <h1 className="text-bold text-2xl  text-center">
            Biscuits
          </h1>
        </div>
        <div>
          <button className="border-2 border-black rounded-full ml-2 mt-2 h-10 w-10 ">
            <Link href={"/profile"}>
              <Person/>
            </Link>
          </button>
        </div>
      </div>

      <div className="py-4 ">
        <h1 className="text-black text-xl">Choose your Product</h1>
        <h2 className="text-black text-xl">Available Here</h2>
      </div>
      <div className="flex grid grid-cols-2 justify-between items-center text-xl">
        {defaultdrinks.map((product) => {
          return (
            <div className="flex grid grid-cols-1 p-2" key={product.url}>
              <button>
                <Link href={"/biscuit"}>
                  <img className="flex border-2" src={product.url} />
                  <div>{product.productname}</div>
                  <div>{product.productprice}</div>
                </Link>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

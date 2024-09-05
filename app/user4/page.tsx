"use client";
import Person from "@mui/icons-material/Person";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import user7 from "../user7/page";
import Link from "next/link";
import Image from "next/image";

const defaultproduct = [
  
  { productname: "Simply Salted", productprice: "₹10 ", url: "balaji.png" },
  { productname: "Chaat Chaska", productprice: "₹10", url: "/chat.png" },
  { productname: "Masala Masti", productprice: "₹10", url: "/masala.png" },
  { productname: "Crunchex", productprice: "₹10", url: "/crunch.png" },
  { productname: "Cream & Onions", productprice: "₹10", url: "cream.png" },
  { productname: "Tomato Twist", productprice: "₹10", url: "/tomato.png" },
  { productname: "Magic Masala", productprice: "₹10", url: "/bluelay.png" },
  { productname: "Cream & Onions", productprice: "₹10", url: "/lay2.png" },
  
];

export default function user4() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center ">
        <div>
          <button className="border-2 border-black rounded-full ml-2 mt-2 h-10 w-10 ">
            <Link href={"/user3"}>
              <ArrowBackIcon />
            </Link>
          </button>
        </div>
        <div className="text-center text-2xl">
          Waffers
          {/* <p className="border-2 text-2xl w-40">waffers</p> */}
        </div>
        <div>
          <button className="border-2 border-black rounded-full  mt-2 h-10 w-10 ">
            <Link href={"/profile"}>
              <Person />
            </Link>
          </button>
        </div>
      </div>
      <div className="py-4">
        <h1 className="text-black text-xl">Choose your Product</h1>
        <h2 className="text-black text-xl">Available Here</h2>
      </div>

      <div className="flex grid grid-cols-2 justify-between items-center text-xl">
        {defaultproduct.map((product) => {
          return (
            <div className="flex grid grid-cols-1 p-2" key={product.productname}>
              <button>
                <Link href={"/user7"}>
                  <img className="flex border-2 border-slate-900 " src={product.url} />
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

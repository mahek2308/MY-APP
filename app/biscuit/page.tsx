import ArrowBack from "@mui/icons-material/ArrowBack";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Image from "next/image";
import Link from "next/link";

export default function biscuit() {
  return (
    <div className="h-screen flex justify-between items-center flex-col">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <button className="border-2 border-black rounded-full mt-2 h-10 w-10 mr-64 ">
            <Link href={"/user6"}>
              <ArrowBack/>
            </Link>
          </button>
        </div>
        <div>
          <button className="border-2 border-black rounded-full ml-5 mt-2 h-10 w-10 ">
            <Link href={"/user12"}>
              <ShoppingCart/>
            </Link>
          </button>
        </div>
      </div>

      <div className="h-screen pt-10 ">
        <div>
          <div className="border-2 grid grid-cols-2 col border-black">
            <img src="/oreoo.png"></img>
            <div className="text-left text-xl">
              {" "}
              Oreo
              <div className="text-xl"> price= ₹10</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <button className="bg-violet-700 w-full  h-20 text-white text-center ">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

import Link from "next/link";
import ArrowBack from "@mui/icons-material/ArrowBack";
export default function user11() {
  return (
  
    <div className="w-full flex justify-between flex-col p-4 h-screen ">

      <div>
      <div className=" flex justify-between items-center">
        <div className="mt-2 ml-2 border-2 rounded-lg w-10 ">
          <button>
          <Link href={"/user10"}>
          <ArrowBack/>
          </Link>
          </button>
        </div>
        </div>
      </div>
      
        
      <div className="text-2xl text-center ">Cart</div>
      <div className="h-screen pt-10 ">
      <div className="border-4  ml-2 mr-2 grid grid-cols-2 row-span-2 ">
        <img src="/thumsup.png"></img>
        <div> 
        <div className="text-xl">  Thums Up
        <div>price=$30</div>
        </div>
        </div>
      </div>
      </div>
      <div className="w-full">
        <button className="bg-violet-700 w-full h-20 text-white text-center ">
          <Link href={"/user9"}>Place Order</Link>
        </button>
      </div>
    </div>
  );
}
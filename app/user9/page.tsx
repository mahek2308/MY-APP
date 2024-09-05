import Link from "next/link";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import ArrowBack from "@mui/icons-material/ArrowBack";
export default function user9() {
  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <div className="p-4">
        <button className="border-2 mt-2 mr-80 h-10 w-10 rounded-full">
          <Link href={"/user3"}>
            <ArrowBack className="border-black border-2 rounded-full h-10 w-10" />
          </Link>
        </button>
      </div>

      <div className="text-center">
        <MobileFriendlyIcon className="size-48"></MobileFriendlyIcon>
      </div>
      <div className="text-2xl text-bold text-center ">
        Order Confirmed !<p> your order has been confirmed </p>
      </div>
      <div className="w-full ">
        <div>
          <button className="bg-purple-400   text-bold text-xl rounded ml-12 mt-14 w-80 h-12">
            <Link href={"/order"}>Go to Orders</Link>
          </button>
        </div>
        <div>
          <button className="bg-purple-700 w-full h-20 text-white text-2xl mt-2 ">
            <Link href={"/user3"}>Continue shopping</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

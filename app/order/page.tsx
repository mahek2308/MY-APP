import ArrowBack from "@mui/icons-material/ArrowBack";
import Link from "next/link";

export default function order() {
  return (
    <div>
      <div>
        <button className="border-2 border-black rounded-full ml-2 mt-2 h-10 w-10 ">
          <Link href={"/user3"}>
            <ArrowBack></ArrowBack>
          </Link>
        </button>
        <div className="text-2xl text-center text-bold"> Your Orders</div>
      </div>

      <div className="mt-5">
        <button className="w-full">
          <Link href={"/history"}>
            <div className="grid grid-rows-1 grid-flow-col gap-4 border-2 border-black ml-2 mr-2 rounded">
              <div className="text-xl text-left">
                category-Waffers
                <div>
                  order-simply salted
                  <div className="flex justify-between items-center mt-2">
                    31/07/2024 4.45PM
                    <div className="text-xl">₹10</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </button>

        <div className="grid grid-rows-1 grid-flow-col gap-4 border-2 border-black ml-2 mr-2 mt-5 rounded">
          <div className="text-xl">
            category-cold drinks
            <div>
              order-Thums Up
              <div className="flex justify-between items-center mt-2">
                31/07/2024 4.51PM
                <div className="text-xl">₹38</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

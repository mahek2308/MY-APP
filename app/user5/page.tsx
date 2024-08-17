import ArrowBack from "@mui/icons-material/ArrowBack";
import Person from "@mui/icons-material/Person";
import Link from "next/link";
import Image from "next/image";
const defaultdrinks = [
  { productname: "ThumsUp", productprice: "₹40", url: "thumsup.png" },
  { productname: "Sprite", productprice: "₹40", url: "sprite.png" },
  { productname: "Hell", productprice: "₹60", url: "hell.png" },
  { productname: "Redbull", productprice: "₹130", url: "redbull.png" },
  { productname: "CocoCola", productprice: "₹40", url: "coke.png" },
  { productname: "Monster", productprice: "₹180", url: "mon.png" },
];

export default function user5() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <button className="border-2 border-black rounded-full ml-2 mt-2 h-10 w-10 ">
          <Link href={"/user3"}>
            <ArrowBack/>
          </Link>
        </button>
        <div>
          <h1 className="text-bold text-2xl  ">Cold Drinks</h1>
        </div>
        <div>
          <button className="border-2 border-black rounded-full ml-2 mt-2 h-10 w-10 ">
            <Link href={"/profile"}>
              <Person/>
            </Link>
          </button>
        </div>
      </div>

      <div className="py-4">
        <h1 className="text-black text-xl">Choose your Product</h1>
        <h2 className="text-black text-xl">Available Here</h2>
      </div>
      <div className="flex grid grid-cols-2 justify-between items-center text-xl">
        {defaultdrinks.map((product) => {
          return (
            <button key={product.productname}>
              <Link href={"/user10"}>
                <img className="flex border-2" src={product.url} />
                <div>{product.productname}</div>
                <div>{product.productprice}</div>
              </Link>
            </button>
            
          );
        })}
      </div>
    </div>
  );
}

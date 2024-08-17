import ArrowBack from "@mui/icons-material/ArrowBack";
import Person from "@mui/icons-material/Person";
import Link from "next/link";

export default function wish(){
    return(
        <div>
           
           <div className="flex justify-between items-center p-4">
            <div>
                <button className="border-2 rounded border-black">
                    <Link href={"/user3"}>
                    <ArrowBack></ArrowBack>
                  </Link>
                </button> </div>
                <div className=" text-bold text-xl">
                    <h1>WishList</h1>
                </div>
                <div>
                    <button className="border-2 rounded border-black">
                        <Link href={"/profile"}>
                        <Person></Person>
                        </Link>
                    </button>   
                </div>

           </div>
        </div>
    );
}
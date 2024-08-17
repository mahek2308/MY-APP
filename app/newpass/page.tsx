import LockIcon from "@mui/icons-material/Lock";
import Link from "next/link";
import ArrowBack from "@mui/icons-material/ArrowBack";
export default function newpass() {
  return (
    <div className="h-screen flex justify-between items-center flex-col">
      <div>
        <button className="h-10 w-10 border-black rounded-full border-2 ml-2 mt-5 mr-80">
          <Link href={"/verify"}>
            <ArrowBack />
          </Link>
        </button>
        <div>
          <h1 className="text-2xl text-center">New Password</h1>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-4 w-full">
        <div className="border-b-2 mt-5">
          <h1 className="text-xl text-bold ">Password</h1>
          <input className=" border-black w-full mt-2 h-10" type="password" />
        </div>
        <div className="border-b-2 mt-5">
          <h1 className="text-xl text-bold "> Confirm Password</h1>
          <input className=" border-black w-full mt-2 h-10 " type="password" />
        </div>
      </div>
      <div className="w-full">
        <div className="text-xl text-center">
          Please Write Your New Password
        </div>
        <button className="w-full text-[#fff]  text-xl bg-violet-700 p-5">
          <Link href={"/profile"}>
          Re-set Password
          </Link>
        </button>
      </div>
    </div>
  );
}

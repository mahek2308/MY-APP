import ArrowBack from "@mui/icons-material/ArrowBack";
import LockIcon from "@mui/icons-material/Lock";
import Link from "next/link";
import Image from "next/image";

export default function password() {
  return (
    <div className="h-screen flex justify-between items-center flex-col">
      <div>
        <div>
          <button className="border-2 border-black h-10 w-10 ml-2 mt-5 rounded-full mr-80">
            <Link href={"/user"}>
              <ArrowBack />
            </Link>
          </button>
        </div>
        <div>
          <div className="mt-2">
            <h1 className="text-2xl text-center">Forgot Password?</h1>
          </div>
          <div className="text-center mt-5">
            <img src="/forgotpassword.svg"/>
           
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-4 mb-24">
        <div>
          <div className="text-xl text-[#8F959E] text-black">EmailAddress</div>
          <input className=" border-b-2 w-full p-4 text-2xl" type="email" />
        </div>
      </div>

      <div>
        <div className="text-center text-lg ">
          <p>
            Please Enter Your Email id to Receive a Confirmation Code to Set a
            New Password
          </p>
        </div>
        <div className="w-full">
          <button className="w-full text-[#fff] font-bold text-2xl bg-violet-700 p-5">
            <Link href={"/verify"}>Continue</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

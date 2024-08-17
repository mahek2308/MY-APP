import ArrowBack from "@mui/icons-material/ArrowBack";
import LockIcon from "@mui/icons-material/Lock";
import Link from "next/link";
import Image from "next/image";
export default function verify() {
  return (
    <div className="h-screen flex justify-between items-center flex-col">
      <div>
        <button className="h-10 w-10 border-black rounded-full border-2 ml-2 mt-5 mr-80">
          <Link href={"/password"}>
            <ArrowBack />
          </Link>
        </button>
        <div>
        <h1 className="text-2xl text-center">Verification Code</h1>
      </div>
      <div className="text-center mt-5">
            <img src="/forgotpassword.svg"/>
           
          </div>
      </div>
      
      
      <div className="p-2 flex grid grid-cols-4 w-full h-20 mb-10 gap-2 justify-between rounded-lg text-center text-black bg-slate-50 ">
        <div className="flex border-2 p-4 text-[24px] justify-center items-center">1</div>
        <div className="flex border-2 p-4 text-[24px] justify-center items-center">2</div>
        <div className="flex border-2 p-4 text-[24px] justify-center items-center">3</div>
        <div className="flex border-2 p-4 text-[24px] justify-center items-center">4</div>
      </div>
      <div className="w-full">
        <div className="text-xl text-center">00.20 resend Confirmation code</div>
        <div className="w-full" >
            <button className="text-[#fff]  w-full  text-xl bg-violet-700 p-5">
                <Link href={"/newpass"}>                Confirm Code
</Link>
            </button>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { create } from "domain";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/services/firebase";
import { getRandomValues } from "crypto";
import { error } from "console";
import { useRouter } from "next/router";
export default function user2() {
  const Register = () => {
    // const router=useRouter();
    // const {handlesubmit,Register,formState:(errors),reset}=registervalidation();
    const SignIn = async (value: any) => {
      console.log("Register value", value);
      createUserWithEmailAndPassword(auth, value.email, value.password)
        .then((response) => {
          alert("user registered");
          // reset();
          // Router.
          console.log("firebase user", response);
        })
        .catch((e) => {
          console.log("catch", e.message);
        });
    };
  };

 

  return (
    <div className="h-screen flex justify-between  flex-col place-content-start">
      <div className="">
        <button className="border-2 h-10 w-10  rounded-full ml-2 mt-2 ">
          <Link href={"/user"}>
            <ArrowBackIcon />
          </Link>
        </button>
      </div>
      <div className="bg-white text-4xl text-bold text-center mb-24">
        Sign Up
      </div>

      <div className="p-4 flex flex-col gap-4 mb-24">
        <div>
          <div className="text-xl text-[#8F959E] text-black">NAME</div>
          <input className="border-b-2 w-full p-4 text-xl" type="text" />
        </div>
       
        <div>
          <div className="text-xl text-[#8F959E] text-black">EmailAddress</div>
          <input className=" border-b-2 w-full p-4 text-2xl" type="email" />
        </div>
        <div>
          <div className="text-xl text-[#8F959E] text-black">PASSWORD</div>
          <input className="border-b-2 w-full p-4" type="password" />
        </div>
      </div>

      <div className="text-bold text-2xl w-full">
        <div className="text-center text-[#8F959E]">
          Already have an account ,Sign In
        </div>

        <button className="w-full text-[#fff] font-bold text-2xl bg-violet-700 p-5 ">
          <Link href={"/user3"}>
          Sign in
          </Link> 
          
        </button>
      </div>
    </div>
  );
}

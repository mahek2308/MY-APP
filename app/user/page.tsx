"use client";
import Link from "next/link";
import { useState } from "react";
import password from "../password/page";
import { auth } from "@/app/services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function User() {
  const defaultEmailPass = { name: "", password: "" };
  const [userEmailPass, setUserEmailPass] = useState(defaultEmailPass);

  const handleInput = (e: any) => {
    let name, value;
    name = e.target.name;
    value = e.target.value;

    setUserEmailPass({ ...userEmailPass, [name]: value });
  };

  console.log("ID : ", userEmailPass);
  const login = () => {
    signInWithEmailAndPassword(auth, userEmailPass.name, userEmailPass.password)
      .then((userCredential) => {
        console.log("Success", userCredential);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div>
      <div className="h-screen flex justify-between items-center flex-col">
        <div className="bg-white text-4xl text-bold text-center text-black mt-10">
          Welcome<br></br>
          <h1 className="bg-white text-2xl text-bold text-center mt-2">
            {" "}
            Enter your data to continue
          </h1>
        </div>

        <div className="p-4 flex flex-col gap-4">
          <div>
            <div className="text-xl text-[#8F959E] text-black">NAME</div>
            <input
              className="border-b-2 w-full p-4 text-2xl"
              type="text"
              name="name"
              value={userEmailPass.name}
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div>
            <div className="text-xl text-[#8F959E] text-black">PASSWORD</div>
            <input
              className="border-b-2 w-full p-4"
              type="password"
              name="password"
              value={userEmailPass.password}
              onChange={(s) => handleInput(s)}
            />
          </div>
          <div>
            <button className="text-xl ml-44">
              <Link href={"/password"}>
                <h1 className="text-red-500">Forgot Password?</h1>
              </Link>
            </button>
          </div>
        </div>

        <div className="text-bold text-2xl w-full">
          <div className="text-center text-[#8F959E]">
            Dont have an account?
            <button className="border-1">
              <Link href={"/user2"}>Sign Up</Link>
            </button>
          </div>
          <button
            onClick={login}
            className="w-full text-[#fff] font-bold text-2xl bg-violet-700 p-5"
          >
            <Link href={"/user3"}>Log In</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

'use client';
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from 'react';
import {redirect} from 'next/navigation';

const Home = () => {

  useEffect(() => {
    setTimeout(() => window.location.href = '/user' , 2000)
  },[])

  return (
    <div className="flex justify-center items-center h-screen bg-violet-700">
      {/* <Image src={"/logo.svg"} width={100} height={100} alt={""}/>
       */}
       <Image src={"/logo.png"} width={80} height={50} alt={""}/>
    </div> 

  );
}

export default Home;

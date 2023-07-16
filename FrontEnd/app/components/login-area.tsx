"use client";
import React from "react";
import Button from "./button";
import Link from "next/link";
const LoginArea = () => {
  return (
    <div className="w-4/5 md:w-3/5 lg:w-2/5 ">
      <div className="grid lg:grid-cols-12 h-24  lg:h-9">
        <label className="lg:col-span-5   text-xl lg:text-2xl">
          User Name
        </label>
        <input
          className="lg:col-span-7 shadow appearance-none border rounded  text-gray-700  focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
        ></input>
      </div>
      <div className="grid mt-12 lg:grid-cols-12 h-24 lg:mt-12 lg:h-9">
        <label className="lg:col-span-5   text-xl lg:text-2xl">Password</label>
        <input
          className="lg:col-span-7 shadow appearance-none border rounded  text-gray-700  focus:outline-none focus:shadow-outline"
          id="username"
          type="password"
        ></input>
      </div>

      <div className="mt-8">
        <input type="checkbox" className="cursor-point er w-5 h-5 font-bold" />
        <label className="ml-8  text-xl">Remember Password</label>
        
      </div>


      <div className="mt-30 flex justify-between">
        <Link href="#" className="mt-16 mb-1 text-lg">
          Forgot Password
        </Link>
        <Button onClick={() => {}}>Login</Button>
      </div>
    </div>
  );
};

export default LoginArea;

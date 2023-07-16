'use client';
import React from "react";
import Sidebar from "../../layouts/sidebar";
import Button from "../../components/button";

const Attendance01 = () => {
  return (
    <div className="col-span-9 py-24 px-16 w-full">
      <h2 className="w-96 text-2xl">/ Attendance </h2>
      <div className="w-full pt-12 py-32 pb-16">
        <p className="text-center text-2xl font-bold">2023-07-06 14:23:44</p>

        <div className=" flex flex-col items-center lg:flex-row lg:justify-around lg:px-52 py-4 ">
          <div className=""> 
            <Button onClick={() => {}}>Start Work</Button>
          </div>
          <div className=""> 
            <Button onClick={() => {}}>Start Work</Button>
          </div>
          
        </div>
      </div>

      <p className="text-center text-lg">
        Message: you have started work at 2023-07-06 07:59:22
      </p>
    </div>
  );
};

export default Attendance01;

import type { NextPage } from "next";
import Button from "../components/button";
import DropDownButton from "../components/dropdownBtn";
const Header: NextPage = () => {
  return (
    <header
      className="flex justify-between lg:p-4 lg:px-16  items-center bg-slate-50 "
      style={{ height: "8vh" }}
    >
      <div className="w-full flex">
        <img className=" w-32 h-12 object-cover " alt="" src="/gtn-logo.png" />
        <div className="ml-4 mt-3 hidden md:block md:text-2xl">Attendance System</div>
      </div>
      <div>
        <DropDownButton></DropDownButton>
      </div>
    </header>
  );
};

export default Header;

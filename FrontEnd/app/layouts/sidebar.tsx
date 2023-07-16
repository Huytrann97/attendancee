import type { NextPage } from "next";
import Link from "next/link";
import ListItem from "../components/list-item";
const Sidebar: NextPage = () => {
  return (
    <div className=" pt-12 col-span-3 bg-slate-100 hidden lg:block "   style={{ height: "85vh" }}>
      <div className="p-12 pb-8">
        <span className="mb-4 font-bold text-2xl">Attendance</span>
          <ul className="mt-4">
            <ListItem url="/atd01">Create</ListItem>
            <ListItem url="/atd01">History</ListItem>
            <ListItem url="/atd01">Update Approve</ListItem>
          </ul>
      </div>

      <div className="p-12 pt-0">
        <span className="mb-4 font-bold text-2xl">Leave request</span>
          <ul className="mt-4">
            <ListItem url="/atd01">Create</ListItem>
            <ListItem url="/atd01">History</ListItem>
          </ul>
      </div>
    </div>
  );
};

export default Sidebar;

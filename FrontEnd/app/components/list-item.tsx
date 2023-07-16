import React from "react";
import Link from "next/link";

interface ListItemProps {
  url: string;
  children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ url, children }) => {
  return (
    <li className="my-2">
        <Link href={url}>
      <button
        className="text-xl hover:underline hover:italic hover:text-black 
                    focus:underline focus:italic focus:font-bold focus:text-black
                    cursor-pointer "
      >
        {children}
      </button>
    </Link>
    </li>
  );
};

export default ListItem;

import type { NextPage } from "next";

interface Props {
  label: string;
  onClick: () => void;
}

const Button: NextPage<Props> = ({ label, onClick }) => {
  return (
    <button
      className="bg-blue-100 hover:bg-blue-700 text-black py-2 px-4 rounded"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;

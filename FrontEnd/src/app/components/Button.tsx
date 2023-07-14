import type { NextPage } from "next";

interface Props {
  label: string;
}
const Button: NextPage<Props> = (props) => {
  const { label } = props;

  return (
    <button className="bg-blue-100 hover:bg-blue-700 text-black py-2 px-4 rounded">
      {label}
    </button>
  );
};

export default Button;

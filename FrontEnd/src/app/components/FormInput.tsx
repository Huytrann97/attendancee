import React from "react";
import { NextPage } from "next";

interface Props {
  label: string;
}

const FormInput: NextPage<Props> = (props) => {
  const { label } = props;

  return (
    <div className="flex items-center py-auto gap-26 pt-4">
      <label htmlFor="input" className="w-32">
        {label}
      </label>
      <input
        id="input"
        type="text"
        className="w-232 h-35 border border-black"
      />
    </div>
  );
};

export default FormInput;

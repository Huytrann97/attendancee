import React, { ChangeEvent } from "react";
import { NextPage } from "next";

interface Props {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: NextPage<Props> = ({ label, value, onChange }) => {

  return (
    <div className="flex items-center py-auto gap-26 pt-4">
      <label htmlFor="input" className="w-32">
        {label}
      </label>
      <input
        id="input"
        type="text"
        className="w-232 h-35 border border-black"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;

import React from "react";
import FormInput from "./FormInput";
import Button from "./Button";

const FormLogin = () => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <FormInput label="Username" />
        <FormInput label="Password" />
        <div className="flex items-center pt-6">
          <input
            type="checkbox"
            className="w-4 h-4 border border-black"
            id="checkbox"
          />
          <label htmlFor="checkbox" className="pl-4">
            Remember password
          </label>
        </div>
        <div className="flex items-center pt-6">
          <label htmlFor="forgot-password" className="">
            Forgot password
          </label>
          <div className="pl-28">
            <Button label="Login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;

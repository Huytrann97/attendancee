"use client";

import FormInput from "./FormInput";
import Button from "./Button";
import { ChangeEvent, useState } from "react";

const FormLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleButtonClick = () => {
    console.log("Username:", username);
    console.log("Password:", password);
  };

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  
  return (
    <div className="flex items-center justify-center">
      <div>
        <FormInput label="Username" value={username} onChange={handleUsernameChange}/>
        <FormInput label="Password" value={password} onChange={handlePasswordChange} />
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
            <Button label="Login" onClick={handleButtonClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;

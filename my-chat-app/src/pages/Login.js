import React, { useState, useContext } from "react";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { LoginContext } from "../context/LoginContext";

export default function Login() {
  const { login } = useContext(LoginContext);
  const [username, setUsername] = useState("");
  return (
    <div className="loginContainer">
      <form>
        <div className="loginHeader">
          <h4>Log in to your account</h4>
        </div>
        <div>
          <CustomInput
            placeholder="User Name"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <CustomInput
            placeholder="First Name"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <CustomInput
            placeholder="Last Name"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <CustomButton
            value="LOGIN"
            onClick={() => {
              login(username);
            }}
          />
        </div>
      </form>
    </div>
  );
}

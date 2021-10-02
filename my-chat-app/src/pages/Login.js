import React, { useState, useContext } from "react";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { LoginContext } from "../context/LoginContext";

export default function Login() {
  const { login } = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <div className="loginContainer">
      <form>
        <div className="loginHeader">
          <h4>Log in to your account</h4>
        </div>
        <div>
          <CustomInput
            className="loginRows CustomInput"
            placeholder="User Name"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <CustomInput
            className="loginRows CustomInput"
            placeholder="First Name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div>
          <CustomInput
            className="loginRows CustomInput"
            placeholder="Last Name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div>
          <CustomButton
            text="LOGIN"
            onClick={() => {
              login(username, firstName, lastName);
            }}
          />
        </div>
      </form>
    </div>
  );
}

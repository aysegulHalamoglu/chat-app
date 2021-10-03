import React, { useState, useContext } from "react";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { LoginContext } from "../context/LoginContext";
import { ThemeContext } from "../context/ThemeContext";

export default function Login() {
  const { login } = useContext(LoginContext);
  const { theming } = useContext(ThemeContext);
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <div
      className="loginContainer"
      style={{
        background: theming === "light" ? "#f2f2f2" : "#6A6A6A",
        color: theming === "light" ? "#000000" : "#FFFFFF",
      }}
    >
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
            className="loginRows CustomButton"
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

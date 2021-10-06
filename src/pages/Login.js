import React, { useState, useContext } from "react";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { LoginContext } from "../context/LoginContext";
import { ThemeContext } from "../context/ThemeContext";

export default function Login() {
  // context
  const { login } = useContext(LoginContext);
  const { theming } = useContext(ThemeContext);
  // state
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // route

  // submit login
  const handleSubmitLogin = () => {
    login({
      id: Math.random(),
      username,
      firstName,
      lastName,
    });
  };

  return (
    <div
      className={
        theming === "light"
          ? "loginContainer bgGray2 cGray4 "
          : "loginContainer bgGray4 cWhite "
      }
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
            type="submit"
            className="loginRows CustomButton"
            text="LOGIN"
            onClick={handleSubmitLogin}
          />
        </div>
      </form>
    </div>
  );
}

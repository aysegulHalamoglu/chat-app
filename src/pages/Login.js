import React, { useState, useContext } from "react";
import { Redirect, useLocation, useHistory } from "react-router";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { LoginContext } from "../context/LoginContext";
import { ThemeContext } from "../context/ThemeContext";

export default function Login() {
  const { login, user } = useContext(LoginContext);
  const { theming } = useContext(ThemeContext);
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { pathname } = useLocation();
  const history = useHistory("");
  if (user && pathname === "/login") return <Redirect to="/chat" />;
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
            onClick={() => {
              login(username, firstName, lastName);
            }}
          />
        </div>
      </form>
    </div>
  );
}

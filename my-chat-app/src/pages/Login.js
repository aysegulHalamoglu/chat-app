import React from "react";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

export default function Login() {
  return (
    <div className="loginContainer">
      <form>
        <div className="loginHeader">
          <h4>Log in to your account</h4>
        </div>
        <div>
          <CustomInput placeholder="User Name" />
        </div>
        <div>
          <CustomInput placeholder="First Name" />
        </div>
        <div>
          <CustomInput placeholder="Last Name" />
        </div>
        <div>
          <CustomButton value="LOGIN" />
        </div>
      </form>
    </div>
  );
}

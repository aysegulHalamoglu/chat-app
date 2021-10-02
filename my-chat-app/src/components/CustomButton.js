import React from "react";

const CustomButton = ({ text, onClick }) => {
  return (
    <button className="loginRows CustomButton" onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;

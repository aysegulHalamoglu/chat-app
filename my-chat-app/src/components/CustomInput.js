import React from "react";

const CustomInput = (props) => {
  const { placeholder } = props;
  return (
    <input
      type="text"
      className="loginRows CustomInput"
      placeholder={placeholder}
    />
  );
};

export default CustomInput;

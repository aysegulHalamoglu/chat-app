import React from "react";

const CustomInput = (props) => {
  const { placeholder, onChange } = props;
  return (
    <input
      type="text"
      className="loginRows CustomInput"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default CustomInput;

import React from "react";

const CustomInput = (props) => {
  const { placeholder, onChange, className, value } = props;
  return (
    <input
      className={className}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default CustomInput;

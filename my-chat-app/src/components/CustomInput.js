import React from "react";

const CustomInput = (props) => {
  const { placeholder, onChange, className } = props;
  return (
    <input
      className={className}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default CustomInput;

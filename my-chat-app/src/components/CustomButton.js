import React from "react";

const CustomButton = (props) => {
  const { value, onClick } = props;
  return (
    <button className="loginRows CustomButton" value={value} onClick={onClick}>
      {props.value}
    </button>
  );
};

export default CustomButton;

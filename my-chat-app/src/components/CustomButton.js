import React from "react";

const CustomButton = (props) => {
  const { value } = props;
  return (
    <button className="loginRows CustomButton" value={value}>
      {props.value}
    </button>
  );
};

export default CustomButton;

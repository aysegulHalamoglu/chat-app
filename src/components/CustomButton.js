import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
const CustomButton = (props) => {
  const { theming } = useContext(ThemeContext);
  const { text, onClick, className, style } = props;
  return (
    <button style={style} className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;

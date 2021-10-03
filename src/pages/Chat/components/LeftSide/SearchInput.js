import React, { useContext } from "react";
import CustomInput from "../../../../components/CustomInput";
import { ThemeContext } from "../../../../context/ThemeContext";

export default function SearchInput({ handleOnChange }) {
  const { theming } = useContext(ThemeContext);
  return (
    <div
      style={{
        background: theming === "light" ? "#f2f2f2" : "#6A6A6A",
        color: theming === "light" ? "#000000" : "#FFFFFF",
      }}
      className="searchbarContainer"
    >
      <CustomInput
        className="searchbar"
        placeholder="Search..."
        onChange={(e) => {
          handleOnChange(e.target.value);
        }}
      />
    </div>
  );
}

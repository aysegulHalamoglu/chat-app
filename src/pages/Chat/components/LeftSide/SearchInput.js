import React, { useContext } from "react";
import CustomInput from "../../../../components/CustomInput";
import { ThemeContext } from "../../../../context/ThemeContext";

export default function SearchInput({ handleOnChange }) {
  const { theming } = useContext(ThemeContext);
  return (
    <div
      className={
        theming === "light" ? "searchbarContainer" : "searchbarContainerDark"
      }
    >
      <CustomInput
        className={theming === "light" ? "searchbar" : "searchbarDark"}
        placeholder="Search..."
        onChange={(e) => {
          handleOnChange(e.target.value);
        }}
      />
    </div>
  );
}

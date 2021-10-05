import React, { useContext } from "react";
import CustomInput from "../../../../components/CustomInput";
import { ThemeContext } from "../../../../context/ThemeContext";

export default function SearchInput({ handleOnChange }) {
  const { theming } = useContext(ThemeContext);
  return (
    <div
      className={
        theming === "light"
          ? "searchbarContainer bgGray2"
          : "searchbarContainer bgGray5"
      }
    >
      <CustomInput
        className={
          theming === "light"
            ? "searchbar  bgGray1 bL"
            : "searchbar  bgGray3 bD cWhite"
        }
        placeholder="Search..."
        onChange={(e) => {
          handleOnChange(e.target.value);
        }}
      />
    </div>
  );
}

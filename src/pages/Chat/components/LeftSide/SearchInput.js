import React from "react";
import CustomInput from "../../../../components/CustomInput";

export default function SearchInput({ handleOnChange }) {
  return (
    <div className="searchbarContainer">
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

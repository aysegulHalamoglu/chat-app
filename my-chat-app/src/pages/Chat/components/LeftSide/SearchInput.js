import React, { useEffect } from "react";
import CustomInput from "../../../../components/CustomInput";

export default function SearchInput({ handleOnChange, searchText }) {
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(searchText);
      handleOnChange(searchText);
    }, 5000);

    return () => clearTimeout(delayDebounceFn);
  }, [handleOnChange]);
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

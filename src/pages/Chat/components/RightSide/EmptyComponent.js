import React, { useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";

export default function EmptyComponent() {
  const { theming } = useContext(ThemeContext);
  return (
    <div
      style={{
        background: theming === "light" ? "#f2f2f2" : "#6A6A6A",
      }}
      className="empty"
    ></div>
  );
}

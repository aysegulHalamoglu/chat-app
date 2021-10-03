import React from "react";

export const ThemeContext = React.createContext({
  theming: "light",
  toggleTheme: () => {},
});

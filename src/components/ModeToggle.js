import React, { useState } from "react"

const ModeToggle = () => {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  };

  return (
    <button class="primary" onClick={toggleTheme}>Current Theme: {theme === "light" ? "Light" : "Dark"}</button>
  );
};

export default ModeToggle
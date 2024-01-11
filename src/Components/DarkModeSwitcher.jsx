import React from "react";

const DarkModeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <li>
      <label
        className={`relative m-0 block h-7.5 w-14 rounded-full ${
          colorMode === "dark" ? "bg-primary" : "bg-stroke"
        }`}
      >
        dm
      </label>
    </li>
  );
};

export default DarkModeSwitcher;

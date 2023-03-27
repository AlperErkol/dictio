import { FiSun, FiMoon, FiCpu } from "react-icons/fi";
import React, { useState } from "react";
import ThemeSelector from "./ThemeSelector";

const ThemeWrapper = () => {
  const [theme, setTheme] = useState("dark");
  const [showDropdown, setShowDropdown] = useState(false);

  const getIconInfo = () => {
    if (theme === "dark") return <FiMoon size={20} />;
    else if (theme === "light") return <FiSun size={20} />;
    else return <FiCpu size={20} />;
  };

  const changeTheme = (theme: string) => {
    setTheme(theme);
    setShowDropdown(false);
  };

  return (
    <div className="relative w-24">
      <button
        onClick={() => setShowDropdown(true)}
        className="w-full h-12 border-2 flex items-center justify-center border-transparent rounded-md transition-all hover:border-tertiary-color hover:text-tertiary-color"
        aria-label="Customise options"
      >
        <div className="flex items-center">
          {getIconInfo()}
          <p className="text-base ml-2">{theme}</p>
        </div>
      </button>
      {showDropdown && (
        <div>
          <div
            className="dropdown-overlay"
            onClick={() => setShowDropdown(false)}
          ></div>
          <div className="dropdown-menu">
            <div>
              <ThemeSelector
                text="Light"
                icon={<FiSun size={20} />}
                onClick={() => changeTheme("light")}
              />
              <ThemeSelector
                text="Dark"
                icon={<FiMoon size={20} />}
                onClick={() => changeTheme("dark")}
              />
              <ThemeSelector
                text="System"
                icon={<FiCpu size={20} />}
                onClick={() => changeTheme("system")}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { ThemeWrapper };

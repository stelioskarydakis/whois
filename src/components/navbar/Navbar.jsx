import { useEffect, useState } from "react";
import "./navbar.css";
import { BsFillSunFill, BsRainbow } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const [theme, setTheme] = useState("light-theme");
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const changeThemeLight = () => {
    setTheme("light-theme");
  };
  const changeThemeDark = () => {
    setTheme("dark-theme");
  };
  const changeThemeRain = () => {
    setTheme("rain-theme");
  };
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="logo">
          WhoIs<span>Stylianos</span>
        </div>
        <div className="switcher">
          <BsFillSunFill
            onClick={changeThemeLight}
            className={theme === "light-theme" && "active-icon"}
          />
          <MdDarkMode
            onClick={changeThemeDark}
            className={theme === "dark-theme" && "active-icon"}
          />
          <BsRainbow
            onClick={changeThemeRain}
            className={theme === "rain-theme" && "active-icon"}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

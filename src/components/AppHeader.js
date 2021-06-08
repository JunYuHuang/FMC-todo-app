import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTheme, toggleTheme } from "../redux/themeSlice";

export default function AppHeader() {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="flex flex-row justify-between h-mobileLogoHeight mobilePlus:h-auto">
      <h1 className="text-white text-logoMobile font-bold tracking-mobileLogo leading-tight mobilePlus:text-4xl mobilePlus:leading-none mobilePlus:tracking-desktopLogo">
        TODO
      </h1>
      <button
        aria-label="Toggle theme"
        className=""
        onClick={handleToggleTheme}
      >
        <img
          alt={`A ${
            theme === "light" ? "moon" : "sun"
          } icon representing the theme toggler button.`}
          src={
            theme === "light"
              ? "./images/icon-moon.svg"
              : "./images/icon-sun.svg"
          }
          className="h-5 w-5 mobilePlus:h-26px mobilePlus:w-26px"
        />
      </button>
    </div>
  );
}

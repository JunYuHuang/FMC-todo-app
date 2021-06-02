import React from "react";

const AppHeader = ({ isLightTheme, setIsLightTheme }) => {
  return (
    <div className="flex flex-row justify-between h-mobileLogoHeight mobilePlus:h-auto">
      <h1 className="text-white text-logoMobile font-bold tracking-mobileLogo leading-tight mobilePlus:text-4xl mobilePlus:leading-none mobilePlus:tracking-desktopLogo">
        TODO
      </h1>
      <button
        className=""
        onClick={() =>
          setIsLightTheme((prevState) => {
            return !prevState;
          })
        }
      >
        <img
          alt={`A ${
            isLightTheme ? "moon" : "sun"
          } icon representing the theme toggler button.`}
          src={
            isLightTheme ? "./images/icon-moon.svg" : "./images/icon-sun.svg"
          }
          className="h-5 w-5 mobilePlus:h-26px mobilePlus:w-26px"
        />
      </button>
    </div>
  );
};

export default AppHeader;

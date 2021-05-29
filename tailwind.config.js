module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brightBlue: "hsl(220, 98%, 61%)",
        checkBG:
          "linear-gradient(45deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
        light: {
          DEFAULT: "hsl(220, 98%, 61%)",
          veryLightGray: "hsl(0, 0%, 98%)",
          veryLightGrayishBlue: "hsl(236, 33%, 92%)",
          lightGrayishBlue: "hsl(233, 11%, 84%)",
          darkGrayishBlue: "hsl(236, 9%, 61%)",
          veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
        },
        dark: {
          DEFAULT: "hsl(220, 98%, 61%)",
          veryDarkBlue: "hsl(235, 21%, 11%)",
          veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
          lightGrayishBlue: "hsl(234, 39%, 85%)",
          lightGrayishBlueHover: "hsl(236, 33%, 92%)",
          darkGrayishBlue: "hsl(234, 11%, 52%)",
          veryDarkGrayishBlue1: "hsl(233, 14%, 35%)",
          veryDarkGrayishBlue2: "hsl(237, 14%, 26%)",
        },
        white: {
          DEFAULT: "#ffffff",
        },
      },
      fontFamily: {
        sans: ["Josefin Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        body: "18px",
        logoMobile: "26px",
        normal: "14px",
      },
      backgroundImage: (theme) => ({
        "bg-desktop-dark": "url('/public/images/bg-desktop-dark.jpg')",
        "bg-desktop-light": "url('/public/images/bg-desktop-light.jpg')",
        "bg-mobile-dark": "url('/public/images/bg-mobile-dark.jpg')",
        "bg-mobile-light": "url('/public/images/bg-mobile-light.jpg')",
        "icon-check": "url('/public/images/icon-check.svg')",
        "icon-cross": "url('/public/images/icon-cross.svg')",
        "icon-moon": "url('/public/images/icon-moon.svg')",
        "icon-sun": "url('/public/images/icon-sun.svg')",
      }),
      maxWidth: {
        desktop: "1440px",
      },
    },
  },
  variants: {
    extend: {
      margin: ["first"],
    },
  },
  plugins: [],
};

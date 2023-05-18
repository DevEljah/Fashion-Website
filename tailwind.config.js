/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: {
          "100": "#fefefe",
          "200": "#8e8e8e",
          "300": "#7f7f7f",
          "400": "#7c7c7c",
          "500": "#7a7a7a",
          "600": "#787878",
          "700": "#767676",
          "800": "#242323",
          "900": "#191919",
          "1000": "#191818",
        },
        whitesmoke: {
          "100": "#f4f6f5",
          "200": "#eaeaea",
        },
        gainsboro: "#d9d9d9",
        khaki: "#ebd96b",
        goldenrod: "#e5c643",
        snow: "#fffcf8",
        darkslategray: "#3e3a3a",
      },
      fontFamily: {
        roboto: "Roboto",
        poppins: "Poppins",
      },
      borderRadius: {
        "xs-3": "11.3px",
        "5xs-5": "7.5px",
        mini: "15px",
        "25xl-3": "44.3px",
        "7xs-3": "5.3px",
        "sm-3": "13.3px",
        "mid-7": "17.7px",
        "7xs-8": "5.8px",
      },
    },
    fontSize: {
      lg: "18px",
      "11xl": "30px",
      "5xl-8": "24.8px",
      xl: "20px",
      mini: "15px",
      "5xl": "24px",
      smi: "13px",
      "22xl-3": "41.3px",
      "16xl": "35px",
      sm: "14px",
      xs: "12px",
      "17xl": "36px",
      "6xl": "25px",
      "3xl-5": "22.5px",
      mid: "17px",
      "53xl": "72px",
      "31xl": "50px",
      "21xl": "40px",
      base: "16px",
      "base-5": "16.5px",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "768px",
      },
      sm: {
        max: "428px",
      },
      big: {
        raw: "screen and (min-width: 1440px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

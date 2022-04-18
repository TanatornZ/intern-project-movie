  module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          nunito: ["Nunito", "sans-serif"],
        },
        screens: {
          desktop: "1440px",
        },
        spacing: {
          "8xl": "90px",
          "9xl": "148px",
          "10xl": "280px",
          "11xl": "380px",
          "12xl": "480px",
          modal: "600px",
        },
        colors: {
          "dark-opacity": "rgba(20,20,20,0.5)",
        },
      },
    },
    plugins: [],
  };

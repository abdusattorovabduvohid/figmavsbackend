/ @type {import('tailwindcss').Config} */;
export default {
  content: ["./index.html", "./src//*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "390px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "dark-bg": "#210A01",
        "gradient-start": "#FF6432",
        "gradient-end": "#FFA228",
      },
      backgroundImage: {
        "gradient-orange":
          "linear-gradient(261.69deg, #FF6432 12.12%, #FFA228 86.72%)",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        primary: "0px 0px 23px 0px #9494942B",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter"],
      millik: ["Millik Regular"],
      euclid: ["Euclid Circular"],
      commons: ["Commons Medium"],
    },
    screens: {
      xs: "600px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      boxShadow: {
        "4xl":
          "0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12);",
      },
      colors: {
        "id-green-1": "#002829",
        "id-green-2": "#0F595C",
        "id-yellow": "#F28532",
        "id-dark-1": "#101828",
        "id-dark-2": "#333333",
        "id-gray-3": "#D2E0E0",
        "id-gray-4": "#F7F8F9",
        "id-gray-5": "#EFF1F7",
      },
      flex: {
        "25%": "0 0 25%",
        "75%": "0 0 75%",
        "50%": "0 0 50%",
        "66.66%": "0 0 66.6666%",
        "33.33%": "0 0 33.3333%",
        full: "0 0 100%",
        "475px": "0 0 475px",
      },
    },
  },
  plugins: [],
};

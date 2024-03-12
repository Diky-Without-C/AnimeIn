/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "3/20": "calc(100%/20*3)",
        "17/20": "calc(100%/20*17)",
        "19/20": "calc(100%/20*19)",
      },
      height: {
        76: "19rem",
        88: "22rem",
        112: "28rem",
        "3/20": "calc(100%/20*3)",
        "17/20": "calc(100%/20*17)",
        "19/20": "calc(100%/20*19)",
      },
      colors: {
        star: "#facc15",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};

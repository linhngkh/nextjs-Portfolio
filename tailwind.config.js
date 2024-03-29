/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "hsl(262 80% 50%)",
        gray: "hsl(220 13% 69%)",
        green: "hsl(220 17% 17% / 0.9)",
      },
    },

    screens: {
      sm: { min: "576px", max: "767px" },
      md: { min: "768px", max: "991px" },
    },

    fontFamily: {
      kaushan: ["Kaushan Script", "cursive"],
    },
  },
  // add daisyUI plugin
  plugins: [require("daisyui")],
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "",
  },
};

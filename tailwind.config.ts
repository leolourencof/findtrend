import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["Caveat", "cursive"],
        "clash-display": ["Clash Display", "sans-serif"],
      },
      colors: {
        "dark-gray": "#181818",
        "opacity-gray": "#181818CC",
        "light-gray": "#19191966",
      },
    },
  },
  plugins: [],
};
export default config;

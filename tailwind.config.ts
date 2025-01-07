import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["var(--font-cinzel)"],
      },
      colors: {
        main: "rgb(245, 245, 220)",
        accent: "#60FF42",
      },
      boxShadow: {
        xl4: "5px 5px 5px 0px black",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      screens: {
        med: "900px",
      },
    },
  },
  plugins: [],
};
export default config;

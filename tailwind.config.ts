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
        audio: ["var(--font-audio)"],
      },
      colors: {
        main: "rgb(245, 245, 220)",
      },
      boxShadow: {
        xl4: "5px 5px 5px 0px rgba(0, 0, 0, 1)",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;

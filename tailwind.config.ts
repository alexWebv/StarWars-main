import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "grapth-black": "#3a3a3a",
      black: "#2B2B28",
      white: "#EAEAEA",
      "black-purple": "#412566",
      "black-red": "#662725",
    },
    extend: {
      backgroundImage: {
        "purple-grad": "linear-gradient(90deg, rgba(15,153,233,1) 0%, rgba(160,0,255,1) 100%);",
      },
    },
  },
  plugins: [],
};
export default config;

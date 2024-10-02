import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "home-background": "url('/assets/background/Home-background.webp')",
      },
      fontFamily: {
        vietnam: ["Be Vietnam Pro", "sans-serif"],
      },
      fontSize: {
        h1: "48px",
        h2: "38px",
        h3: "24px",
        h4: "20px",
        paragraph: "16px",
      },
      colors: {
        bg: "#ffffff",
        textColor: "#000000",
        softBg: "#f0f0f0",
        softTextColor: "#626262",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),

  ],
};
export default config;

import type { Config } from "tailwindcss"
// Color theme: https://www.color-hex.com/
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
    "./module/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        "persian-indigo": "#3D2177",
        tekhelet: "#512683",
        "mardi-gras": "#910785",
        persimmon: "#EA5A00",
        "celestial-blue": "#34A0DB",  
        primary: {
          50: "#b896be",
          100: "#a980b0",
          200: "#9b6ba3",
          300: "#8d5696",
          400: "#7e4189",
          500: "#702C7C",
          600: "#652870",
          700: "#5a2363",
          800: "#4e1f57",
          900: "#431a4a",
          950: "#38163e",
        },
        secondary: {
          50: "#a6c1dc",
          100: "#94b5d4",
          200: "#82a8cd",
          300: "#719cc6",
          400: "#5f8fbf",
          500: "#4D83B8",
          600: "#4576a6",
          700: "#3e6993",
          800: "#365c81",
          900: "#2e4f6e",
          950: "#27425c",
        },
        accent: {
          50: "#f5ad80",
          100: "#f29c66",
          200: "#f08c4d",
          300: "#ee7b33",
          400: "#ec6b1a",
          500: "#ea5a00",
          600: "#d35100",
          700: "#bb4800",
          800: "#a43f00",
          900: "#8c3600",
          950: "#752d00",
        },
        dark: {
          50: "#eaeaea",
          100: "#d5d5d5",
          200: "#acacac",
          300: "#828282",
          400: "#595959",
          500: "#303030",
          600: "#2b2b2b",
          700: "#212121",
          800: "#181818",
          900: "#0e0e0e",
          950: "#090909",
        },
        error: {
          50: "#fdecec",
          100: "#fbdada",
          200: "#f7b5b6",
          300: "#f49091",
          400: "#f06b6d",
          500: "#ED4749",
          600: "#d53f41",
          700: "#a53133",
          800: "#762324",
          900: "#471515",
          950: "#2f0e0e",
        },
        success: {
          50: "#f1fdf6",
          100: "#e4fced",
          200: "#caf9db",
          300: "#aff6ca",
          400: "#95f3b8",
          500: "#7bf1a7",
          600: "#6ed896",
          700: "#56a874",
          800: "#3d7853",
          900: "#244832",
          950: "#183021",
        },
        warning: {
          50: "#fdf9f0",
          100: "#fcf4e1",
          200: "#fae9c3",
          300: "#f7dea5",
          400: "#f5d387",
          500: "#F3C969",
          600: "#dab45e",
          700: "#aa8c49",
          800: "#796434",
          900: "#483c1f",
          950: "#302815",
        },
        info: {
          50: "#e6f0f6",
          100: "#cee1ed",
          200: "#9ec3dc",
          300: "#6ea6ca",
          400: "#3e88b9",
          500: "#0E6BA8",
          600: "#0c6097",
          700: "#094a75",
          800: "#073554",
          900: "#042032",
          950: "#021521",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
}
export default config

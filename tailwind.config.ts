import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // from https://github.com/RenoirTan/liver/blob/main/palettes/dark.json
    colors: {
      "yellow": "#e4de41",
      "beige": "#ffb370",
      "orange": "#ff7f00",
      "vermillion": "#ff6448",
      "red": "#ff1a1a",
      "french-fuchsia": "#fd3f92",
      "orchid": "#f47bf0",
      "lilac": "#eba2e8",
      "violet": "#c390e8",
      "blue-violet": "#9554e8",
      "cyan": "#53e2ed",
      "mint-green": "#4fe399",
      "white": "#e3e3e3",
      "silver": "#d7d7d7",
      "dark-silver": "#9f9f9f",
      "light-gray": "#5f5f5f",
      "gray": "#4e4e4e",
      "dark-gray": "#282428",
      "black": "#1a1a1a",
      "calm-black": "#180f18",
      "calm-gray": "#24242e",
      "centrist": "#7f7f7f"
    }
  },
  plugins: [],
};
export default config;

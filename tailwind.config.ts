import { type Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "pt-sans": ['"Product Sans"', "sans-serif"],
      },
      colors: {
        darkpacha: "#0C2011",
      },
      backgroundImage: {
                "custom-gradient": "linear-gradient(78deg, #52FF80 17.86%, #D2FFDE 48.6%, #52FF80 106.41%)",
      },
    },
  },
} satisfies Config;

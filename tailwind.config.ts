import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "slidein-300": "slidein 1s ease 300ms forwards",
        "slidein-500": "slidein 1s ease 500ms forwards",
        "slidein-700": "slidein 1s ease 700ms forwards",
        "slidein-900": "slidein 1s ease 900ms forwards",
        "slidein-1000": "slidein 1s ease 1000ms forwards",
      },
    },
  },
  plugins: [],
};
export default config;

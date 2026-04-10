import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{ts,tsx}",
    "./node_modules/@shadcn/ui/dist/**/*.js",
  ],
  theme: {
	container: {
      center: true,
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        white: "#F1F5F9",
        dourado: {
          100: "#D4AF37",
        },
        cinza: {
          100: "#161616",
        },
        preto: {
          100: "#0A0A0A",
        },
        gray: {
          100: "#64748B",
        },
      },
      fontFamily: {
        sans: ["sans-serif"],
      }
    },
  },
} satisfies Config;

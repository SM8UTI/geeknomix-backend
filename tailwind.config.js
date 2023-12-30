/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        primary: `'Inter', sans-serif`,
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        black: "#272727",
        "MainBlue-50": "#f1f0fe",
        "MainBlue-100": "#d4d0fa",
        "MainBlue-200": "#bfb9f8",
        "MainBlue-300": "#a199f5",
        "MainBlue-400": "#8f85f3",
        "MainBlue-500": "#7367f0",
        "MainBlue-600": "#695eda",
        "MainBlue-700": "#5249aa",
        "MainBlue-800": "#3f3984",
        "MainBlue-900": "#302b65",
        "MainOrange-50": "#fff7ef",
        "MainOrange-100": "#ffe6cd",
        "MainOrange-200": "#ffd9b5",
        "MainOrange-300": "#ffc894",
        "MainOrange-400": "#ffbd7f",
        "MainOrange-500": "#ffad5f",
        "MainOrange-600": "#e89d56",
        "MainOrange-700": "#b57b43",
        "MainOrange-800": "#8c5f34",
        "MainOrange-900": "#6b4928",
        "MainGrey-50": "#e9e9e9",
        "MainGrey-100": "#bcbcbc",
        "MainGrey-200": "#9c9c9c",
        "MainGrey-300": "#6e6e6e",
        "MainGrey-400": "#525252",
        "MainGrey-500": "#272727",
        "MainGrey-600": "#232323",
        "MainGrey-700": "#1c1c1c",
        "MainGrey-800": "#151515",
        "MainGrey-900": "#101010",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

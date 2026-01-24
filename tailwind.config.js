/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: ({ opacityValue }) =>
          opacityValue !== undefined
            ? `rgb(var(--primary) / ${opacityValue})`
            : `rgb(var(--primary))`,
        secondary: ({ opacityValue }) =>
          opacityValue !== undefined
            ? `rgb(var(--secondary) / ${opacityValue})`
            : `rgb(var(--secondary))`,
        accent: ({ opacityValue }) =>
          opacityValue !== undefined
            ? `rgb(var(--accent) / ${opacityValue})`
            : `rgb(var(--accent))`,
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};

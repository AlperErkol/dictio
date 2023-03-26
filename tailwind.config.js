/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "tertiary-color": "var(--tertiary-color)",
        "text-color": "var(--text-color)",
        "text-muted-color": "var(--text-muted-color)",
        "border-color": "var(--border-color)",
      },
    },
  },
  plugins: [],
};

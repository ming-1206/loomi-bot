/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App router
    "./pages/**/*.{js,ts,jsx,tsx}", // Pages router (if you have it)
    "./components/**/*.{js,ts,jsx,tsx}", // Components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

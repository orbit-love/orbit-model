module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 4s linear infinite'
      }
    },
    // Note: screen sizes ('sm', 'md', etc) need to be wrapped
    // in quotes. So if auto-format saves without quotes, please
    // save this file without auto-formatting.
    screens: {
      'xs': "390px",
      'sm': "640px",
      'md': "905px",
      'lg': "1024px"
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

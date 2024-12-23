/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./app/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        specemono: ['SpaceMono-Regular', 'sans-serif'],
        "spacemono-bold":["SpaceMono-Bold", "sans-serif"],
        my: ['ChEuropeExt', 'sans-serif'],
        "mybold":["ChEuropeExtBold", "sans-serif"],
        "primary":["AGOptimaMon", "sans-serif"],
        "hairmon": ["HairMon", "sans-serif"]
      },
    },
  },
  plugins: [],
}
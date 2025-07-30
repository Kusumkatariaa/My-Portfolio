// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-from': '#7CC0C4',
        'custom-via': '#548FBA',
        'custom-to': '#3C84C7',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: "639px" }, // applies below 640px
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        custom: "600px", // your custom breakpoint
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backdropBlur: {
        sm: '4px',
      },
    },
  },
  plugins: [],
}

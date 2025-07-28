// tailwind.config.js

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'text-white', 'bg-black', 'flex', 'justify-center', 'items-center',
    'text-3xl', 'sm:text-5xl', 'xl:text-7xl', 'font-bold'
  ],


  theme: {
    extend: {
      screens: {
        xs: { max: "639px" },
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        custom: "600px",
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

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#F9DBBA',
        seconady:'#5B99C2',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'font': ['Righteous', 'sans-serif',],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '50px',
        sm: '20px',
        lg: '30px',
        xl: '30px',
        '2xl': '40px',
      },
    },
    extend: {
      colors: {
        jigar: '#14110E',
        odam: "#C99E71",
        gray: "#FFFFFFCC",
        oq: "#FFFFFF",
        ochJ: "#1C1814",
        och: "#C99E71",
        blue: "#121315"
      },
    },
  },
  plugins: [],
}


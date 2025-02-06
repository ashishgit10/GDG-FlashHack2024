/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Doto: ["Doto", "sans-serif"],
        Smooch: ["Smooch Sans"],
        Chivo: ["Chivo"],
      },
      backgroundPosition: {
        initial: 'initial',
      },

    },
  },
  plugins: [],
};

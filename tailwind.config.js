/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        accent: '#ff6841',
        primary: '#304450',
        secondary: '#f5f5f5',
      },
    },
  },
  plugins: [],
};

 /** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',  
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), // Better form styling
    require('@tailwindcss/typography'), // Improved typography
    require('@tailwindcss/aspect-ratio'), // Consistent aspect ratios
  ],
};
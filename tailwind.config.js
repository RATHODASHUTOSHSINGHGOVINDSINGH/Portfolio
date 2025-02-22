 /** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // or 'media' or false
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}', // Include reusable components
    './pages/**/*.{js,ts,jsx,tsx}', // Ensure pages are scanned
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
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        '2xs': { min: '276px', max: '359px' }, // Fold
        xs: { min: '360px', max: '389px' }, // Mobile
        sm: { min: '390px', max: '767px' }, // Wide Mobile
        tb: { min: '768px', max: '1023px' }, // Tablet
        lg: { min: '1024px' }, // Laptop
        xl: { min: '1280px' }, // Desktop
      },
      backgroundImage: {
        // svtAlbumBg: "url('/src/assets/images/svt-total-bg.jpeg')",
      },
    },
  },
  plugins: [],
};

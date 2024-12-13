/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
        animation: {
          'rotate': 'rotate 20s linear infinite',
        },
        keyframes: {
          rotate: {
            '0%': { transform: 'rotateY(0deg)' },
            '100%': { transform: 'rotateY(360deg)' },
          },
        },
        spacing: {
          '400': '400px',
        },
      },
  },
  plugins: [],
}

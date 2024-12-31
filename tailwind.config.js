/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
        fontFamily: {
          futura: ['Futura', 'sans-serif'],
        },
        fontSize: {
          base: '14px',
        },
        fontWeight: {
          normal: '400',
        },
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

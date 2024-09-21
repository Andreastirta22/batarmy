/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: '#f5f5dc',
        darkbrown: '#4b3621',
        'maroon-50': '#fbeef3',
        'maroon-100': '#f7d0d8',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
      },
      spacing: {
        '85': '85%',
        '75': '75px',
      },
      variants: {
        extend: {
          height: ['hover'],
          scale: ['hover'],
          opacity: ['hover'],
        },
      },
    },
  },
  plugins: [],
}

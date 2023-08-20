/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        eggplant: {
          DEFAULT: '#970066',
          50: '#FFABDF',
          100: '#FF8DD4',
          200: '#FF50BF',
          300: '#EB0098',
          400: '#D4008D',
          500: '#970066',
          600: '#7E0056',
          700: '#640046',
          800: '#4B0035',
          900: '#310024',
          950: '#24001B',
        },
      },
      container: {
        center: true,
      },
      fontFamily: {
        decorative: ['var(--font-decorative)', 'serif'],
      },
    },
  },
  darkMode: 'class',
}

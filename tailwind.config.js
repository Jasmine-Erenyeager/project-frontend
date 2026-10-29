/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F2F4F7',
        ink: '#18202F',
        muted: '#5B6577',
        line: '#DDE2EA',
        navy: { DEFAULT: '#14225E', 700: '#1B2E7A', 800: '#101C4D' },
        cobalt: { 50: '#EEF2FF', 100: '#DCE4FF', 600: '#2447D6', 700: '#1B38AE' },
        saffron: { 100: '#FCEFCB', 500: '#E7A117', 700: '#8F5F03' },
        good: { 50: '#E3F5F1', 600: '#0E8A78', 700: '#0A6A5C' },
        bad: { 50: '#FBE9E7', 600: '#C23B2E', 700: '#9B2A20' },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['Figtree', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

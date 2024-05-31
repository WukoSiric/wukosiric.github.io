/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    fontFamily: {
      sans: ['"IBM Plex Sans"', 'sans-serif'],
      mono: ['"IBM Plex Mono"', 'monospace']
    },
    extend: {
      colors: {
        slate: {
          dark: '#0E242D',
          light: '#133340'
        },
        offwhite: '#f2f2f2',
        accent: '#4ED98A',
        tert: '#4ED957'
      }
    }
  },
  plugins: []
}

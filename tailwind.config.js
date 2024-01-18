/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  purge: {
    options: {
      safelist: [
        {pattern: /(orange|red|yellow|amber|green|sky|purple|neutral)/}
      ],
    }
  },
  theme: {
    extend: {}
  },
  plugins: []
  
}

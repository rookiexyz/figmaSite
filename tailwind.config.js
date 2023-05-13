/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'site-blue': '#283C63',
        'secondary': '#FBE8D3',
        'site-red': '#FF7069',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        playfair: ['var(--font-playfair)'],
      },
      colors: {
        beige: '#F5F5DC',
        darkgreen: '#1B4332',
        green: "#5f6f00",
        mustard: "#f9a904",
        lightmustard: "#e0db4e",
      },
    },
  },
  plugins: [],
}

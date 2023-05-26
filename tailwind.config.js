/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'startnews' : "url('https://areatopik.com/wp-content/uploads/2022/10/Kobo-Nangis.jpg')",
      },
      colors:{
        primary : "#FFC107",
        secondary : "#FF9800",
        tertiary : "#FF5722",
      },
    },
    fontSize: {
      "2xs": "0.4rem",
      "xs": "0.8rem",
      "sm": "1rem", 
      "base": "1.2rem",
      "xl": "2rem",
      "2xl": "2.2rem",
    }
  },
  plugins: [],
}

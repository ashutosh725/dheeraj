/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
        },
      },
      colors: {
        primary: "#fb5b21",
        secondary: "#64dfcb",
        body: "#7d8f9e"
      },
      fontFamily: {
        Roboto: ['Roboto Slab', 'serif'],
      
        
      
        
      },
    },
  },
  plugins: [],
};

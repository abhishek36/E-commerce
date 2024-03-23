/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      // => @media (min-width: 540px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      screens: {
        xs: { min: "320px", max: "479px" },
        // => @media (min-width: 992px) { ... }
      },
      fontFamily: {
        lob: ["Sansita", "sans-serif"],
        gugi: ["Gugi", "sans-serif"],
        lobster: ["Lobster Two", "sans-serif"],
      },
      animation: {
        "bounce-slow": "bounce 2s linear infinite",
      },
      backgroundImage: {
        banner1: "url('..src/../assets/banner1.jpg')",
        banner2: "url('..src/../assets/banner2.jpg')",
      },
    },
  },
  plugins: [],
};

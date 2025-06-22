/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./src/**/*.{js,jsx,ts,tsx,html}", // Adjust based on your folders
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
          ooohbaby: ['"Oooh Baby"', 'cursive'], 
          montaga: ['"Montaga"', 'serif']
      },
        colors: {
        // Custom colors
        success: "#B0DDB6",
        successDark: "#8AB78E",
        primary: "#b57478",
        primaryLight : "#e6bfc1"
        },
         animation: {
        marquee: 'marquee 15s linear infinite',
        scroll: "scroll 10s linear infinite",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
         scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
}


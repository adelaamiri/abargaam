/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },

        ringWave: {
          "0%": {
            transform: "scale(0.9)",
            opacity: "0.7",
          },
          "100%": {
            transform: "scale(1.5)",
            opacity: "0",
          },
        },
      },

      animation: {
        marquee: "marquee 12s linear infinite",
      },
    },
  },

  plugins: [],
};

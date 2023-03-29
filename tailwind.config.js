/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ffc107",
          secondary: "#fffcf2",
          accent: "#FFE0B3",
          neutral: "#000000",
          "base-100": "#FFFFFF",
          info: "#467ACE",
          success: "#22E2C5",
          warning: "#F9CB58",
          error: "#DE5745",
        },
      },
    ],
    extend: {
      backgroundImage: {
        "hero-banner": "url('./src/assets/banner_1.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cobalt: "#03298F",
        paper: "#F0E6D1",
        ink: "#111111",
        riso: {
          red: "#F02F20",
          yellow: "#F9CB14",
          purple: "#6E36D4"
        }
      },
      fontFamily: {
        display: ["Anton", "Impact", "Haettenschweiler", "Arial Narrow Bold", "sans-serif"]
      }
    }
  },
  plugins: []
};

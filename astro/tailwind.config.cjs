/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: '"Cutive Mono", "Roboto Mono", monospace',
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};

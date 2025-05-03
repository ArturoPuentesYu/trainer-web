/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        rojo: "#D72638",
        negro: "#0F0F0F",
        grisoscuro: "#1F1F1F",
        grisclaro: "#E4E4E4",
        blanco: "#FFFFFF",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

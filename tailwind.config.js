/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6A65FF",
      },
    },
  },
  plugins: [
    require("preline/plugin"),
  ],
};

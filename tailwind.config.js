/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
   "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
     "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
          blackGray:'rgb(39,37,36)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
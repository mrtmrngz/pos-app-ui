/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "4%",
          sm: "1%"
        }
      },
      colors: {
        'primary': "#42A5F5",
        'secondary': "#81C784",
        'text-color': "#424242",
        'orange-color': "#ff7043",
        'soft-gray': "#E0E0E0",
        'danger': "#E53935",
        'border-color': "#bbbec9"
      }
    },
  },
  plugins: [],
}


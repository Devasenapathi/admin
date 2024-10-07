/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#334155",
        foreground: "#e2e8f0",
        tahiti: '#3ab7bf',
        deva: '#dc2626',
      },
    },
  },
  plugins: [],
};

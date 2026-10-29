/** @type {import('tailwindcss').Config} */
export default {
content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { serif: ['"Cormorant Garamond"', "Georgia", "serif"], sans: ["Inter", "system-ui", "sans-serif"] },
      colors: { bg: "var(--bg)", fg: "var(--fg)", mut: "var(--mut)", card: "var(--card)", line: "var(--line)", acc: "var(--acc)" },
    },
  },
  plugins: [],
};

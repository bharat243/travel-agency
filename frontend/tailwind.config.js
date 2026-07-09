/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05080f",
        "ink-soft": "#080d18",
        surface: "#0f1626",
        "surface-2": "#161f35",
        cream: "#f5efe0",
        "muted-blue": "#9aa3b8",
        gold: "#f2a93b",
        "gold-soft": "#ffc266",
        hairline: "rgba(255,255,255,0.08)",
        // semantic aliases used by the components
        background: "#080d18",
        foreground: "#f5efe0",
        border: "rgba(255,255,255,0.1)",
        primary: "#f2a93b",
        "primary-foreground": "#0b1220",
      },
      fontFamily: {
        sans: ['Inter', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Barlow Condensed"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      spacing: {
        4.5: "1.125rem", // used by py-4.5 buttons
      },
    },
  },
  plugins: [],
}
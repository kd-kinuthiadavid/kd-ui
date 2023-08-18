import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      core: {
        "bright-green": "#9FE870",
        "forest-green": "#163300",
      },
      secondary: {
        "bright-orange": "#FFC091",
        "bright-yellow": "#FFEB69",
        "bright-blue": "#A0E1E1",
        "bright-pink": "#FFD7EF",
        "dark-purple": "#260A2F",
        "dark-gold": "#3A341C",
        "dark-charcoal": "#21231D",
        "dark-maroon": "#320707",
      },
      product: {
        content: {
          "content-primary": "#0E0F0C",
          "content-secondary": "#454745",
          "content-tertiary": "#6A6C6A",
          "content-link": "#163300",
        },
        interactive: {
          "int-primary": "#163300",
          "int-accent": "#9FE870",
          "int-secondary": "#868685",
          "int-control": "#868685",
        },
        border: {
          "border-neutral": "#0E0F0C",
          "border-overlay": "#0E0F0C",
        },
        bg: {
          "bg-screen": "#FFFFFF",
          "bg-elevated": "#FFFFFF",
          "bg-neutral": "#163300",
          "bg-overlay": "#163300",
        },
        sentiment: {
          "sentiment-negative": "#A8200D",
          "sentiment-positive": "#2F5711",
          "sentiment-warning": "#EDC843",
        },
        base: {
          "base-contrast": "#FFFFFF",
          "base-light": "#FFFFFF",
          "base-dark": "#121511",
        },
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config

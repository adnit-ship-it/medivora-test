import designTokens from './data/designTokens.json'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Dynamic colors from CSS custom properties (set by branding API)
        backgroundColor: '#F2B1B1',
        bodyColor: '#CABABA',
        accentColor1: {
          DEFAULT: 'var(--color-accentColor1, #AA6F5A)',
          50: 'color-mix(in srgb, var(--color-accentColor1, #AA6F5A) 50%, transparent)',
        },
        accentColor2: 'var(--color-accentColor2, #BC8080)',
      },
      fontFamily: {
        // Fonts automatically loaded from designTokens.json
        headingFont: [designTokens.fonts.heading, "sans-serif"],
        bodyFont: [designTokens.fonts.body, "sans-serif"],
        defaultSerif: [designTokens.fonts.serif, "serif"],
      },
    },
  },
  plugins: [],
};

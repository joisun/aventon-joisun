
const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: {
          primary: 'rgb(var(--background-primary) / <alpha-value>)',
          secondary: 'rgb(var(--background-secondary) / <alpha-value>)',
        },
        foreground: {
          primary: 'rgb(var(--foreground-primary) / <alpha-value>)',
          secondary: 'rgb(var(--foreground-secondary) / <alpha-value>)',
        },
        accent: {
          primary: 'rgb(var(--accent-primary) / <alpha-value>)',
          secondary: 'rgb(var(--accent-secondary) / <alpha-value>)',
        },
        border: 'rgb(var(--border-color) / <alpha-value>)',
        error: 'rgb(var(--error-color) / <alpha-value>)',
        shadow: 'rgb(var(--shadow-color) / <alpha-value>)',
      },
      keyframes: {
        scaleInOut: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.9)' },
        },
        swingRotate: {
          '0%': { transform: 'rotate(-45deg)' },
          '10%': { transform: 'rotate(45deg)' },
          '20%': { transform: 'rotate(-35deg)' },
          '30%': { transform: 'rotate(35deg)' },
          '40%': { transform: 'rotate(-25deg)' },
          '50%': { transform: 'rotate(25deg)' },
          '60%': { transform: 'rotate(-15deg)' },
          '70%': { transform: 'rotate(15deg)' },
          '80%': { transform: 'rotate(-5deg)' },
          '90%': { transform: 'rotate(5deg)' },
          '100%': { transform: 'rotate(0deg)' }
        },
        slowDownRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        jellyScale: {
          '0%': { transform: 'scale(0)' },
          '16%': { transform: 'scale(1.3)' },
          '28%': { transform: 'scale(0.85)' },
          '40%': { transform: 'scale(1.15)' },
          '52%': { transform: 'scale(0.92)' },
          '64%': { transform: 'scale(1.08)' },
          '76%': { transform: 'scale(0.96)' },
          '88%': { transform: 'scale(1.03)' },
          '94%': { transform: 'scale(0.99)' },
          '100%': { transform: 'scale(1)' }
        },
        fadeLeft: {
          '0%': {
            opacity: 0,
            transform: 'translate(2rem)'
          },
          '100%': {
            opacity: 1,
            transform: 'translate(0)'
          }
        },
        fadeRight: {
          '0%': {
            opacity: 0,
            transform: 'translate(-2rem)'
          },
          '100%': {
            opacity: 1,
            transform: 'translate(0)'
          }
        },
      },
      animation: {
        /*timefunction editor https://matthewlein.com/tools/ceaser */
        fadeLeft: 'fadeLeft 1s both cubic-bezier(0,0,.2,1)',
        fadeRight: 'fadeRight 1s both cubic-bezier(0,0,.2,1)',
        scaleInOut: 'scaleInOut 1s ease-in-out infinite',
        swingRotate: 'swingRotate 2s ease-out',
        slowDownRotate: 'slowDownRotate 2s cubic-bezier(0.005, 0.975, 0.120, 1.020) forwards',
        jellyScale: 'jellyScale 1s cubic-bezier(0.37, 0, 0.63, 1.4) forwards'
      },
    },
  },
  plugins: [],
}
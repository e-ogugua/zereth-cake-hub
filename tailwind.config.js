/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        // Cake-themed color palette
        'cake': {
          50: '#fff0e6',
          100: '#ffd6b3',
          200: '#ffb380',
          300: '#ff8f4d',
          400: '#ff6b1a',
          500: '#e65100',
          600: '#b33d00',
          700: '#802b00',
          800: '#4d1a00',
          900: '#1a0900',
          DEFAULT: '#ff6b1a',
        },
        'frosting': {
          50: '#fef2f0',
          100: '#fdd6d1',
          200: '#fbb9b2',
          300: '#f99c93',
          400: '#f78074',
          500: '#f06b4e',
          600: '#d84c2e',
          700: '#a83a23',
          800: '#782818',
          900: '#48160d',
          DEFAULT: '#f06b4e',
        },
        'sprinkle': {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          DEFAULT: '#8b5cf6',
        },
        'primary': {
          DEFAULT: '#ff6b1a',
          50: '#fff0e6',
          100: '#ffd6b3',
          200: '#ffb380',
          300: '#ff8f4d',
          400: '#ff6b1a',
          500: '#e65100',
          600: '#b33d00',
          700: '#802b00',
          800: '#4d1a00',
          900: '#1a0900',
        },
        'secondary': {
          DEFAULT: '#8b5cf6',
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        handwriting: ['Dancing Script', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'sugar-sparkle': 'sugar-sparkle 2s ease-in-out infinite',
        'cake-float': 'cake-float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        'cake-float': {
          '0%, 100%': { transform: 'translateY(0) rotate(-2deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}

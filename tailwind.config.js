/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cake-pink': '#F472B6',
        'cream-white': '#FEF3C7',
        'berry-purple': '#A855F7',
        'caramel-orange': '#FB923C',
        'sweet-rose': '#F9A8D4',
        'vanilla-cream': '#FEF7CD',
        'chocolate-brown': '#92400E',
        'strawberry-red': '#F87171',
        'mint-green': '#6EE7B7',
        'lavender-purple': '#C084FC'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'sweet': ['Dancing Script', 'cursive']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'sweet-bounce': 'sweetBounce 2s ease-in-out infinite',
        'cake-float': 'cakeFloat 4s ease-in-out infinite',
        'sugar-sparkle': 'sugarSparkle 3s ease-in-out infinite alternate',
        'rotate-slow': 'rotate 20s linear infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        sweetBounce: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        cakeFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' }
        },
        sugarSparkle: {
          '0%': { boxShadow: '0 0 5px #F472B6, 0 0 10px #F472B6' },
          '100%': { boxShadow: '0 0 20px #F472B6, 0 0 30px #F472B6, 0 0 40px #F472B6' }
        }
      }
    },
  },
  plugins: [],
}

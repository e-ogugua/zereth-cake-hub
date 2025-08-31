/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cake-pink': 'var(--color-cake-pink)',
        'cream-white': 'var(--color-cream-white)',
        'berry-purple': 'var(--color-berry-purple)',
        'caramel-orange': 'var(--color-caramel-orange)',
        'sweet-rose': 'var(--color-sweet-rose)',
        'vanilla-cream': 'var(--color-vanilla-cream)',
        'chocolate-brown': 'var(--color-chocolate-brown)',
        'strawberry-red': 'var(--color-strawberry-red)',
        'mint-green': 'var(--color-mint-green)',
        'lavender-purple': 'var(--color-lavender-purple)'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'sweet': ['Dancing Script', 'cursive']
      },
      animation: {
        'sweet-bounce': 'var(--animate-sweet-bounce)',
        'cake-float': 'var(--animate-cake-float)',
        'sugar-sparkle': 'var(--animate-sugar-sparkle)'
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
}

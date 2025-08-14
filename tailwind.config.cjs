/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      maxWidth: {
        'custom': '1400px',
      },
      colors: {
        primary: {
          DEFAULT: '#0d1b2a',
          dark: '#0a1520',
        },
        secondary: {
          DEFAULT: '#415a77',
        },
        'text-dark': '#1f2937',
        'text-light': '#6b7280',
        'extra-light': '#fafbfc',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(to right bottom, #0d1b2a, #415a77)',
        'gradient-2': 'linear-gradient(to right bottom, #415a77, #778da9)',
      },
      boxShadow: {
        'custom-1': '0 10px 25px rgba(13, 27, 42, 0.1)',
        'custom-2': '0 20px 40px rgba(13, 27, 42, 0.2)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'pulse-custom': 'pulse 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
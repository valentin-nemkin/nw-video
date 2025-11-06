/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      /* === Цветовая палитра проекта === */
      colors: {
        background: '#faf7f3',
        foreground: '#1c1c1c',
        primary: '#e6b57e',
        secondary: '#b48b5c',
        card: '#ffffff',
        muted: '#f0ede9',
        border: '#e2ded8',
        destructive: '#dc2626',
      },

      /* === Шрифты === */
      fontFamily: {
        primary: ['Manrope', 'sans-serif'],      // основной текст
        secondary: ['Inter', 'sans-serif'],      // заголовки
      },

      /* === Контейнер === */
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
          '2xl': '5rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },

      /* === Скругления === */
      borderRadius: {
        none: '0',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
        full: '9999px',
      },

      /* === Тени === */
      boxShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.08)',
        md: '0 4px 8px rgba(0, 0, 0, 0.1)',
        lg: '0 8px 16px rgba(0, 0, 0, 0.12)',
        xl: '0 12px 24px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}

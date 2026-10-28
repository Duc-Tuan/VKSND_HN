import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Tông màu chủ đạo VÀNG CHANH (Lemon / Lime Yellow)
        lemon: {
          50: '#fefee8',
          100: '#fbffc2',
          200: '#f6ff85',
          300: '#ebff42',
          400: '#dbf40b',
          500: '#c2dd02', // Vàng chanh chủ đạo
          600: '#99b000',
          700: '#738500',
          800: '#596705',
          900: '#4a550a',
          950: '#262f00',
        },
        navy: {
          50: '#f0f5fa',
          100: '#e1ecf5',
          200: '#c5d9eb',
          300: '#99bcdd',
          400: '#679acc',
          500: '#437cb9',
          600: '#31629e',
          700: '#284e80',
          800: '#1b375b',
          900: '#0f243e', // Xanh đậm cơ quan tư pháp
          950: '#071322',
        },
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Merriweather"', 'serif'],
      },
      boxShadow: {
        'lemon-glow': '0 0 20px -3px rgba(219, 244, 11, 0.4)',
        'lemon-sm': '0 0 10px -2px rgba(219, 244, 11, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
}

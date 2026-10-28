import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Tông màu chủ đạo VÀNG CHANH #FFF44F (Lemon Yellow) theo yêu cầu
        lemon: {
          50: '#fffef0',  // Kem vàng chanh thanh nhẹ tinh tế
          100: '#fffccb', // Vàng chanh phấn nhạt
          200: '#fff9a6', // Vàng chanh pastel mềm mại
          300: '#fff777', // Vàng chanh sáng
          400: '#FFF44F', // MÀU CHỦ ĐẠO CHÍNH THỨC (Lemon Yellow #FFF44F)
          500: '#ebd626', // Tông đậm hơn làm viền/nhấn
          600: '#cca913', // Vàng chanh sẫm
          700: '#a37e10', // Màu chữ/icon sắc nét
          800: '#836214',
          900: '#6f5117',
          950: '#402c08',
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
        'lemon-glow': '0 0 20px -3px rgba(255, 244, 79, 0.45)',
        'lemon-sm': '0 0 10px -2px rgba(255, 244, 79, 0.3)',
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

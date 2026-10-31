import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Tông màu chủ đạo ĐỎ TƯ PHÁP #a41600 (Judicial Red) theo yêu cầu
        lemon: {
          50: '#fff5f5',  // Đỏ phớt rất nhẹ cho nền trích dẫn / card
          100: '#fee2e2', // Đỏ nhạt
          200: '#fecaca', // Viền đỏ nhạt
          300: '#c81e02', // Đỏ ruby sáng (dùng cho gradient/hover)
          400: '#a41600', // ★ MÀU CHỦ ĐẠO CHÍNH THỨC (#a41600)
          500: '#861200', // Đỏ sẫm (hover / viền đậm)
          600: '#6c1002', // Đỏ đô đậm
          700: '#a41600', // Màu chữ/icon sắc nét
          800: '#530f06',
          900: '#3d0903',
          950: '#260400',
        },
        primary: {
          50: '#fff5f5',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#c81e02',
          400: '#a41600', // MÀU CHỦ ĐẠO CHÍNH THỨC (#a41600)
          500: '#861200',
          600: '#6c1002',
          700: '#a41600',
          800: '#530f06',
          900: '#3d0903',
          950: '#260400',
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
        'lemon-glow': '0 0 20px -3px rgba(164, 22, 0, 0.45)',
        'lemon-sm': '0 0 10px -2px rgba(164, 22, 0, 0.3)',
        'primary-glow': '0 0 20px -3px rgba(164, 22, 0, 0.45)',
        'primary-sm': '0 0 10px -2px rgba(164, 22, 0, 0.3)',
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

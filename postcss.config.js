/**
 * Tailwind v3를 위한 표준 PostCSS 설정입니다.
 */
export default {
  plugins: {
    // Tailwind를 PostCSS 플러그인으로 실행
    '@tailwindcss/postcss': {}, 
    // 벤더 프리픽스 처리를 위한 Autoprefixer 실행
    'autoprefixer': {},
  },
}
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Vite 설정 파일
export default defineConfig({
  // React 플러그인
  plugins: [react()],
  
  // base 경로
  // - 로컬 개발 및 프리뷰에서는 반드시 '/' 여야 JS/CSS 경로가 올바르게 동작합니다.
  // - 커스텀 도메인(예: https://inserview.studio)을 사용하는 경우 base는 '/' 그대로 두면 됩니다.
  base: '/',
  
  // 경로 별칭 설정
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // CSS 설정 (PostCSS 경로 명시)
  css: {
    postcss: './postcss.config.js',
  },
  
  // 빌드 설정
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
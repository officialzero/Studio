import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Vite 설정 파일
export default defineConfig({
  // React 플러그인
  plugins: [react()],
  
  // GitHub Pages 배포를 위한 base 경로
  base: '/Studio/',
  
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
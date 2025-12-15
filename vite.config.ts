import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Vite 설정 파일
export default defineConfig({
  // React 플러그인
  plugins: [react()],
  
  // base 경로 설정 (프로덕션 환경에서는 /Studio/를 사용하여 경로 오류 방지)
  base: process.env.NODE_ENV === 'production' ? '/Studio/' : '/',
  
  // 경로 별칭 설정
  resolve: {
    alias: {
      // src 디렉토리를 '@'로 별칭 설정
      "@": path.resolve(__dirname, "./src"),
    },
  }, 
  
  // CSS 설정
  css: {
    // PostCSS 설정 파일 경로 명시 (자동으로 찾지만, 명시해도 무방합니다)
    postcss: './postcss.config.js',
  },
  
  // 빌드 설정
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Vite 설정 파일: https://vitejs.dev/config/
export default defineConfig({
  // ==========================================================
  // 1. GitHub Pages 배포를 위한 핵심 설정 (MUST HAVE)
  // 저장소 이름이 'Studio'이므로, base 경로를 '/Studio/'로 설정합니다.
  base: '/Studio/',
  // ==========================================================
  
  // 2. 프로젝트 루트 명시
  // 이 설정을 추가하여 Vite에게 index.html을 현재 디렉토리에서 찾도록 강제합니다.
  root: '.', // <-- 이 부분이 핵심입니다. 현재 디렉토리를 루트로 설정합니다.

  // 3. React 컴포넌트를 빌드하기 위한 플러그인
  plugins: [react()],

  // 4. 모듈 해석(Resolution) 설정 (경로 별칭 설정)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
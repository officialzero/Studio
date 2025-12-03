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
  
  // 2. React 컴포넌트를 빌드하기 위한 플러그인
  plugins: [react()],

  // 3. 모듈 해석(Resolution) 설정 (경로 별칭 설정)
  resolve: {
    alias: {
      // "@" 경로를 현재 디렉토리(__dirname) 기준으로 "src" 폴더로 매핑합니다.
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // 4. (이전에 추가했던) 불필요한 'build' 및 'rollupOptions' 섹션을 제거합니다.
  //    Vite가 기본적으로 루트의 index.html을 찾도록 합니다.
});
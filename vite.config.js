import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Vite 설정 파일: https://vitejs.dev/config/
export default defineConfig({
  // 1. 빌드 관련 설정 추가 (이 부분이 index.html 경로 문제를 해결합니다)
  build: {
    // 빌드 결과물이 저장될 폴더 (기본값: dist)
    outDir: 'dist',
    // 빌드의 루트 디렉토리를 현재 디렉토리('.')로 지정하여 index.html을 찾도록 함
    // index.html이 프로젝트 최상단에 있으므로 이를 명확히 알려줍니다.
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      }
    }
  },

  // 2. React 컴포넌트를 빌드하기 위한 플러그인
  plugins: [react()],

  // 3. 모듈 해석(Resolution) 설정
  resolve: {
    // 경로 별칭(Alias) 설정: 'tsconfig.json'과 동일하게 @를 './src' 폴더로 지정합니다.
    alias: {
      // "@" 경로를 현재 디렉토리(__dirname) 기준으로 "src" 폴더로 매핑합니다.
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
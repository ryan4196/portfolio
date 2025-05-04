import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    svgr(), 
    tsconfigPaths(),
  ],
  // resolve: {
  //   alias: {
  //     // src/assets를 절대 경로처럼 사용
  //     'assets': path.resolve(__dirname, 'src/assets'),
  //   },
  // },
})

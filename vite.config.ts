import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import electron from 'vite-plugin-electron';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  electron({
    entry: 'electron/main.ts',
  }),
  ],
  build: {
    emptyOutDir: false, // 必须配置，否则electron相关文件将不会生成build后的文件
  },

})

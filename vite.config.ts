import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  plugins: [vue()],
  base: '/echarts-demo/',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // 1. 第三方依赖分块
          if (id.includes('node_modules/echarts')) {
            return 'echarts-vendor';
          }
          if (id.includes('node_modules/vue')) {
            return 'vue-vendor';
          }

          // 2. 业务代码分块：匹配 src/charts 下的文件
          if (id.includes('/src/charts/')) {
            return 'charts';
          }

          // 3. 其他业务模块分块（可扩展，比如 utils、views 等）
          if (id.includes('/src/utils/')) {
            return 'utils';
          }

          // 4. 剩余默认分块（可不写，Rollup 会自动处理）
          // return 'other';
        }
      }
    },
    chunkSizeWarningLimit: 1100 // 调整 chunk 大小警告阈值
  }
})
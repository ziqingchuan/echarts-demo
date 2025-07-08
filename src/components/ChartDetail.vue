<template>
  <div class="chart-detail">
    <button class="back-button" @click="$emit('back')">
      &lt; 返回图表列表
    </button>

    <div class="detail-container">
      <!-- 代码展示区 -->
      <div class="code-panel">
        <h2>代码实现</h2>
        <pre class="code"><code ref="codeBlock">{{ chartCode }}</code></pre>
      </div>

      <!-- 图表展示区 -->
      <div class="chart-panel">
        <h2>图表预览</h2>
        <component :is="chartComponent" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, onMounted, watch } from 'vue'
import hljs from '../utils/highlight.ts'

const props = defineProps({
  chartComponent: Object,
  chartCode: String
})

const codeBlock = ref<HTMLElement | null>(null)

// 高亮代码函数
const highlightCode = () => {
  if (codeBlock.value) {
    hljs.highlightElement(codeBlock.value)
  }
}

// 组件挂载时高亮代码
onMounted(highlightCode)

// 监听代码变化重新高亮
watch(() => props.chartCode, highlightCode)
</script>

<style scoped>
/* 保持你原有的样式不变 */
.chart-detail {
  padding: 20px;
  overflow: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome/Safari/Opera */
  }
}

.back-button {
  background: #409eff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background 0.3s;
}

.back-button:hover {
  background: #66b1ff;
}

.detail-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 770px) {
    display: flex;
    flex-direction: column;
  }
  height: calc(100vh - 150px);
  gap: 20px;
}

.code-panel, .chart-panel {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
}
.code-panel {
  overflow: hidden;
  min-height: 500px;
}
.chart-panel {
  overflow: auto;
  min-height: 500px;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome/Safari/Opera */
  }
}

.code {
  height: 85%;
}

h2 {
  margin-top: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  color: #333;
}

pre {
  overflow: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome/Safari/Opera */
  }
}

code {
  font-family: 'Courier New', monospace;
  font-size: 14px;
  font-weight: 600;
}

</style>
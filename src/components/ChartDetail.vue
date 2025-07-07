<template>
  <div class="chart-detail">
    <button class="back-button" @click="$emit('back')">
      &lt; 返回图表列表
    </button>

    <div class="detail-container">
      <!-- 代码展示区 -->
      <div class="code-panel">
        <h2>代码实现</h2>
        <pre class="code"><code>{{ chartCode }}</code></pre>
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
import { defineProps, computed } from 'vue';

const props = defineProps({
  chartComponent: Object,
  chartCode: String
});

</script>

<style scoped>
.chart-detail {
  padding: 20px;
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
}
.chart-panel {
  overflow: auto;
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
  background: #f6f8fa;
  padding: 16px;
  border-radius: 6px;
  overflow: auto;
  height: calc(100% - 60px);
}

code {
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.5;
}
</style>
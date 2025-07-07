<template>
  <div class="dashboard">
    <!-- 左侧侧边栏 -->
    <div class="sidebar">
      <h2>图表类型</h2>
      <div
          v-for="type in chartTypes"
          :key="type"
          class="chart-type"
          :class="{ active: currentType === type }"
          @click="selectType(type)"
      >
        {{ typeLabels[type] }}
      </div>
    </div>

    <!-- 右侧内容区 -->
    <div class="content">
      <!-- 显示当前类别的图表子类型 -->
      <ChartCategory
          v-if="!currentChart"
          :category="currentType"
          @select-chart="selectChart"
      />

      <!-- 显示具体图表详情 -->
      <ChartDetail
          v-else
          :chart-component="currentChart"
          :chart-code="currentCode"
          @back="currentChart = null"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, markRaw, type Component } from 'vue';
import ChartCategory from '../components/ChartCategory.vue';
import ChartDetail from '../components/ChartDetail.vue';

// 定义图表类型的联合类型
type ChartType = 'bar' | 'line' | 'scatter' | 'pie';

// 图表类型定义
const chartTypes: ChartType[] = ['bar', 'line', 'scatter', 'pie'];
const currentCode = ref<string>('');
const typeLabels: Record<ChartType, string> = {
  bar: '柱状图',
  line: '折线图',
  scatter: '散点图',
  pie: '饼图'
};

// 当前选中的图表类型（默认柱状图）
const currentType = ref<ChartType>('bar');
// 当前选中的具体图表组件
const currentChart = ref<Component | null>(null);

// 选择图表大类
const selectType = (type: ChartType) => {
  currentType.value = type;
  currentChart.value = null; // 重置选中的具体图表
};

// 选择具体图表
const selectChart = (chartComponent: Component, chatCode: string) => {
  currentChart.value = markRaw(chartComponent);
  currentCode.value = chatCode;
};
</script>

<style scoped>
.dashboard {
  display: flex;
  height: 100vh;
  background-color: #f5f7fa;
}

.sidebar {
  width: 10%;
  background: #fff;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.chart-type {
  padding: 12px 15px;
  margin: 8px 0;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
}

.chart-type:hover {
  background-color: #ecf5ff;
  color: #409eff;
}

.chart-type.active {
  background-color: #409eff;
  color: white;
  font-weight: bold;
}

.content {
  flex: 1;
  padding: 20px;
  overflow: auto;
}
</style>
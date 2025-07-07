<template>
  <div class="chart-category">
    <h2>{{ categoryLabels[category] }}图表</h2>
    <div class="chart-cards">
      <div
          v-for="chart in charts[category]"
          :key="chart.name"
          class="chart-card"
          @click="$emit('select-chart', chart.component, chart.code)"
      >
        <div class="chart-preview">
          <img :src="chart.src" class="chart-preview-img" alt="preview"/>
        </div>
        <h3>{{ chart.name }}</h3>
        <p>{{ chart.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from 'vue';
import { charts } from "../chartsCollection/collection.ts";

// 定义图表类型
export type ChartType = 'bar' | 'line' | 'scatter' | 'pie';

// 定义 props
const props = defineProps({
  category: {
    type: String as PropType<ChartType>,
    required: true
  }
});

// 图表类别标签
const categoryLabels: Record<ChartType, string> = {
  bar: '柱状图',
  line: '折线图',
  scatter: '散点图',
  pie: '饼图'
};

</script>

<style scoped>
.chart-category {
  padding: 20px;
}

.chart-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.chart-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.chart-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #409eff, #36cfc9);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.chart-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
}

.chart-card:hover::before {
  transform: scaleX(1);
}

.chart-preview {
  height: 200px;
  margin-bottom: 15px;
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chart-preview-img {
  height: 200px;
}

h3 {
  margin: 10px 0 5px;
  color: #1f2d3d;
  font-size: 18px;
  font-weight: 600;
}

p {
  color: #5e6d82;
  font-size: 14px;
  margin: 0;
  line-height: 1.5;
}
</style>
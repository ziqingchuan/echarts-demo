<template>
  <div class="chart-wrapper">
    <h2>散点图示例</h2>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';

const chart = ref<HTMLElement | null>(null);
let myChart: echarts.ECharts | null = null;

const handleResize = () => {
  myChart?.resize();
};

onMounted(() => {
  if (!chart.value) return;

  myChart = echarts.init(chart.value);

  // 生成模拟数据
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push([
      Math.random() * 100,
      Math.random() * 100,
      Math.floor(Math.random() * 50) + 10 // 气泡大小
    ]);
  }

  const option = {
    tooltip: {
      position: 'top'
    },
    grid: {
      left: '3%',
      right: '7%',
      bottom: '7%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      scale: true
    },
    yAxis: {
      type: 'value',
      scale: true
    },
    series: [{
      name: '数据',
      type: 'scatter',
      data: data,
      itemStyle: {
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
          offset: 0,
          color: 'rgb(251, 118, 123)'
        }, {
          offset: 1,
          color: 'rgb(204, 46, 72)'
        }])
      }
    }]
  };

  myChart.setOption(option);
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  if (myChart) {
    window.removeEventListener('resize', handleResize);
    myChart.dispose();
    myChart = null;
  }
});
</script>

<style scoped>
.chart {
  width: 100%;
  height: 500px;
}
</style>
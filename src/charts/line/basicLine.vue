<template>
  <div class="chart-wrapper">
    <h2>折线图示例</h2>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';

const chart = ref<HTMLElement | null>(null);
const myChart = ref<echarts.ECharts | null>(null);

const handleResize = () => {
  myChart.value?.resize();
};

onMounted(() => {
  if (!chart.value) return;

  myChart.value = echarts.init(chart.value);

  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }
    ]
  };

  myChart.value.setOption(option);
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  if (myChart.value) {
    window.removeEventListener('resize', handleResize);
    myChart.value.dispose();
    myChart.value = null;
  }
});
</script>

<style scoped>
.chart {
  width: 100%;
  height: 500px;
}
</style>
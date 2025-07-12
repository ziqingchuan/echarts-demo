<template>
  <div class="chart-wrapper">
    <h2>涟漪特效散点图</h2>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';
import {effectScatterChartData} from "../../consts/data/effectScatterChart.ts";

const chart = ref<HTMLElement | null>(null);
let myChart: echarts.ECharts | null = null;

const handleResize = () => {
  myChart?.resize();
};

onMounted(() => {
  if (!chart.value) return;

  myChart = echarts.init(chart.value);

  const option = {
    xAxis: {
      scale: true
    },
    yAxis: {
      scale: true
    },
    series: [
      {
        type: 'effectScatter',
        symbolSize: 20,
        data: [
          [172.7, 105.2],
          [153.4, 42]
        ]
      },
      {
        type: 'scatter',
        // prettier-ignore
        data: effectScatterChartData
      }
    ]
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
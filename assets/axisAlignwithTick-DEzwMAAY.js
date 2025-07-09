const r=`<template>\r
  <div class="chart-wrapper">\r
    <h2>坐标轴刻度与标签对齐</h2>\r
    <div ref="chart" class="chart"></div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref, onMounted, onBeforeUnmount } from 'vue';\r
import * as echarts from 'echarts';\r
\r
const chart = ref<HTMLElement | null>(null);\r
let myChart: echarts.ECharts | null = null;\r
\r
const handleResize = () => {\r
  myChart?.resize();\r
};\r
\r
onMounted(() => {\r
  if (!chart.value) return;\r
\r
  myChart = echarts.init(chart.value);\r
  const option = {\r
    tooltip: {\r
      trigger: 'axis',\r
      axisPointer: {\r
        type: 'shadow'\r
      }\r
    },\r
    grid: {\r
      left: '3%',\r
      right: '4%',\r
      bottom: '3%',\r
      containLabel: true\r
    },\r
    xAxis: [\r
      {\r
        type: 'category',\r
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],\r
        axisTick: {\r
          alignWithLabel: true\r
        }\r
      }\r
    ],\r
    yAxis: [\r
      {\r
        type: 'value'\r
      }\r
    ],\r
    series: [\r
      {\r
        name: 'Direct',\r
        type: 'bar',\r
        barWidth: '60%',\r
        data: [10, 52, 200, 334, 390, 330, 220]\r
      }\r
    ]\r
  };\r
\r
  myChart.setOption(option);\r
  window.addEventListener('resize', handleResize);\r
});\r
\r
onBeforeUnmount(() => {\r
  if (myChart) {\r
    window.removeEventListener('resize', handleResize);\r
    myChart.dispose();\r
    myChart = null;\r
  }\r
});\r
<\/script>\r
\r
<style scoped>\r
.chart {\r
  width: 100%;\r
  height: 500px;\r
}\r
</style>`;export{r as default};

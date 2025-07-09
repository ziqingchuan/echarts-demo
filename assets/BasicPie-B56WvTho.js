const r=`<template>\r
  <div class="chart-wrapper">\r
    <h2>基础饼图</h2>\r
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
\r
  const option = {\r
\r
    tooltip: {\r
      trigger: 'item'\r
    },\r
    legend: {\r
      orient: 'vertical',\r
      left: 'left'\r
    },\r
    series: [\r
      {\r
        name: 'Access From',\r
        type: 'pie',\r
        radius: '50%',\r
        data: [\r
          { value: 1048, name: 'Search Engine' },\r
          { value: 735, name: 'Direct' },\r
          { value: 580, name: 'Email' },\r
          { value: 484, name: 'Union Ads' },\r
          { value: 300, name: 'Video Ads' }\r
        ],\r
        emphasis: {\r
          itemStyle: {\r
            shadowBlur: 10,\r
            shadowOffsetX: 0,\r
            shadowColor: 'rgba(0, 0, 0, 0.5)'\r
          }\r
        }\r
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

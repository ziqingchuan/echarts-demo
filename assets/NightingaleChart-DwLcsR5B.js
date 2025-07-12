const r=`<template>\r
  <div class="chart-wrapper">\r
    <h2>南丁格尔玫瑰图</h2>\r
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
    legend: {\r
      top: 'bottom'\r
    },\r
    toolbox: {\r
      show: true,\r
      feature: {\r
        mark: { show: true },\r
        dataView: { show: true, readOnly: false },\r
        restore: { show: true },\r
        saveAsImage: { show: true }\r
      }\r
    },\r
    series: [\r
      {\r
        name: 'Nightingale Chart',\r
        type: 'pie',\r
        radius: [50, 150],\r
        center: ['50%', '50%'],\r
        roseType: 'area',\r
        itemStyle: {\r
          borderRadius: 8\r
        },\r
        data: [\r
          { value: 40, name: 'rose 1' },\r
          { value: 38, name: 'rose 2' },\r
          { value: 32, name: 'rose 3' },\r
          { value: 30, name: 'rose 4' },\r
          { value: 28, name: 'rose 5' },\r
          { value: 26, name: 'rose 6' },\r
          { value: 22, name: 'rose 7' },\r
          { value: 18, name: 'rose 8' }\r
        ]\r
      }\r
    ]\r
  };\r
\r
\r
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

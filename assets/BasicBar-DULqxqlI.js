const r=`<template>\r
  <div class="chart-wrapper">\r
    <h2>柱状图示例</h2>\r
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
      axisPointer: { type: 'shadow' }\r
    },\r
    grid: {\r
      left: '3%',\r
      right: '4%',\r
      bottom: '3%',\r
      containLabel: true\r
    },\r
    xAxis: {\r
      type: 'category',\r
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']\r
    },\r
    yAxis: {\r
      type: 'value'\r
    },\r
    series: [\r
      {\r
        name: '销量',\r
        type: 'bar',\r
        data: [120, 200, 150, 80, 70, 110],\r
        itemStyle: {\r
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [\r
            { offset: 0, color: '#83bff6' },\r
            { offset: 1, color: '#188df0' }\r
          ])\r
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

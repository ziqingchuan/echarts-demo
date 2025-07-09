const n=`<template>\r
  <div class="chart-wrapper">\r
    <h2>函数绘图</h2>\r
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
  function func(x: number) {\r
    x /= 10;\r
    return Math.sin(x) * Math.cos(x * 2 + 1) * Math.sin(x * 3 + 2) * 50;\r
  }\r
\r
  function generateData() {\r
    let data = [];\r
    for (let i = -200; i <= 200; i += 0.1) {\r
      data.push([i, func(i)]);\r
    }\r
    return data;\r
  }\r
\r
  const option = {\r
    animation: false,\r
    grid: {\r
      top: 40,\r
      left: 50,\r
      right: 40,\r
      bottom: 50\r
    },\r
    xAxis: {\r
      name: 'x',\r
      minorTick: {\r
        show: true\r
      },\r
      minorSplitLine: {\r
        show: true\r
      }\r
    },\r
    yAxis: {\r
      name: 'y',\r
      min: -100,\r
      max: 100,\r
      minorTick: {\r
        show: true\r
      },\r
      minorSplitLine: {\r
        show: true\r
      }\r
    },\r
    dataZoom: [\r
      {\r
        show: true,\r
        type: 'inside',\r
        filterMode: 'none',\r
        xAxisIndex: [0],\r
        startValue: -20,\r
        endValue: 20\r
      },\r
      {\r
        show: true,\r
        type: 'inside',\r
        filterMode: 'none',\r
        yAxisIndex: [0],\r
        startValue: -20,\r
        endValue: 20\r
      }\r
    ],\r
    series: [\r
      {\r
        type: 'line',\r
        showSymbol: false,\r
        clip: true,\r
        data: generateData()\r
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
</style>`;export{n as default};

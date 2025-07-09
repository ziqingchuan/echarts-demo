const r=`<template>\r
  <div class="chart-wrapper">\r
    <h2>可点击的柱状图</h2>\r
    <div ref="chart" class="chart"></div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref, onMounted, onBeforeUnmount } from 'vue';\r
import * as echarts from 'echarts';\r
import {clickableColumnChartDataAxis, clickableColumnChartData} from "../../consts/data/clickableColumnChart.ts";\r
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
  let yMax = 500;\r
  let dataShadow = [];\r
\r
  for (let i = 0; i < clickableColumnChartData.length; i++) {\r
    dataShadow.push(yMax);\r
  }\r
\r
  const option = {\r
    xAxis: {\r
      data: clickableColumnChartDataAxis,\r
      axisLabel: {\r
        inside: true,\r
        color: '#fff'\r
      },\r
      axisTick: {\r
        show: false\r
      },\r
      axisLine: {\r
        show: false\r
      },\r
      z: 10\r
    },\r
    yAxis: {\r
      axisLine: {\r
        show: false\r
      },\r
      axisTick: {\r
        show: false\r
      },\r
      axisLabel: {\r
        color: '#999'\r
      }\r
    },\r
    dataZoom: [\r
      {\r
        type: 'inside'\r
      }\r
    ],\r
    series: [\r
      {\r
        type: 'bar',\r
        showBackground: true,\r
        data: clickableColumnChartData\r
      }\r
    ]\r
  };\r
\r
  myChart.setOption(option);\r
  window.addEventListener('resize', handleResize);\r
\r
  // Enable data zoom when user click bar.\r
  const zoomSize = 6;\r
  myChart.on('click', function (params) {\r
    console.log(clickableColumnChartDataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);\r
    myChart?.dispatchAction({\r
      type: 'dataZoom',\r
      startValue: clickableColumnChartDataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],\r
      endValue:\r
          clickableColumnChartDataAxis[Math.min(params.dataIndex + zoomSize / 2, clickableColumnChartData.length - 1)]\r
    });\r
  });\r
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

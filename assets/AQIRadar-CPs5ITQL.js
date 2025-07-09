const r=`<template>\r
  <div class="chart-wrapper">\r
    <h2>AQI 雷达图</h2>\r
    <div ref="chart" class="chart"></div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref, onMounted, onBeforeUnmount } from 'vue';\r
import * as echarts from 'echarts';\r
import {lineStyle, dataBJ, dataGZ, dataSH} from "../../consts/data/AQIRadar.ts";\r
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
    backgroundColor: 'rgba(22,22,39,0.86)',\r
    legend: {\r
      bottom: 5,\r
      data: ['Beijing', 'Shanghai', 'Guangzhou'],\r
      itemGap: 20,\r
      textStyle: {\r
        color: '#fff',\r
        fontSize: 14\r
      },\r
      selectedMode: 'single'\r
    },\r
    radar: {\r
      indicator: [\r
        { name: 'AQI', max: 300 },\r
        { name: 'PM2.5', max: 250 },\r
        { name: 'PM10', max: 300 },\r
        { name: 'CO', max: 5 },\r
        { name: 'NO2', max: 200 },\r
        { name: 'SO2', max: 100 }\r
      ],\r
      shape: 'circle',\r
      splitNumber: 5,\r
      axisName: {\r
        color: 'rgb(238, 197, 102)'\r
      },\r
      splitLine: {\r
        lineStyle: {\r
          color: [\r
            'rgba(238, 197, 102, 0.1)',\r
            'rgba(238, 197, 102, 0.2)',\r
            'rgba(238, 197, 102, 0.4)',\r
            'rgba(238, 197, 102, 0.6)',\r
            'rgba(238, 197, 102, 0.8)',\r
            'rgba(238, 197, 102, 1)'\r
          ].reverse()\r
        }\r
      },\r
      splitArea: {\r
        show: false\r
      },\r
      axisLine: {\r
        lineStyle: {\r
          color: 'rgba(238, 197, 102, 0.5)'\r
        }\r
      }\r
    },\r
    series: [\r
      {\r
        name: 'Beijing',\r
        type: 'radar',\r
        lineStyle: lineStyle,\r
        data: dataBJ,\r
        symbol: 'none',\r
        itemStyle: {\r
          color: '#F9713C'\r
        },\r
        areaStyle: {\r
          opacity: 0.1\r
        }\r
      },\r
      {\r
        name: 'Shanghai',\r
        type: 'radar',\r
        lineStyle: lineStyle,\r
        data: dataSH,\r
        symbol: 'none',\r
        itemStyle: {\r
          color: '#B3E4A1'\r
        },\r
        areaStyle: {\r
          opacity: 0.05\r
        }\r
      },\r
      {\r
        name: 'Guangzhou',\r
        type: 'radar',\r
        lineStyle: lineStyle,\r
        data: dataGZ,\r
        symbol: 'none',\r
        itemStyle: {\r
          color: 'rgb(238, 197, 102)'\r
        },\r
        areaStyle: {\r
          opacity: 0.05\r
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

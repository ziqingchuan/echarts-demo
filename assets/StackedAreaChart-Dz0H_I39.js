const r=`<template>\r
  <div class="chart-wrapper">\r
    <h2>堆叠面积图</h2>\r
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
      trigger: 'axis',\r
      axisPointer: {\r
        type: 'cross',\r
        label: {\r
          backgroundColor: '#6a7985'\r
        }\r
      }\r
    },\r
    legend: {\r
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']\r
    },\r
    toolbox: {\r
      feature: {\r
        saveAsImage: {}\r
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
        boundaryGap: false,\r
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\r
      }\r
    ],\r
    yAxis: [\r
      {\r
        type: 'value'\r
      }\r
    ],\r
    series: [\r
      {\r
        name: 'Email',\r
        type: 'line',\r
        stack: 'Total',\r
        areaStyle: {},\r
        emphasis: {\r
          focus: 'series'\r
        },\r
        data: [120, 132, 101, 134, 90, 230, 210]\r
      },\r
      {\r
        name: 'Union Ads',\r
        type: 'line',\r
        stack: 'Total',\r
        areaStyle: {},\r
        emphasis: {\r
          focus: 'series'\r
        },\r
        data: [220, 182, 191, 234, 290, 330, 310]\r
      },\r
      {\r
        name: 'Video Ads',\r
        type: 'line',\r
        stack: 'Total',\r
        areaStyle: {},\r
        emphasis: {\r
          focus: 'series'\r
        },\r
        data: [150, 232, 201, 154, 190, 330, 410]\r
      },\r
      {\r
        name: 'Direct',\r
        type: 'line',\r
        stack: 'Total',\r
        areaStyle: {},\r
        emphasis: {\r
          focus: 'series'\r
        },\r
        data: [320, 332, 301, 334, 390, 330, 320]\r
      },\r
      {\r
        name: 'Search Engine',\r
        type: 'line',\r
        stack: 'Total',\r
        label: {\r
          show: true,\r
          position: 'top'\r
        },\r
        areaStyle: {},\r
        emphasis: {\r
          focus: 'series'\r
        },\r
        data: [820, 932, 901, 934, 1290, 1330, 1320]\r
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

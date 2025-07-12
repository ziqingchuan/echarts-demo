const r=`<template>\r
  <div class="chart-wrapper">\r
    <h2>涟漪特效散点图</h2>\r
    <div ref="chart" class="chart"></div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref, onMounted, onBeforeUnmount } from 'vue';\r
import * as echarts from 'echarts';\r
import {effectScatterChartData} from "../../consts/data/effectScatterChart.ts";\r
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
    xAxis: {\r
      scale: true\r
    },\r
    yAxis: {\r
      scale: true\r
    },\r
    series: [\r
      {\r
        type: 'effectScatter',\r
        symbolSize: 20,\r
        data: [\r
          [172.7, 105.2],\r
          [153.4, 42]\r
        ]\r
      },\r
      {\r
        type: 'scatter',\r
        // prettier-ignore\r
        data: effectScatterChartData\r
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

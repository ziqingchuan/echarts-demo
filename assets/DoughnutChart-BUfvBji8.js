const r=`<template>\r
  <div class="chart-wrapper">\r
    <h2>环形图</h2>\r
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
    tooltip: {\r
      trigger: 'item'\r
    },\r
    legend: {\r
      top: '5%',\r
      left: 'center'\r
    },\r
    series: [\r
      {\r
        name: 'Access From',\r
        type: 'pie',\r
        radius: ['40%', '70%'],\r
        avoidLabelOverlap: false,\r
        padAngle: 3,  // 圆弧间隔\r
        itemStyle: {\r
          borderRadius: 10, // 圆角弧度\r
        },\r
        label: {\r
          show: false,\r
          position: 'center'\r
        },\r
        emphasis: {\r
          label: {\r
            show: true,\r
            fontSize: 40,\r
            fontWeight: 'bold'\r
          }\r
        },\r
        labelLine: {\r
          show: false\r
        },\r
        data: [\r
          { value: 1048, name: 'Search Engine' },\r
          { value: 735, name: 'Direct' },\r
          { value: 580, name: 'Email' },\r
          { value: 484, name: 'Union Ads' },\r
          { value: 300, name: 'Video Ads' }\r
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

const r=`<template>\r
  <div class="chart-wrapper">\r
    <h2>自定义纹理饼图</h2>\r
    <div ref="chart" class="chart"></div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref, onMounted, onBeforeUnmount } from 'vue';\r
import * as echarts from 'echarts';\r
import {bgPatternSrc, piePatternSrc} from "../../consts/data/textureonPieChart.ts";\r
\r
const chart = ref<HTMLElement | null>(null);\r
let myChart: echarts.ECharts | null = null;\r
\r
const handleResize = () => {\r
  myChart?.resize();\r
};\r
\r
const piePatternImg = new Image();\r
piePatternImg.src = piePatternSrc;\r
const bgPatternImg = new Image();\r
bgPatternImg.src = bgPatternSrc;\r
\r
onMounted(() => {\r
  if (!chart.value) return;\r
\r
  myChart = echarts.init(chart.value);\r
\r
  const option = {\r
    backgroundColor: {\r
      image: bgPatternImg,\r
      repeat: 'repeat'\r
    },\r
    series: [\r
      {\r
        name: 'pie',\r
        type: 'pie',\r
        selectedMode: 'single',\r
        selectedOffset: 30,\r
        clockwise: true,\r
        label: {\r
          fontSize: 18,\r
          color: '#235894'\r
        },\r
        labelLine: {\r
          lineStyle: {\r
            color: '#235894'\r
          }\r
        },\r
        data: [\r
          { value: 1048, name: 'Search Engine' },\r
          { value: 735, name: 'Direct' },\r
          { value: 580, name: 'Email' },\r
          { value: 484, name: 'Union Ads' },\r
          { value: 300, name: 'Video Ads' }\r
        ],\r
        itemStyle: {\r
          opacity: 0.7,\r
          color: {\r
            image: piePatternImg,\r
            repeat: 'repeat'\r
          },\r
          borderWidth: 3,\r
          borderColor: '#235894'\r
        }\r
      }\r
    ]\r
  };\r
\r
  // @ts-ignore\r
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

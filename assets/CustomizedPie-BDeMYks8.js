const n=`<template>\r
  <div class="chart-wrapper">\r
    <h2>自定义样式饼图</h2>\r
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
    backgroundColor: '#4b4b52',\r
\r
    tooltip: {\r
      trigger: 'item'\r
    },\r
\r
    visualMap: {\r
      show: false,\r
      min: 80,\r
      max: 600,\r
      inRange: {\r
        colorLightness: [0, 1]\r
      }\r
    },\r
    series: [\r
      {\r
        name: 'Access From',\r
        type: 'pie',\r
        radius: '55%',\r
        center: ['50%', '50%'],\r
        data: [\r
          { value: 335, name: 'Direct' },\r
          { value: 310, name: 'Email' },\r
          { value: 274, name: 'Union Ads' },\r
          { value: 235, name: 'Video Ads' },\r
          { value: 400, name: 'Search Engine' }\r
        ].sort(function (a, b) {\r
          return a.value - b.value;\r
        }),\r
        roseType: 'radius',\r
        label: {\r
          color: 'rgba(250,250,250,0.5)'\r
        },\r
        labelLine: {\r
          lineStyle: {\r
            color: 'rgba(250,250,250,0.5)'\r
          },\r
          smooth: 0.2,\r
          length: 10,\r
          length2: 20\r
        },\r
        itemStyle: {\r
          color: '#c23531',\r
          shadowBlur: 200,\r
          shadowColor: 'rgba(0, 0, 0, 0.5)'\r
        },\r
\r
        animationType: 'scale',\r
        animationEasing: 'elasticOut',\r
        animationDelay: function () {\r
          return Math.random() * 200;\r
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
</style>`;export{n as default};

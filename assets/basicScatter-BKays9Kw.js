const r=`<template>\r
  <div class="chart-wrapper">\r
    <h2>散点图示例</h2>\r
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
  // 生成模拟数据\r
  const data = [];\r
  for (let i = 0; i < 100; i++) {\r
    data.push([\r
      Math.random() * 100,\r
      Math.random() * 100,\r
      Math.floor(Math.random() * 50) + 10 // 气泡大小\r
    ]);\r
  }\r
\r
  const option = {\r
    tooltip: {\r
      position: 'top'\r
    },\r
    grid: {\r
      left: '3%',\r
      right: '7%',\r
      bottom: '7%',\r
      containLabel: true\r
    },\r
    xAxis: {\r
      type: 'value',\r
      scale: true\r
    },\r
    yAxis: {\r
      type: 'value',\r
      scale: true\r
    },\r
    series: [{\r
      name: '数据',\r
      type: 'scatter',\r
      data: data,\r
      itemStyle: {\r
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{\r
          offset: 0,\r
          color: 'rgb(251, 118, 123)'\r
        }, {\r
          offset: 1,\r
          color: 'rgb(204, 46, 72)'\r
        }])\r
      }\r
    }]\r
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

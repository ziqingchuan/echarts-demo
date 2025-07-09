const r=`<template>\r
  <div class="chart-wrapper">\r
    <h2>瀑布图</h2>\r
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
      axisPointer: {\r
        type: 'shadow'\r
      },\r
      formatter: function (params: any) {\r
        const tar = params[1];\r
        return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;\r
      }\r
    },\r
    grid: {\r
      left: '3%',\r
      right: '4%',\r
      bottom: '3%',\r
      containLabel: true\r
    },\r
    xAxis: {\r
      type: 'category',\r
      splitLine: { show: false },\r
      data: ['Utilities', 'Transportation', 'Meals', 'Other']\r
    },\r
    yAxis: {\r
      type: 'value'\r
    },\r
    series: [\r
      {\r
        name: 'Placeholder',\r
        type: 'bar',\r
        stack: 'Total',\r
        itemStyle: {\r
          borderColor: 'transparent',\r
          color: 'transparent'\r
        },\r
        emphasis: {\r
          itemStyle: {\r
            borderColor: 'transparent',\r
            color: 'transparent'\r
          }\r
        },\r
        data: [1400, 1200, 300, 0]\r
      },\r
      {\r
        name: 'Life Cost',\r
        type: 'bar',\r
        stack: 'Total',\r
        label: {\r
          show: true,\r
          position: 'inside'\r
        },\r
        data: [300, 200, 900, 300]\r
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

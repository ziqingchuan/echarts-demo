const r=`<template>\r
  <div class="chart-wrapper">\r
    <h2>堆叠折线图</h2>\r
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
      trigger: 'axis'\r
    },\r
    legend: {\r
      data: ['邮件营销', '联盟广告', '视频广告']\r
    },\r
    grid: {\r
      left: '3%',\r
      right: '4%',\r
      bottom: '3%',\r
      containLabel: true\r
    },\r
    xAxis: {\r
      type: 'category',\r
      boundaryGap: false,\r
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']\r
    },\r
    yAxis: {\r
      type: 'value'\r
    },\r
    series: [\r
      {\r
        name: '邮件营销',\r
        type: 'line',\r
        stack: '总量',\r
        data: [120, 132, 101, 134, 90, 230, 210],\r
        smooth: true,\r
        lineStyle: {\r
          width: 3\r
        }\r
      },\r
      {\r
        name: '联盟广告',\r
        type: 'line',\r
        stack: '总量',\r
        data: [220, 182, 191, 234, 290, 330, 310],\r
        smooth: true,\r
        lineStyle: {\r
          width: 3\r
        }\r
      },\r
      {\r
        name: '视频广告',\r
        type: 'line',\r
        stack: '总量',\r
        data: [150, 232, 201, 154, 190, 330, 410],\r
        smooth: true,\r
        lineStyle: {\r
          width: 3\r
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

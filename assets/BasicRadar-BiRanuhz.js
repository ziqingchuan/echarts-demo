const r=`<template>\r
  <div class="chart-wrapper">\r
    <h2>雷达图示例</h2>\r
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
    color: ['#FF6B6B'], // 主色调\r
    radar: {\r
      shape: 'polygon', // 多边形雷达图\r
      splitNumber: 4, // 同心圆分割段数\r
      radius: '65%', // 雷达图大小\r
      axisName: {\r
        color: '#999', // 指标文字颜色\r
        fontSize: 12,\r
        fontWeight: 'bold'\r
      },\r
      axisLine: {\r
        lineStyle: {\r
          color: 'rgba(200, 200, 200, 0.5)' // 坐标轴线颜色\r
        }\r
      },\r
      splitLine: {\r
        lineStyle: {\r
          color: 'rgba(200, 200, 200, 0.3)' // 分割线颜色\r
        }\r
      },\r
      splitArea: {\r
        show: true,\r
        areaStyle: {\r
          color: ['rgba(255, 255, 255, 0.1)', 'rgba(200, 200, 200, 0.1)'] // 背景交替色\r
        }\r
      },\r
      indicator: [\r
        { name: '内驱力', max: 110 },\r
        { name: '专注力', max: 110 },\r
        { name: '学习能力', max: 110 },\r
        { name: '沟通能力', max: 110 },\r
        { name: '执行力', max: 110 },\r
        { name: '理解能力', max: 110 },\r
        { name: '团队合作能力', max: 110 },\r
        { name: '抗压能力', max: 110 }\r
      ]\r
    },\r
    series: [\r
      {\r
        name: '能力评估',\r
        type: 'radar',\r
        symbol: 'circle', // 数据点形状\r
        symbolSize: 8, // 数据点大小\r
        lineStyle: {\r
          width: 3,\r
          color: '#FF6B6B' // 线条颜色\r
        },\r
        areaStyle: {\r
          color: new echarts.graphic.RadialGradient(0.5, 0.5, 0.8, [\r
            {\r
              offset: 0,\r
              color: 'rgba(255, 107, 107, 0.8)' // 渐变起始色\r
            },\r
            {\r
              offset: 1,\r
              color: 'rgba(255, 107, 107, 0.2)' // 渐变结束色\r
            }\r
          ])\r
        },\r
        data: [\r
          {\r
            value: [85, 95, 88, 80, 90, 84, 92, 75],\r
            name: '当前能力',\r
            label: {\r
              show: true,\r
              formatter: '{c}',\r
              color: '#999'\r
            }\r
          }\r
        ]\r
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

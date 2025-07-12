const r=`<template>\r
  <div class="chart-wrapper">\r
    <h2>数据聚合</h2>\r
    <div ref="chart" class="chart"></div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref, onMounted, onBeforeUnmount } from 'vue';\r
import * as echarts from 'echarts';\r
// @ts-ignore\r
import ecStat from 'echarts-stat';\r
import {clusteringChartData} from "../../consts/data/clusteringChart.ts";\r
\r
const chart = ref<HTMLElement | null>(null);\r
let myChart: echarts.ECharts | null = null;\r
\r
const handleResize = () => {\r
  myChart?.resize();\r
};\r
// @ts-ignore\r
echarts.registerTransform(ecStat.transform.clustering);\r
\r
const data = clusteringChartData;\r
\r
let CLUSTER_COUNT = 6;\r
let DIENSIION_CLUSTER_INDEX = 2;\r
let COLOR_ALL = [\r
  '#37A2DA',\r
  '#e06343',\r
  '#37a354',\r
  '#b55dba',\r
  '#b5bd48',\r
  '#8378EA',\r
  '#96BFFF'\r
];\r
let pieces = [];\r
for (let i = 0; i < CLUSTER_COUNT; i++) {\r
  pieces.push({\r
    value: i,\r
    label: 'cluster ' + i,\r
    color: COLOR_ALL[i]\r
  });\r
}\r
\r
onMounted(() => {\r
  if (!chart.value) return;\r
\r
  myChart = echarts.init(chart.value);\r
\r
  const option = {\r
    dataset: [\r
      {\r
        source: data\r
      },\r
      {\r
        transform: {\r
          type: 'ecStat:clustering',\r
          // print: true,\r
          config: {\r
            clusterCount: CLUSTER_COUNT,\r
            outputType: 'single',\r
            outputClusterIndexDimension: DIENSIION_CLUSTER_INDEX\r
          }\r
        }\r
      }\r
    ],\r
    tooltip: {\r
      position: 'top'\r
    },\r
    visualMap: {\r
      type: 'piecewise',\r
      top: 'middle',\r
      min: 0,\r
      max: CLUSTER_COUNT,\r
      left: 10,\r
      splitNumber: CLUSTER_COUNT,\r
      dimension: DIENSIION_CLUSTER_INDEX,\r
      pieces: pieces\r
    },\r
    grid: {\r
      left: 120\r
    },\r
    xAxis: {},\r
    yAxis: {},\r
    series: {\r
      type: 'scatter',\r
      encode: { tooltip: [0, 1] },\r
      symbolSize: 15,\r
      itemStyle: {\r
        borderColor: '#555'\r
      },\r
      datasetIndex: 1\r
    }\r
  };\r
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

const n=`<template>\r
  <div class="chart-wrapper">\r
    <h2>可拖拽点</h2>\r
    <div ref="chart" class="chart"></div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref, onMounted, onBeforeUnmount } from 'vue';\r
import * as echarts from 'echarts';\r
\r
const chart = ref<HTMLElement | null>(null);\r
let myChart: echarts.ECharts;\r
\r
const symbolSize = 15;\r
const data = [\r
  [40, -10],\r
  [-30, -5],\r
  [-76.5, 20],\r
  [-63.5, 40],\r
  [-22.1, 50]\r
];\r
\r
function updatePosition() {\r
  myChart.setOption({\r
    graphic: data.map(function (item, dataIndex) {\r
      return {\r
        position: myChart?.convertToPixel('grid', item)\r
      };\r
    })\r
  });\r
}\r
\r
function showTooltip(dataIndex: number) {\r
  myChart.dispatchAction({\r
    type: 'showTip',\r
    seriesIndex: 0,\r
    dataIndex: dataIndex\r
  });\r
}\r
\r
function hideTooltip(dataIndex: number) {\r
  myChart.dispatchAction({\r
    type: 'hideTip'\r
  });\r
}\r
\r
function onPointDragging(dataIndex: number, pos: number[]) {\r
  data[dataIndex] = myChart.convertFromPixel('grid', pos);\r
\r
  // Update data\r
  myChart.setOption({\r
    series: [\r
      {\r
        id: 'a',\r
        data: data\r
      }\r
    ]\r
  });\r
}\r
\r
onMounted(() => {\r
  if (!chart.value) return;\r
\r
  myChart = echarts.init(chart.value);\r
\r
  const option = {\r
    tooltip: {\r
      triggerOn: 'none',\r
      formatter: function (params: any) {\r
        return (\r
            'X: ' +\r
            params.data[0].toFixed(2) +\r
            '<br>Y: ' +\r
            params.data[1].toFixed(2)\r
        );\r
      }\r
    },\r
    grid: {\r
      top: '8%',\r
      bottom: '12%'\r
    },\r
    xAxis: {\r
      min: -100,\r
      max: 70,\r
      type: 'value',\r
      axisLine: { onZero: false }\r
    },\r
    yAxis: {\r
      min: -30,\r
      max: 60,\r
      type: 'value',\r
      axisLine: { onZero: false }\r
    },\r
    dataZoom: [\r
      {\r
        type: 'slider',\r
        xAxisIndex: 0,\r
        filterMode: 'none'\r
      },\r
      {\r
        type: 'slider',\r
        yAxisIndex: 0,\r
        filterMode: 'none'\r
      },\r
      {\r
        type: 'inside',\r
        xAxisIndex: 0,\r
        filterMode: 'none'\r
      },\r
      {\r
        type: 'inside',\r
        yAxisIndex: 0,\r
        filterMode: 'none'\r
      }\r
    ],\r
    series: [\r
      {\r
        id: 'a',\r
        type: 'line',\r
        smooth: true,\r
        symbolSize: symbolSize,\r
        data: data\r
      }\r
    ]\r
  };\r
\r
  setTimeout(function () {\r
    // Add shadow circles (which is not visible) to enable drag.\r
    myChart.setOption({\r
      graphic: data.map(function (item, dataIndex) {\r
        return {\r
          type: 'circle',\r
          position: myChart.convertToPixel('grid', item),\r
          shape: {\r
            cx: 0,\r
            cy: 0,\r
            r: symbolSize / 2\r
          },\r
          invisible: true,\r
          draggable: true,\r
          ondrag: function (dx: number, dy: number) {\r
            onPointDragging(dataIndex, [(this as any).x, (this as any).y]);\r
          },\r
          onmousemove: function () {\r
            showTooltip(dataIndex);\r
          },\r
          onmouseout: function () {\r
            hideTooltip(dataIndex);\r
          },\r
          z: 100\r
        };\r
      })\r
    });\r
  }, 0);\r
\r
  window.addEventListener('resize', updatePosition);\r
  myChart.on('dataZoom', updatePosition);\r
  myChart.setOption(option);\r
});\r
\r
onBeforeUnmount(() => {\r
  if (myChart) {\r
    window.removeEventListener('resize', updatePosition);\r
    myChart.dispose();\r
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

const r=`<template>\r
  <div class="chart-wrapper">\r
    <h2>联动与共享数据集</h2>\r
    <div ref="chart" class="chart"></div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref, onMounted, onBeforeUnmount } from 'vue';\r
import * as echarts from 'echarts';\r
type EChartsOption = echarts.EChartsOption;\r
\r
const chart = ref<HTMLElement | null>(null);\r
let myChart: echarts.ECharts | null = null;\r
let option: EChartsOption;\r
const handleResize = () => {\r
  myChart?.resize();\r
};\r
\r
onMounted(() => {\r
  if (!chart.value) return;\r
\r
  setTimeout(function () {\r
    myChart = echarts.init(chart.value);\r
    option = {\r
      legend: {},\r
      tooltip: {\r
        trigger: 'axis',\r
        showContent: false\r
      },\r
      dataset: {\r
        source: [\r
          ['product', '2012', '2013', '2014', '2015', '2016', '2017'],\r
          ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],\r
          ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],\r
          ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],\r
          ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1]\r
        ]\r
      },\r
      xAxis: { type: 'category' },\r
      yAxis: { gridIndex: 0 },\r
      grid: { top: '55%' },\r
      series: [\r
        {\r
          type: 'line',\r
          smooth: true,\r
          seriesLayoutBy: 'row',\r
          emphasis: { focus: 'series' }\r
        },\r
        {\r
          type: 'line',\r
          smooth: true,\r
          seriesLayoutBy: 'row',\r
          emphasis: { focus: 'series' }\r
        },\r
        {\r
          type: 'line',\r
          smooth: true,\r
          seriesLayoutBy: 'row',\r
          emphasis: { focus: 'series' }\r
        },\r
        {\r
          type: 'line',\r
          smooth: true,\r
          seriesLayoutBy: 'row',\r
          emphasis: { focus: 'series' }\r
        },\r
        {\r
          type: 'pie',\r
          id: 'pie',\r
          radius: '30%',\r
          center: ['50%', '25%'],\r
          emphasis: {\r
            focus: 'self'\r
          },\r
          label: {\r
            formatter: '{b}: {@2012} ({d}%)'\r
          },\r
          encode: {\r
            itemName: 'product',\r
            value: '2012',\r
            tooltip: '2012'\r
          }\r
        }\r
      ]\r
    };\r
\r
    myChart.on('updateAxisPointer', function (event: any) {\r
      const xAxisInfo = event.axesInfo[0];\r
      if (xAxisInfo) {\r
        const dimension = xAxisInfo.value + 1;\r
        myChart?.setOption<echarts.EChartsOption>({\r
          series: {\r
            id: 'pie',\r
            label: {\r
              formatter: '{b}: {@[' + dimension + ']} ({d}%)'\r
            },\r
            encode: {\r
              value: dimension,\r
              tooltip: dimension\r
            }\r
          }\r
        });\r
      }\r
    });\r
    // @ts-ignore\r
    myChart.setOption<echarts.EChartsOption>(option);\r
  });\r
\r
\r
  myChart?.setOption(option);\r
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

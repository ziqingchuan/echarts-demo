<template>
  <div class="chart-wrapper">
    <h2>可点击的柱状图</h2>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';
import {clickableColumnChartDataAxis, clickableColumnChartData} from "../../consts/data/clickableColumnChart.ts";

const chart = ref<HTMLElement | null>(null);
let myChart: echarts.ECharts | null = null;

const handleResize = () => {
  myChart?.resize();
};

onMounted(() => {
  if (!chart.value) return;

  myChart = echarts.init(chart.value);

  let yMax = 500;
  let dataShadow = [];

  for (let i = 0; i < clickableColumnChartData.length; i++) {
    dataShadow.push(yMax);
  }

  const option = {
    xAxis: {
      data: clickableColumnChartDataAxis,
      axisLabel: {
        inside: true,
        color: '#fff'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#999'
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    series: [
      {
        type: 'bar',
        showBackground: true,
        data: clickableColumnChartData
      }
    ]
  };

  myChart.setOption(option);
  window.addEventListener('resize', handleResize);

  // Enable data zoom when user click bar.
  const zoomSize = 6;
  myChart.on('click', function (params) {
    console.log(clickableColumnChartDataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
    myChart?.dispatchAction({
      type: 'dataZoom',
      startValue: clickableColumnChartDataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
      endValue:
          clickableColumnChartDataAxis[Math.min(params.dataIndex + zoomSize / 2, clickableColumnChartData.length - 1)]
    });
  });
});

onBeforeUnmount(() => {
  if (myChart) {
    window.removeEventListener('resize', handleResize);
    myChart.dispose();
    myChart = null;
  }
});
</script>

<style scoped>
.chart {
  width: 100%;
  height: 500px;
}
</style>
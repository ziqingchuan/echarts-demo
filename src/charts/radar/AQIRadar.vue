<template>
  <div class="chart-wrapper">
    <h2>AQI 雷达图</h2>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';
import {lineStyle, dataBJ, dataGZ, dataSH} from "../../consts/data/AQIRadar.ts";

const chart = ref<HTMLElement | null>(null);
let myChart: echarts.ECharts | null = null;

const handleResize = () => {
  myChart?.resize();
};

onMounted(() => {
  if (!chart.value) return;

  myChart = echarts.init(chart.value);

  const option = {
    backgroundColor: 'rgba(22,22,39,0.86)',
    legend: {
      bottom: 5,
      data: ['Beijing', 'Shanghai', 'Guangzhou'],
      itemGap: 20,
      textStyle: {
        color: '#fff',
        fontSize: 14
      },
      selectedMode: 'single'
    },
    radar: {
      indicator: [
        { name: 'AQI', max: 300 },
        { name: 'PM2.5', max: 250 },
        { name: 'PM10', max: 300 },
        { name: 'CO', max: 5 },
        { name: 'NO2', max: 200 },
        { name: 'SO2', max: 100 }
      ],
      shape: 'circle',
      splitNumber: 5,
      axisName: {
        color: 'rgb(238, 197, 102)'
      },
      splitLine: {
        lineStyle: {
          color: [
            'rgba(238, 197, 102, 0.1)',
            'rgba(238, 197, 102, 0.2)',
            'rgba(238, 197, 102, 0.4)',
            'rgba(238, 197, 102, 0.6)',
            'rgba(238, 197, 102, 0.8)',
            'rgba(238, 197, 102, 1)'
          ].reverse()
        }
      },
      splitArea: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(238, 197, 102, 0.5)'
        }
      }
    },
    series: [
      {
        name: 'Beijing',
        type: 'radar',
        lineStyle: lineStyle,
        data: dataBJ,
        symbol: 'none',
        itemStyle: {
          color: '#F9713C'
        },
        areaStyle: {
          opacity: 0.1
        }
      },
      {
        name: 'Shanghai',
        type: 'radar',
        lineStyle: lineStyle,
        data: dataSH,
        symbol: 'none',
        itemStyle: {
          color: '#B3E4A1'
        },
        areaStyle: {
          opacity: 0.05
        }
      },
      {
        name: 'Guangzhou',
        type: 'radar',
        lineStyle: lineStyle,
        data: dataGZ,
        symbol: 'none',
        itemStyle: {
          color: 'rgb(238, 197, 102)'
        },
        areaStyle: {
          opacity: 0.05
        }
      }
    ]
  };

  myChart.setOption(option);
  window.addEventListener('resize', handleResize);
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
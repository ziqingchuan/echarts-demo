<template>
  <div class="chart-wrapper">
    <h2>散点图聚合为柱状图</h2>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';
import {
  AggregateScatterToBar_femaleData,
  AggregateScatterToBar_maleData
} from "../../consts/data/AggregateScatterToBar.ts";

const chart = ref<HTMLElement | null>(null);
let myChart: echarts.ECharts | null = null;
let option: echarts.EChartsOption;
const handleResize = () => {
  myChart?.resize();
};

onMounted(() => {
  if (!chart.value) return;

  myChart = echarts.init(chart.value);

  const femaleData = AggregateScatterToBar_femaleData;

  const maleDeta = AggregateScatterToBar_maleData;

  function calculateAverage(data: number[][], dim: number) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data[i][dim];
    }
    return (total / data.length);
  }

  const scatterOption: echarts.EChartsOption = (option = {
    xAxis: {
      scale: true
    },
    yAxis: {
      scale: true
    },
    series: [
      {
        type: 'scatter',
        id: 'female',
        dataGroupId: 'female',
        universalTransition: {
          enabled: true,
          delay: function () {
            return Math.random() * 400;
          }
        },
        data: femaleData
      },
      {
        type: 'scatter',
        id: 'male',
        dataGroupId: 'male',
        universalTransition: {
          enabled: true,
          delay: function () {
            return Math.random() * 400;
          }
        },
        data: maleDeta
      }
    ]
  });

  const barOption: echarts.EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Female', 'Male']
    },
    yAxis: {},
    series: [
      {
        type: 'bar',
        id: 'total',
        data: [
          {
            value: calculateAverage(maleDeta, 0),
            groupId: 'male'
          },
          {
            value: calculateAverage(femaleData, 0),
            groupId: 'female'
          }
        ],
        universalTransition: {
          enabled: true,
          seriesKey: ['female', 'male'],
          delay: function () {
            return Math.random() * 400;
          }
        }
      }
    ]
  };

  let currentOption = scatterOption;

  setInterval(function () {
    currentOption = currentOption === scatterOption ? barOption : scatterOption;
    myChart?.setOption(currentOption, true);
  }, 2000);

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
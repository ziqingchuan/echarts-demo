<template>
  <div class="chart-wrapper">
    <h2>数据聚合</h2>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';
// @ts-ignore
import ecStat from 'echarts-stat';
import {clusteringChartData} from "../../consts/data/clusteringChart.ts";

const chart = ref<HTMLElement | null>(null);
let myChart: echarts.ECharts | null = null;

const handleResize = () => {
  myChart?.resize();
};
// @ts-ignore
echarts.registerTransform(ecStat.transform.clustering);

const data = clusteringChartData;

let CLUSTER_COUNT = 6;
let DIENSIION_CLUSTER_INDEX = 2;
let COLOR_ALL = [
  '#37A2DA',
  '#e06343',
  '#37a354',
  '#b55dba',
  '#b5bd48',
  '#8378EA',
  '#96BFFF'
];
let pieces = [];
for (let i = 0; i < CLUSTER_COUNT; i++) {
  pieces.push({
    value: i,
    label: 'cluster ' + i,
    color: COLOR_ALL[i]
  });
}

onMounted(() => {
  if (!chart.value) return;

  myChart = echarts.init(chart.value);

  const option = {
    dataset: [
      {
        source: data
      },
      {
        transform: {
          type: 'ecStat:clustering',
          // print: true,
          config: {
            clusterCount: CLUSTER_COUNT,
            outputType: 'single',
            outputClusterIndexDimension: DIENSIION_CLUSTER_INDEX
          }
        }
      }
    ],
    tooltip: {
      position: 'top'
    },
    visualMap: {
      type: 'piecewise',
      top: 'middle',
      min: 0,
      max: CLUSTER_COUNT,
      left: 10,
      splitNumber: CLUSTER_COUNT,
      dimension: DIENSIION_CLUSTER_INDEX,
      pieces: pieces
    },
    grid: {
      left: 120
    },
    xAxis: {},
    yAxis: {},
    series: {
      type: 'scatter',
      encode: { tooltip: [0, 1] },
      symbolSize: 15,
      itemStyle: {
        borderColor: '#555'
      },
      datasetIndex: 1
    }
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
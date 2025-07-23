<template>
  <div class="chart-wrapper">
    <h2>单轴散点图</h2>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';
import {ScatterOnSingleAxisData} from "../../consts/data/ScatterOnSingleAxis.ts";

const chart = ref<HTMLElement | null>(null);
let myChart: echarts.ECharts | null = null;

const handleResize = () => {
  myChart?.resize();
};

onMounted(() => {
  if (!chart.value) return;

  myChart = echarts.init(chart.value);

// prettier-ignore
  const hours = [
    '12a', '1a', '2a', '3a', '4a', '5a', '6a',
    '7a', '8a', '9a','10a','11a',
    '12p', '1p', '2p', '3p', '4p', '5p',
    '6p', '7p', '8p', '9p', '10p', '11p'
  ];

// prettier-ignore
  const days = [
    'Saturday', 'Friday', 'Thursday',
    'Wednesday', 'Tuesday', 'Monday', 'Sunday'
  ];

// prettier-ignore
const data = ScatterOnSingleAxisData;
  const title: echarts.TitleComponentOption[] = [];
  const singleAxis: echarts.SingleAxisComponentOption[] = [];
  const series: echarts.ScatterSeriesOption[] = [];

  days.forEach(function (day, idx) {
    title.push({
      textBaseline: 'middle',
      top: ((idx + 0.5) * 100) / 7 + '%',
      text: day
    });
    singleAxis.push({
      left: 150,
      type: 'category',
      boundaryGap: false,
      data: hours,
      top: (idx * 100) / 7 + 5 + '%',
      height: 100 / 7 - 10 + '%',
      axisLabel: {
        interval: 2
      }
    });
    series.push({
      singleAxisIndex: idx,
      coordinateSystem: 'singleAxis',
      type: 'scatter',
      data: [],
      symbolSize: function (dataItem) {
        return dataItem[1] * 4;
      }
    });
  });

  data.forEach(function (dataItem) {
    (series as any)[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
  });

  const option = {
    tooltip: {
      position: 'top'
    },
    title: title,
    singleAxis: singleAxis,
    series: series
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
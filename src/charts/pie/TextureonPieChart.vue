<template>
  <div class="chart-wrapper">
    <h2>自定义纹理饼图</h2>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';
import {bgPatternSrc, piePatternSrc} from "../../consts/data/textureonPieChart.ts";

const chart = ref<HTMLElement | null>(null);
let myChart: echarts.ECharts | null = null;

const handleResize = () => {
  myChart?.resize();
};

const piePatternImg = new Image();
piePatternImg.src = piePatternSrc;
const bgPatternImg = new Image();
bgPatternImg.src = bgPatternSrc;

onMounted(() => {
  if (!chart.value) return;

  myChart = echarts.init(chart.value);

  const option = {
    backgroundColor: {
      image: bgPatternImg,
      repeat: 'repeat'
    },
    series: [
      {
        name: 'pie',
        type: 'pie',
        selectedMode: 'single',
        selectedOffset: 30,
        clockwise: true,
        label: {
          fontSize: 18,
          color: '#235894'
        },
        labelLine: {
          lineStyle: {
            color: '#235894'
          }
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        itemStyle: {
          opacity: 0.7,
          color: {
            image: piePatternImg,
            repeat: 'repeat'
          },
          borderWidth: 3,
          borderColor: '#235894'
        }
      }
    ]
  };

  // @ts-ignore
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
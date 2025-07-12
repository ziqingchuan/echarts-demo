<template>
  <div class="chart-wrapper">
    <h2>自定义样式饼图</h2>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';

const chart = ref<HTMLElement | null>(null);
let myChart: echarts.ECharts | null = null;

const handleResize = () => {
  myChart?.resize();
};

onMounted(() => {
  if (!chart.value) return;

  myChart = echarts.init(chart.value);

  const option = {
    backgroundColor: '#4b4b52',

    tooltip: {
      trigger: 'item'
    },

    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
          { value: 335, name: 'Direct' },
          { value: 310, name: 'Email' },
          { value: 274, name: 'Union Ads' },
          { value: 235, name: 'Video Ads' },
          { value: 400, name: 'Search Engine' }
        ].sort(function (a, b) {
          return a.value - b.value;
        }),
        roseType: 'radius',
        label: {
          color: 'rgba(250,250,250,0.5)'
        },
        labelLine: {
          lineStyle: {
            color: 'rgba(250,250,250,0.5)'
          },
          smooth: 0.2,
          length: 10,
          length2: 20
        },
        itemStyle: {
          color: '#c23531',
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },

        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function () {
          return Math.random() * 200;
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
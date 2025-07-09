<template>
  <div class="chart-wrapper">
    <h2>雷达图示例</h2>
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
    color: ['#FF6B6B'], // 主色调
    radar: {
      shape: 'polygon', // 多边形雷达图
      splitNumber: 4, // 同心圆分割段数
      radius: '65%', // 雷达图大小
      axisName: {
        color: '#999', // 指标文字颜色
        fontSize: 12,
        fontWeight: 'bold'
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(200, 200, 200, 0.5)' // 坐标轴线颜色
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(200, 200, 200, 0.3)' // 分割线颜色
        }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ['rgba(255, 255, 255, 0.1)', 'rgba(200, 200, 200, 0.1)'] // 背景交替色
        }
      },
      indicator: [
        { name: '内驱力', max: 110 },
        { name: '专注力', max: 110 },
        { name: '学习能力', max: 110 },
        { name: '沟通能力', max: 110 },
        { name: '执行力', max: 110 },
        { name: '理解能力', max: 110 },
        { name: '团队合作能力', max: 110 },
        { name: '抗压能力', max: 110 }
      ]
    },
    series: [
      {
        name: '能力评估',
        type: 'radar',
        symbol: 'circle', // 数据点形状
        symbolSize: 8, // 数据点大小
        lineStyle: {
          width: 3,
          color: '#FF6B6B' // 线条颜色
        },
        areaStyle: {
          color: new echarts.graphic.RadialGradient(0.5, 0.5, 0.8, [
            {
              offset: 0,
              color: 'rgba(255, 107, 107, 0.8)' // 渐变起始色
            },
            {
              offset: 1,
              color: 'rgba(255, 107, 107, 0.2)' // 渐变结束色
            }
          ])
        },
        data: [
          {
            value: [85, 95, 88, 80, 90, 84, 92, 75],
            name: '当前能力',
            label: {
              show: true,
              formatter: '{c}',
              color: '#999'
            }
          }
        ]
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
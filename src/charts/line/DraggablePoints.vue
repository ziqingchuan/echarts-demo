<template>
  <div class="chart-wrapper">
    <h2>可拖拽点</h2>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';

const chart = ref<HTMLElement | null>(null);
let myChart: echarts.ECharts;

const symbolSize = 15;
const data = [
  [40, -10],
  [-30, -5],
  [-76.5, 20],
  [-63.5, 40],
  [-22.1, 50]
];

function updatePosition() {
  myChart.setOption({
    graphic: data.map(function (item, dataIndex) {
      return {
        position: myChart?.convertToPixel('grid', item)
      };
    })
  });
}

function showTooltip(dataIndex: number) {
  myChart.dispatchAction({
    type: 'showTip',
    seriesIndex: 0,
    dataIndex: dataIndex
  });
}

function hideTooltip(dataIndex: number) {
  myChart.dispatchAction({
    type: 'hideTip'
  });
}

function onPointDragging(dataIndex: number, pos: number[]) {
  data[dataIndex] = myChart.convertFromPixel('grid', pos);

  // Update data
  myChart.setOption({
    series: [
      {
        id: 'a',
        data: data
      }
    ]
  });
}

onMounted(() => {
  if (!chart.value) return;

  myChart = echarts.init(chart.value);

  const option = {
    tooltip: {
      triggerOn: 'none',
      formatter: function (params: any) {
        return (
            'X: ' +
            params.data[0].toFixed(2) +
            '<br>Y: ' +
            params.data[1].toFixed(2)
        );
      }
    },
    grid: {
      top: '8%',
      bottom: '12%'
    },
    xAxis: {
      min: -100,
      max: 70,
      type: 'value',
      axisLine: { onZero: false }
    },
    yAxis: {
      min: -30,
      max: 60,
      type: 'value',
      axisLine: { onZero: false }
    },
    dataZoom: [
      {
        type: 'slider',
        xAxisIndex: 0,
        filterMode: 'none'
      },
      {
        type: 'slider',
        yAxisIndex: 0,
        filterMode: 'none'
      },
      {
        type: 'inside',
        xAxisIndex: 0,
        filterMode: 'none'
      },
      {
        type: 'inside',
        yAxisIndex: 0,
        filterMode: 'none'
      }
    ],
    series: [
      {
        id: 'a',
        type: 'line',
        smooth: true,
        symbolSize: symbolSize,
        data: data
      }
    ]
  };

  setTimeout(function () {
    // Add shadow circles (which is not visible) to enable drag.
    myChart.setOption({
      graphic: data.map(function (item, dataIndex) {
        return {
          type: 'circle',
          position: myChart.convertToPixel('grid', item),
          shape: {
            cx: 0,
            cy: 0,
            r: symbolSize / 2
          },
          invisible: true,
          draggable: true,
          ondrag: function (dx: number, dy: number) {
            onPointDragging(dataIndex, [(this as any).x, (this as any).y]);
          },
          onmousemove: function () {
            showTooltip(dataIndex);
          },
          onmouseout: function () {
            hideTooltip(dataIndex);
          },
          z: 100
        };
      })
    });
  }, 0);

  window.addEventListener('resize', updatePosition);
  myChart.on('dataZoom', updatePosition);
  myChart.setOption(option);
});

onBeforeUnmount(() => {
  if (myChart) {
    window.removeEventListener('resize', updatePosition);
    myChart.dispose();
  }
});
</script>

<style scoped>
.chart {
  width: 100%;
  height: 500px;
}
</style>
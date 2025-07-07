export const basicScatter = "<template>\n" +
    "  <div class=\"chart-wrapper\">\n" +
    "    <h2>散点图示例</h2>\n" +
    "    <div ref=\"chart\" class=\"chart\"></div>\n" +
    "  </div>\n" +
    "</template>\n" +
    "\n" +
    "<script setup lang=\"ts\">\n" +
    "import { ref, onMounted, onBeforeUnmount } from 'vue';\n" +
    "import * as echarts from 'echarts';\n" +
    "\n" +
    "const chart = ref<HTMLElement | null>(null);\n" +
    "const myChart = ref<echarts.ECharts | null>(null);\n" +
    "\n" +
    "const handleResize = () => {\n" +
    "  myChart.value?.resize();\n" +
    "};\n" +
    "\n" +
    "onMounted(() => {\n" +
    "  if (!chart.value) return;\n" +
    "\n" +
    "  myChart.value = echarts.init(chart.value);\n" +
    "\n" +
    "  // 生成模拟数据\n" +
    "  const data = [];\n" +
    "  for (let i = 0; i < 100; i++) {\n" +
    "    data.push([\n" +
    "      Math.random() * 100,\n" +
    "      Math.random() * 100,\n" +
    "      Math.floor(Math.random() * 50) + 10 // 气泡大小\n" +
    "    ]);\n" +
    "  }\n" +
    "\n" +
    "  const option = {\n" +
    "    tooltip: {\n" +
    "      position: 'top'\n" +
    "    },\n" +
    "    grid: {\n" +
    "      left: '3%',\n" +
    "      right: '7%',\n" +
    "      bottom: '7%',\n" +
    "      containLabel: true\n" +
    "    },\n" +
    "    xAxis: {\n" +
    "      type: 'value',\n" +
    "      scale: true\n" +
    "    },\n" +
    "    yAxis: {\n" +
    "      type: 'value',\n" +
    "      scale: true\n" +
    "    },\n" +
    "    series: [{\n" +
    "      name: '数据',\n" +
    "      type: 'scatter',\n" +
    "      data: data,\n" +
    "      itemStyle: {\n" +
    "        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{\n" +
    "          offset: 0,\n" +
    "          color: 'rgb(251, 118, 123)'\n" +
    "        }, {\n" +
    "          offset: 1,\n" +
    "          color: 'rgb(204, 46, 72)'\n" +
    "        }])\n" +
    "      }\n" +
    "    }]\n" +
    "  };\n" +
    "\n" +
    "  myChart.value.setOption(option);\n" +
    "  window.addEventListener('resize', handleResize);\n" +
    "});\n" +
    "\n" +
    "onBeforeUnmount(() => {\n" +
    "  if (myChart.value) {\n" +
    "    window.removeEventListener('resize', handleResize);\n" +
    "    myChart.value.dispose();\n" +
    "    myChart.value = null;\n" +
    "  }\n" +
    "});\n" +
    "</script>\n" +
    "\n" +
    "<style scoped>\n" +
    ".chart {\n" +
    "  width: 100%;\n" +
    "  height: 500px;\n" +
    "}\n" +
    "</style>"
export const basicBar = "<template>\n" +
    "  <div class=\"chart-wrapper\">\n" +
    "    <h2>柱状图示例</h2>\n" +
    "    <div ref=\"chart\" class=\"chart\"></div>\n" +
    "  </div>\n" +
    "</template>\n" +
    "\n" +
    "<script setup lang=\"ts\">\n" +
    "import { ref, onMounted, onBeforeUnmount } from 'vue';\n" +
    "import * as echarts from 'echarts';\n" +
    "\n" +
    "const chart = ref<HTMLElement | null>(null);\n" +
    "let myChart: echarts.ECharts | null = null;\n" +
    "\n" +
    "const handleResize = () => {\n" +
    "  myChart?.resize();\n" +
    "};\n" +
    "\n" +
    "onMounted(() => {\n" +
    "  if (!chart.value) return;\n" +
    "\n" +
    "  myChart = echarts.init(chart.value);\n" +
    "  const option = {\n" +
    "    tooltip: {\n" +
    "      trigger: 'axis',\n" +
    "      axisPointer: { type: 'shadow' }\n" +
    "    },\n" +
    "    grid: {\n" +
    "      left: '3%',\n" +
    "      right: '4%',\n" +
    "      bottom: '3%',\n" +
    "      containLabel: true\n" +
    "    },\n" +
    "    xAxis: {\n" +
    "      type: 'category',\n" +
    "      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']\n" +
    "    },\n" +
    "    yAxis: {\n" +
    "      type: 'value'\n" +
    "    },\n" +
    "    series: [\n" +
    "      {\n" +
    "        name: '销量',\n" +
    "        type: 'bar',\n" +
    "        data: [120, 200, 150, 80, 70, 110],\n" +
    "        itemStyle: {\n" +
    "          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [\n" +
    "            { offset: 0, color: '#83bff6' },\n" +
    "            { offset: 1, color: '#188df0' }\n" +
    "          ])\n" +
    "        }\n" +
    "      }\n" +
    "    ]\n" +
    "  };\n" +
    "\n" +
    "  myChart.setOption(option);\n" +
    "  window.addEventListener('resize', handleResize);\n" +
    "});\n" +
    "\n" +
    "onBeforeUnmount(() => {\n" +
    "  if (myChart) {\n" +
    "    window.removeEventListener('resize', handleResize);\n" +
    "    myChart.dispose();\n" +
    "    myChart = null;\n" +
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
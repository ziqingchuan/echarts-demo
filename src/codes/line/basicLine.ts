export const basicLine = "<template>\n" +
    "  <div class=\"chart-wrapper\">\n" +
    "    <h2>折线图示例</h2>\n" +
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
    "\n" +
    "  const option = {\n" +
    "    xAxis: {\n" +
    "      type: 'category',\n" +
    "      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\n" +
    "    },\n" +
    "    yAxis: {\n" +
    "      type: 'value'\n" +
    "    },\n" +
    "    series: [\n" +
    "      {\n" +
    "        data: [150, 230, 224, 218, 135, 147, 260],\n" +
    "        type: 'line'\n" +
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
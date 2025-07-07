export const basicPie = "<template>\n" +
    "  <div class=\"chart-wrapper\">\n" +
    "    <h2>饼图示例</h2>\n" +
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
    "  const option = {\n" +
    "\n" +
    "    tooltip: {\n" +
    "      trigger: 'item'\n" +
    "    },\n" +
    "    legend: {\n" +
    "      orient: 'vertical',\n" +
    "      left: 'left'\n" +
    "    },\n" +
    "    series: [\n" +
    "      {\n" +
    "        name: 'Access From',\n" +
    "        type: 'pie',\n" +
    "        radius: '50%',\n" +
    "        data: [\n" +
    "          { value: 1048, name: 'Search Engine' },\n" +
    "          { value: 735, name: 'Direct' },\n" +
    "          { value: 580, name: 'Email' },\n" +
    "          { value: 484, name: 'Union Ads' },\n" +
    "          { value: 300, name: 'Video Ads' }\n" +
    "        ],\n" +
    "        emphasis: {\n" +
    "          itemStyle: {\n" +
    "            shadowBlur: 10,\n" +
    "            shadowOffsetX: 0,\n" +
    "            shadowColor: 'rgba(0, 0, 0, 0.5)'\n" +
    "          }\n" +
    "        }\n" +
    "      }\n" +
    "    ]\n" +
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
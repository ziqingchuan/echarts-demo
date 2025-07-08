export const axisAlignwithTick = "const option = {\n" +
    "    tooltip: {\n" +
    "      trigger: 'axis',\n" +
    "      axisPointer: {\n" +
    "        type: 'shadow'\n" +
    "      }\n" +
    "    },\n" +
    "    grid: {\n" +
    "      left: '3%',\n" +
    "      right: '4%',\n" +
    "      bottom: '3%',\n" +
    "      containLabel: true\n" +
    "    },\n" +
    "    xAxis: [\n" +
    "      {\n" +
    "        type: 'category',\n" +
    "        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],\n" +
    "        axisTick: {\n" +
    "          alignWithLabel: true\n" +
    "        }\n" +
    "      }\n" +
    "    ],\n" +
    "    yAxis: [\n" +
    "      {\n" +
    "        type: 'value'\n" +
    "      }\n" +
    "    ],\n" +
    "    series: [\n" +
    "      {\n" +
    "        name: 'Direct',\n" +
    "        type: 'bar',\n" +
    "        barWidth: '60%',\n" +
    "        data: [10, 52, 200, 334, 390, 330, 220]\n" +
    "      }\n" +
    "    ]\n" +
    "  };\n"
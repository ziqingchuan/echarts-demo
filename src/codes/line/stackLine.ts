export const stackLine = "const option = {\n" +
    "    tooltip: {\n" +
    "      trigger: 'axis'\n" +
    "    },\n" +
    "    legend: {\n" +
    "      data: ['邮件营销', '联盟广告', '视频广告']\n" +
    "    },\n" +
    "    grid: {\n" +
    "      left: '3%',\n" +
    "      right: '4%',\n" +
    "      bottom: '3%',\n" +
    "      containLabel: true\n" +
    "    },\n" +
    "    xAxis: {\n" +
    "      type: 'category',\n" +
    "      boundaryGap: false,\n" +
    "      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']\n" +
    "    },\n" +
    "    yAxis: {\n" +
    "      type: 'value'\n" +
    "    },\n" +
    "    series: [\n" +
    "      {\n" +
    "        name: '邮件营销',\n" +
    "        type: 'line',\n" +
    "        stack: '总量',\n" +
    "        data: [120, 132, 101, 134, 90, 230, 210],\n" +
    "        smooth: true,\n" +
    "        lineStyle: {\n" +
    "          width: 3\n" +
    "        }\n" +
    "      },\n" +
    "      {\n" +
    "        name: '联盟广告',\n" +
    "        type: 'line',\n" +
    "        stack: '总量',\n" +
    "        data: [220, 182, 191, 234, 290, 330, 310],\n" +
    "        smooth: true,\n" +
    "        lineStyle: {\n" +
    "          width: 3\n" +
    "        }\n" +
    "      },\n" +
    "      {\n" +
    "        name: '视频广告',\n" +
    "        type: 'line',\n" +
    "        stack: '总量',\n" +
    "        data: [150, 232, 201, 154, 190, 330, 410],\n" +
    "        smooth: true,\n" +
    "        lineStyle: {\n" +
    "          width: 3\n" +
    "        }\n" +
    "      }\n" +
    "    ]\n" +
    "  };"
import type { Component } from "vue";

import BasicBar from "../charts/bar/BasicBar.vue";
import AxisAlignwithTick from "../charts/bar/AxisAlignwithTick.vue";

import BasicLine from "../charts/line/BasicLine.vue";
import StackLine from "../charts/line/StackLine.vue";
import StackedAreaChart from "../charts/line/StackedAreaChart.vue";
import FunctionPlot from "../charts/line/FunctionPlot.vue";


import BasicScatter from "../charts/scatter/BasicScatter.vue";

import BasicPie from "../charts/pie/BasicPie.vue";

import BasicRadar from "../charts/radar/BasicRadar.vue";
import AQIRadar from "../charts/radar/AQIRadar.vue";

// 定义图表类型
export type ChartType = 'bar' | 'line' | 'scatter' | 'pie' | 'radar';

// 图表配置类型
interface ChartConfig {
    name: string;
    description: string;
    component: Component;
    chartName: string;
}
// 图表集合类型
type ChartsCollection = Record<ChartType, ChartConfig[]>;
export const charts: ChartsCollection = {
    bar: [
        {
            name: '基础柱状图',
            description: 'Basic Bar',
            component: BasicBar,
            chartName: 'BasicBar'
        },
        {
            name: '坐标轴刻度与标签对齐',
            description: 'Axis Align with Tick',
            component: AxisAlignwithTick,
            chartName: 'AxisAlignwithTick'
        },
    ],
    line: [
        {
            name: '基础折线图',
            description: 'Basic Line Chart',
            component: BasicLine,
            chartName: 'BasicLine'
        },
        {
            name: '堆叠折线图',
            description: 'Stacked Line Chart',
            component: StackLine,
            chartName: 'StackLine'
        },
        {
            name: '堆叠面积图',
            description: 'Stacked Area Chart',
            component: StackedAreaChart,
            chartName: 'StackedAreaChart'
        },
        {
            name: '函数绘图',
            description: 'Function Plot',
            component: FunctionPlot,
            chartName: 'FunctionPlot'
        },
    ],
    scatter: [
        {
            name: '基础散点图',
            description: 'Basic Scatter Chart',
            component: BasicScatter,
            chartName: 'BasicScatter'
        },
    ],
    pie: [
        {
            name: '基础饼图',
            description: 'Basic Pie Chart',
            component: BasicPie,
            chartName: 'BasicPie'
        },
    ],
    radar: [
        {
            name: '基础雷达图',
            description: 'Basic Radar Chart',
            component: BasicRadar,
            chartName: 'BasicRadar'
        },
        {
            name: 'AQI雷达图',
            description: 'AQI - Radar Chart',
            component: AQIRadar,
            chartName: 'AQIRadar'
        },
    ],
};
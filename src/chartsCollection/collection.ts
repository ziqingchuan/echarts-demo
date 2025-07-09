import type { Component } from "vue";
import BasicBar from "../charts/bar/basicBar.vue";
import AxisAlignwithTick from "../charts/bar/axisAlignwithTick.vue";
import BasicLine from "../charts/line/basicLine.vue";
import StackLine from "../charts/line/stackLine.vue";
import BasicScatter from "../charts/scatter/basicScatter.vue";
import BasicPie from "../charts/pie/basicPie.vue";

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
            chartName: 'basicBar'
        },
        {
            name: '坐标轴刻度与标签对齐',
            description: 'Axis Align with Tick',
            component: AxisAlignwithTick,
            chartName: 'axisAlignwithTick'
        },
    ],
    line: [
        {
            name: '基础折线图',
            description: 'Basic Line Chart',
            component: BasicLine,
            chartName: 'basicLine'
        },
        {
            name: '堆叠折线图',
            description: 'Stacked Line Chart',
            component: StackLine,
            chartName: 'stackLine'
        },
    ],
    scatter: [
        {
            name: '基础散点图',
            description: 'Basic Scatter Chart',
            component: BasicScatter,
            chartName: 'basicScatter'
        },
    ],
    pie: [
        {
            name: '基础饼图',
            description: 'Basic Pie Chart',
            component: BasicPie,
            chartName: 'basicPie'
        },
    ],
    radar: [
        {
            name: '基础雷达图',
            description: 'Basic Pie Chart',
            component: BasicPie,
            chartName: 'basicPie'
        }
    ],
};
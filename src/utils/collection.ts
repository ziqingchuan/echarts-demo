import type { Component } from "vue";

// 柱状图组件
import BasicBar from "../charts/bar/BasicBar.vue";
import AxisAlignwithTick from "../charts/bar/AxisAlignwithTick.vue";
import WaterfallChart from "../charts/bar/WaterfallChart.vue";
import ClickableColumnChart from "../charts/bar/ClickableColumnChart.vue";
import StackedColumnChart from "../charts/bar/StackedColumnChart.vue";
// 折线图组件
import BasicLine from "../charts/line/BasicLine.vue";
import StackLine from "../charts/line/StackLine.vue";
import StackedAreaChart from "../charts/line/StackedAreaChart.vue";
import FunctionPlot from "../charts/line/FunctionPlot.vue";
import DraggablePoints from "../charts/line/DraggablePoints.vue";
// 散点图组件
import BasicScatter from "../charts/scatter/BasicScatter.vue";
import EffectScatterChart from "../charts/scatter/EffectScatterChart.vue";
import ClusteringChart from "../charts/scatter/ClusteringChart.vue";
// 饼图组件
import BasicPie from "../charts/pie/BasicPie.vue";
import DoughnutChart from "../charts/pie/DoughnutChart.vue";
import NightingaleChart from "../charts/pie/NightingaleChart.vue";
import CustomizedPie from "../charts/pie/CustomizedPie.vue";
import TextureonPieChart from "../charts/pie/TextureonPieChart.vue";
import ShareDataset from "../charts/pie/ShareDataset.vue";
// 雷达图组件
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
        {
            name: '瀑布图',
            description: 'Waterfall Chart',
            component: WaterfallChart,
            chartName: 'WaterfallChart'
        },
        {
            name: '可点击的柱状图',
            description: 'Clickable Column Chart',
            component: ClickableColumnChart,
            chartName: 'ClickableColumnChart'
        },
        {
            name: '堆叠柱状图',
            description: 'Stacked Column Chart',
            component: StackedColumnChart,
            chartName: 'StackedColumnChart'
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
        {
            name: '可拖拽点',
            description: 'Draggable Points',
            component: DraggablePoints,
            chartName: 'DraggablePoints'
        },

    ],
    scatter: [
        {
            name: '基础散点图',
            description: 'Basic Scatter Chart',
            component: BasicScatter,
            chartName: 'BasicScatter'
        },
        {
            name: '涟漪特效散点图',
            description: 'Effect Scatter Chart',
            component: EffectScatterChart,
            chartName: 'EffectScatterChart'
        },
        {
            name: '数据聚合图',
            description: 'Clustering Chart',
            component: ClusteringChart,
            chartName: 'ClusteringChart'
        },
    ],
    pie: [
        {
            name: '基础饼图',
            description: 'Basic Pie Chart',
            component: BasicPie,
            chartName: 'BasicPie'
        },
        {
            name: '环形图',
            description: 'Doughnut Chart',
            component: DoughnutChart,
            chartName: 'DoughnutChart'
        },
        {
            name: '南丁格尔玫瑰图',
            description: 'Nightingale Chart',
            component: NightingaleChart,
            chartName: 'NightingaleChart'
        },
        {
            name: '自定义样式饼图',
            description: 'Customized Pie',
            component: CustomizedPie,
            chartName: 'CustomizedPie'
        },
        {
            name: '自定义纹理饼图',
            description: 'Texture on Pie Chart',
            component: TextureonPieChart,
            chartName: 'TextureonPieChart'
        },
        {
            name: '联动与共享数据集',
            description: 'Share Dataset',
            component: ShareDataset,
            chartName: 'ShareDataset'
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
import BasicBar from "../charts/bar/basicBar.vue";
import BasicLine from "../charts/line/basicLine.vue";
import BasicScatter from "../charts/scatter/basicScatter.vue";
import {basicScatter} from "../codes/scatter/basicScatter.ts";
import BasicPie from "../charts/pie/basicPie.vue";
import type { Component } from "vue";
import {basicBar} from "../codes/bar/basicBar.ts";
import {basicLine} from "../codes/line/basicLine.ts";
import {basicPie} from "../codes/pie/basicPie.ts";

// 定义图表类型
export type ChartType = 'bar' | 'line' | 'scatter' | 'pie';

// 图表配置类型
interface ChartConfig {
    name: string;
    description: string;
    component: Component;
    src: string;
    code: string;
}
// 图表集合类型
type ChartsCollection = Record<ChartType, ChartConfig[]>;
export const charts: ChartsCollection = {
    bar: [
        {
            name: '基础柱状图',
            description: '展示基本柱状图效果',
            component: BasicBar,
            src: 'coverImages/bar/basicBar.png',
            code: basicBar
        },
    ],
    line: [
        {
            name: '基础折线图',
            description: '展示基本折线图效果',
            component: BasicLine,
            src: 'coverImages/line/basicLine.png',
            code: basicLine
        },
    ],
    scatter: [
        {
            name: '基础散点图',
            description: '展示基本散点图效果',
            component: BasicScatter,
            src: 'coverImages/scatter/basicScatter.png',
            code: basicScatter
        },
    ],
    pie: [
        {
            name: '基础饼图',
            description: '展示基本饼图效果',
            component: BasicPie,
            src: 'coverImages/pie/basicPie.png',
            code: basicPie
        },
    ]
};
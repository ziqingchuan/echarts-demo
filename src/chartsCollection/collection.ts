import type { Component } from "vue";
import BasicBar from "../charts/bar/basicBar.vue";
import BasicLine from "../charts/line/basicLine.vue";
import StackLine from "../charts/line/stackLine.vue";
import BasicScatter from "../charts/scatter/basicScatter.vue";
import BasicPie from "../charts/pie/basicPie.vue";

import {basicBar} from "../codes/bar/basicBar.ts";
import {basicLine} from "../codes/line/basicLine.ts";
import {stackLine} from "../codes/line/stackLine.ts";
import {basicScatter} from "../codes/scatter/basicScatter.ts";
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
            description: 'Basic Bar',
            component: BasicBar,
            src: 'coverImages/bar/basicBar.png',
            code: basicBar
        },
    ],
    line: [
        {
            name: '基础折线图',
            description: 'Basic Line Chart',
            component: BasicLine,
            src: 'coverImages/line/basicLine.png',
            code: basicLine
        },
        {
            name: '堆叠折线图',
            description: 'Stacked Line Chart',
            component: StackLine,
            src: 'coverImages/line/stackLine.png',
            code: stackLine
        },
    ],
    scatter: [
        {
            name: '基础散点图',
            description: 'Basic Scatter Chart',
            component: BasicScatter,
            src: 'coverImages/scatter/basicScatter.png',
            code: basicScatter
        },
    ],
    pie: [
        {
            name: '基础饼图',
            description: 'Basic Pie Chart',
            component: BasicPie,
            src: 'coverImages/pie/basicPie.png',
            code: basicPie
        },
    ]
};
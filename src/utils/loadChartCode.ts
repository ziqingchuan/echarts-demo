export async function loadChartCode(chartType: string, chartName: string): Promise<string> {
    try {
        // Vite 的动态导入，匹配 charts 下所有子目录中的 .vue 文件
        const charts = import.meta.glob('../charts/**/*.vue', { as: 'raw' })
        const chartPath = `../charts/${chartType}/${chartName}.vue`

        if (charts[chartPath]) {
            return await charts[chartPath]()
        }
        throw new Error(`Chart ${chartType}/${chartName} not found`)
    } catch (error) {
        console.error('Failed to load chart code:', error)
        return `// Error loading chart: ${chartType}/${chartName}`
    }
}
export async function loadChartCode(chartType: string, chartName: string): Promise<string> {
    try {
        const charts = import.meta.glob('../charts/**/*.vue', {
            query: '?raw',
            import: 'default'
        });

        const chartPath = `../charts/${chartType}/${chartName}.vue`;

        if (chartPath in charts) {
            return await charts[chartPath]() as string;
        }
        throw new Error(`Chart ${chartType}/${chartName} not found`);
    } catch (error) {
        console.error('Failed to load chart code:', error);
        return `// Error loading chart: ${chartType}/${chartName}`;
    }
}
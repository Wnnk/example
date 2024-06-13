import {shallowRef, onMounted, onDeactivated, onBeforeMount } from 'vue'
import type { Ref } from 'vue'
import echarts from '@/utils/utils'


export type EChartsCoreOption = echarts.EChartsCoreOption
const useEcharts = (elRef: Ref<HTMLDivElement>, options: EChartsCoreOption) => {
  const charts = shallowRef<echarts.ECharts>()

  const initCharts = (themeColor?:Array<string>) => {
    charts.value = echarts.init(elRef.value);
    if (themeColor) {
      options.color = themeColor
    }
    setOptions(options)
  }

  const setOptions = (options: EChartsCoreOption) => {
    charts.value && charts.value.setOption(options)
  }

  const echartsResize = () => {
    charts.value && charts.value.resize()
  }

  onMounted(() => {
    window.addEventListener('resize', echartsResize)
  })

  onDeactivated(() => {
    window.removeEventListener('resize', echartsResize)
  })

  onBeforeMount(() => {
    window.removeEventListener('resize', echartsResize)
  })

  return {
    initCharts,
    setOptions,
    echartsResize
  }

}

export { useEcharts}
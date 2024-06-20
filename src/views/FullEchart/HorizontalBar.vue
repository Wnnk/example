<script setup lang='ts'>
import EchartPage from "@/views/Echarts/EchartPage.vue"
import type { EChartsCoreOption } from "echarts"
import { useThemeStore } from "@/stores/themeStore";
import { echartColorStore } from "@/stores/echartColor";
const echartColor = echartColorStore();
const themeStore = useThemeStore();
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});
type dataProps = {
  name: string,
  value: number
  id: number,
}
const option: EChartsCoreOption = {
  title: {
    text: 'Horizontal Bar Chart',
  },
  xAxis: {
    show: false,
    type: 'value',
    max: function (value: any) {
      return parseInt(value.max) * 1.2
    }
  },
  yAxis: {
    type: 'category',
    data: props.data.map((item: dataProps) => item.name),
    inverse: true,
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      // color: '#9eb1c8'
    },

  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: '15%',
    containLabel: true,
  },
  series: [
    {
      type: 'bar',
      data: props.data.map((item: dataProps) => {
        return {
          value: item.value,
          name: item.name,
          // itemStyle: {
          //   color: themeStore.currentColorArray ? themeStore.currentColorArray[item.id] : '#5d98ce',
          // }
        }
      }),
      showBackground: true,
      backgroundStyle: {
        // color: 'rgba(180,180,180,0.2)'
      },
      itemStyle: {
        // color: "#5d98ce",
        barBorderRadius: 5,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        showdowBlur: 5,
      },
      barWidth: 12,
      label: {
        show: true,
        position: 'right',
        textStyle: {
          color: "#fff",
        }
      }
    }
  ]


}



</script>

<template>
  <div>
    <EchartPage :options="option" />
  </div>
</template>

<style lang='scss' scoped></style>
<template>
  <EchartPage :options="options2" />
  <settingEchart />
</template>

<script setup lang="ts">
import EchartPage from "./EchartPage.vue"
import settingEchart from "./settingEchart.vue";
import type { EChartsCoreOption } from "echarts"

const options2: EChartsCoreOption = {
  tooltip: {
    trigger: "axis"
  },

  grid: {
    left: "3%",
    right: "4%",
    bottom: "0%",
    top: "5%",
    containLabel: true
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["3-1", "3-2", "3-3", "3-4", "3-5", "3-6", "3-7"]
  },
  yAxis: {
    axisLabel: {
      formatter: function (val: number) {
        return val
      }
    }
  },
  series: [
    {
      name: "QQ",
      type: "line",
      stack: "Total",
      data: [200, 201, 202, 203, 204, 205, 206]
    },
    {
      name: "微信",
      type: "line",
      stack: "Total",
      data: [200, 201, 202, 203, 204, 205, 206]
    }
  ]
}

</script>
<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import 'echarts-wordcloud'
import * as echarts from 'echarts';

const target = ref()
const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

type WordCloudProps = {
  value: number,
  name: string,
}
const randomRgb = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
const options = {
  series: [
    {
      type: 'wordCloud',
      sizeRange: [12, 60],
      rotationRange: [-90, 90],
      gridSize: 0,
      layoutAnimation: true,
      textStyle: {
        color: randomRgb
      },
      emphasis: {
        textStyle: {
          fontWeight: 'bold',
          color: '#000'
        }
      },
      data: props.data,
      shape: 'cardioid',
    }
  ]
}

onMounted(() => {
  const chart = echarts.init(target.value)
  chart.setOption(options)
})
</script>

<template>
  <div ref="target" style="width: 100%; height: 100%;">

  </div>
</template>

<style lang='scss' scoped></style>
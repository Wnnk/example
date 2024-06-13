<script setup lang='ts'>
import { ref, onMounted, watch, shallowRef } from 'vue'
import { useEcharts, type EChartsCoreOption } from '@/hooks/useEcharts'
import { useThemeStore } from '@/stores/themeStore'

interface Props {
  options: EChartsCoreOption
}
const props = defineProps<Props>();
const themeStore = useThemeStore();
const elEcharts = shallowRef();
const currentOptions = shallowRef(props.options);
const { setOptions, initCharts } = useEcharts(elEcharts, currentOptions.value);

watch(
  () => props.options,
  (nVal) => {
    let targetOptions: EChartsCoreOption = {};
    if (themeStore.currentColorArray && themeStore.currentColorArray.length > 0) {
      targetOptions = { ...nVal }
      targetOptions.color = themeStore.currentColorArray;
    } else {
      targetOptions = { ...nVal }
    }
    setOptions(targetOptions);
  }
)

watch(
  () => themeStore.currentColorArray,
  (nVal) => {
    currentOptions.value.color = nVal;
    setOptions(currentOptions.value);
  }
)

onMounted(() => {
  initCharts();
})

</script>

<template>
  <div ref="elEcharts" style="height: 100%; width: 100%;"></div>

</template>

<style lang='scss' scoped></style>
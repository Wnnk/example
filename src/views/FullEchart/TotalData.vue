<script setup lang='ts'>
import { CountUp } from 'countup.js';
import { onMounted, ref, watch } from 'vue';
// import { useThemeStore } from '@/stores/themeStore';
// const themeStore = useThemeStore();
import { echartColorStore } from '@/stores/echartColor';

const echartColor = echartColorStore();

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});
const total = ref();
const NorthernChina = ref();
const EasternChina = ref();
const MiddleSouth = ref();
const SouthWest = ref();
const NorthWest = ref();
const EastChina = ref();
const totalCountTarget = ref();

watch(
  () => echartColor.currentColor,
  (newVal) => {
    totalCountTarget.value.style.color = newVal;
  }
)

// watch(
//   () => themeStore.currentColorArray,
//   (newVal) => {
//     if (newVal) {
//       totalCountTarget.value.style.color = newVal[0];
//     }
//   }
// )

onMounted(() => {
  new CountUp(total.value, props.data.total).start();
  new CountUp(NorthernChina.value, props.data.db).start();
  new CountUp(EasternChina.value, props.data.hd).start();
  new CountUp(MiddleSouth.value, props.data.zn).start();
  new CountUp(SouthWest.value, props.data.xn).start();
  new CountUp(NorthWest.value, props.data.xb).start();
  new CountUp(EastChina.value, props.data.hx).start();
});

</script>

<template>
  <div ref="totalCountTarget" class="total-count-target">
    <div class="total">总量：<span ref="total"></span></div>
    <div class="item1">华北：<span class="NorthernChina" ref="NorthernChina"></span></div>
    <div class="item2">华南：<span class="EasternChina" ref="EasternChina"></span></div>
    <div class="item3">中南：<span class="MiddleSouth" ref="MiddleSouth"></span></div>
    <div class="item4">西南：<span class="SouthWest" ref="SouthWest"></span></div>
    <div class="item5">西北：<span class="NorthWest" ref="NorthWest"></span></div>
    <div class="item6">华东：<span class="EastChina" ref="EastChina"></span></div>
  </div>
</template>

<style lang='scss' scoped>
@font-face {
  font-family: 'Electronic';
  src: url('@/assets/FX-LED.ttf')
}

.total-count-target {
  font-family: Electronic;
  font-size: 20px;
  color: #5dc5ef;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-template-areas:
    'total total total'
    'total total total'
    'item1 item2 item3'
    'item4 item5 item6';
}

.total {
  grid-area: total;
  justify-self: center;
  align-self: center;
  font-size: 48px;
}
</style>
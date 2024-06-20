<script setup lang='ts'>
const props = defineProps({
  showFunctionAreaHandler: {
    type: Function,
    requered: true
  }
})


</script>

<template>
  <div>
    <button @click="props.showFunctionAreaHandler">Function Area</button>
  </div>
</template>

<style lang='scss' scoped></style>
<script setup lang='ts'>
import { ref } from 'vue'
// const childMessage = ref('Hello from child')
const props = defineProps({
  Message: {
    type: String,
    default: 'Hello from child'
  }
})
const slots = defineSlots()
console.log(slots.name)
</script>

<template>
  <div>
    <h1>Child Component</h1>
    <slot name='name' :childMessage='props.Message'>

    </slot>
  </div>
</template>

<style lang='scss' scoped></style>
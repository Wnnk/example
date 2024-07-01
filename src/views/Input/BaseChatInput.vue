<script setup lang='ts'>
import InputEmoji from './InputEmoji.vue'
const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '100%'
  },
  color: {
    type: String,
    default: 'black'
  },
  emoji: {
    type: Boolean,
    default: true
  },
});

const emit = defineEmits(['update:value']);

const updateValue = (value: string) => {
  emit('update:value', value);
};
</script>

<template>
  <el-input v-bind="$attrs" :style="{ width: props.width, color: props.color }" @input="updateValue($event)"
    :value="props.value">
    <template v-for="(_, name) in $slots" :key="name" v-slot:[name]>
      <slot :name="name">

      </slot>
    </template>
  </el-input>

  <!-- <template v-if="props.emoji">
    <InputEmoji />
  </template> -->

</template>

<style lang='scss' scoped>
.chat-input {
  position: sticky;
  bottom: 30px;
  margin-bottom: 30px;
  background-color: greenyellow;
}
</style>
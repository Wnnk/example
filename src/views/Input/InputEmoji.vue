<script setup lang='ts'>
const props = defineProps({
  rows: {
    type: Number,
    default: 3
  },
  cols: {
    type: Number,
    default: 3
  },
  emojis: {
    type: Array,
    default: () => ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙', '😚', '🙂', '🤗', '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '😛', '😜', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '☹', '�']
  }
});
</script>

<template>
  <div class="input-emoji-container"
    :style="{ 'grid-template-columns': `repeat(${props.cols}, 1fr)`, 'grid-template-rows': `repeat(${props.rows}, 1fr)` }">
    <div class="input-emoji-box" v-for="(emoji, index) in props.emojis" :key="index">
      <div class="emmoji">
        {{ emoji }}
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.input-emoji-container {
  display: grid;
  z-index: 1;
}
</style>
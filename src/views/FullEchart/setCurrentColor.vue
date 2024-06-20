<script setup lang='ts'>
import { echartColor } from '@/config/echartColor.ts'
import { echartColorStore } from '@/stores/echartColor.ts'
import { watch } from 'vue'
const props = defineProps({
  showFunctionAreaHandler: {
    type: Function,
    required: true
  },
  showFunctionArea: {
    type: Boolean,
    required: true
  }
})

const emits = defineEmits(['after-leave'])

const handleAfterLeave = () => {
  emits('after-leave')
}

const colorStore = echartColorStore();
</script>

<template>
  <div class="masking-layer" @click="props.showFunctionAreaHandler()">
    <transition name="box" @after-leave="handleAfterLeave()">
      <div class="set-current-color" v-show="props.showFunctionArea">
        <div class="color-box" v-for="color in echartColor" :key="color" :style="{ backgroundColor: color }"
          @click="colorStore.changeColor(color)">
        </div>
      </div>
    </transition>
  </div>

</template>

<style lang='scss' scoped>
.masking-layer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(156, 173, 189, 0.5);
  z-index: 0;
}

.set-current-color {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 400px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto;
  gap: 10px;
  border-radius: 8px 0 0 8px;
  background-color: #5d98ce;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  place-items: center;
  z-index: 1;
}

.color-box {
  width: 20px;
  height: 20px;
  border-radius: 5px;
  cursor: pointer;
}

/* transtion进入 离开动画 */
.box-enter-active,
.box-leave-active {
  transition: transform 0.3s ease-in-out;
}

.box-enter-from,
.box-leave-to {
  transform: translateX(100%);
}
</style>
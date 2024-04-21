<script setup lang="ts">
import {ref,reactive} from "vue"
interface MenuItem  {
  name: string;
  path: string;
}
const {menu} = defineProps<{
  menu:MenuItem[]
}>()

const handleEnter = (el: HTMLElement) => {
  el.style.height = "auto";
  const h = el.clientHeight;
  el.style.height = "0";
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.style.height = `${h}px`;
      el.style.transition = "0.5s";
    });
  });
  
}

const handleLeave = (el: HTMLElement) => {
  el.style.height = `none`;
};



</script>
<template>
  <div class="container">
    <slot></slot>
    <Teleport to="body">
      <div class="context-menu">
        <div class="menu-item" v-for="item in menu" :key="item.name">
          {{item.name}}
        </div>
      </div>
    </Teleport>
    

    
  </div>
</template>
<style lang="scss" scoped>
.context-menu{
  position: absolute;
  top: 100px;
  left:500px;
  z-index: 1000;
  /* 样式 */
  width: 100px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.menu-item{
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #ccc;
}



</style>

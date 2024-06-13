<script setup lang="ts">
import mainLeftNav from "@/components/Nav/mainLeftNav.vue";
import { onMounted, computed, ref, onUnmounted } from 'vue'

const fontSize = ref(16);
const handleResize = () => {
  fontSize.value = document.documentElement.clientWidth / 100
  document.documentElement.style.fontSize = `${fontSize.value}px`;
}
onMounted(() => {
  window.addEventListener('resize', handleResize)
  window.addEventListener('orientationchange', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('orientationchange', handleResize)
})



</script>

<template>
  <div class="app">
    <mainLeftNav />
    <router-view></router-view>
    <!-- <div class="text">
      <h1>{{ fontSize }}</h1>
    </div> -->
  </div>
</template>

<style scoped lang="scss">
.app {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-primary-light) !important;
  color: var(--font-primary);
}

.text {
  width: 10rem;
  height: 10rem;
  background-color: #fff;
}
</style>

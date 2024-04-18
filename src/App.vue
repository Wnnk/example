<script setup lang="ts">
import mainLeftNav from "@/components/Nav/mainLeftNav.vue";
</script>

<template>
  <div class="app">
      <mainLeftNav />
      <router-view></router-view>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  width: 100vw;
  height: 100vh;
}
</style>

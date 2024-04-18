<script setup lang='ts'>
import { useRouter } from "vue-router"
import routers from '@/router/index'
const router = useRouter();

const handleClick = (layout: string) => {
    router.push({ name: layout });
}
</script>

<template>
  <div class="layout-container">
    <button @click="handleClick('flex')">Flex Layout</button>
    <button @click="handleClick('grid')">Grid Layout</button>
    <router-view></router-view>
  </div>
</template>

<style lang='scss' scoped>
.layout-container {
  width: 100%;
  height: 100%;
}
</style>
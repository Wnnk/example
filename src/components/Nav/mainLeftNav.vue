<script setup lang='ts'>
import routers from '@/router/index'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const type = ref('light');
const onChange = () => {
  document.documentElement.setAttribute('theme-mode', type.value);
}

const router = useRouter()
/** 
 * @description 跳转到指定路由
 * @param {string} path 路由路径
 * @returns {void}
*/
const goTo = (path: string) => {
  router.push(path)
}
</script>

<template>
  <div class="main-left-nav">
    <div>
      <form>
        <input type="radio" name="gender" v-model="type" value="light" checked @change="onChange" /> light
        <input type="radio" name="gender" v-model="type" value="dark" checked @change="onChange" /> dark
      </form>
    </div>
    <div v-for="(item, index) in routers.options.routes" :key="index" @click="() => goTo(item.path)">
      {{ item.name }}
    </div>
  </div>
</template>

<style lang='scss' scoped>
.main-left-nav {
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
}
</style>
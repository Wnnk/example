<script setup lang='ts'>
import { ref, onMounted } from 'vue';
import { useContextMenu } from '@/hooks/useContextMenu'

type MenuItem = {
  label: string,
}
const props = defineProps({
  menu: {
    type: Array<MenuItem>,
    default: () => []
  }
})
const containerRef = ref<HTMLDivElement | null>(null)
const menuRef = ref<HTMLDivElement | null>(null);
const { x, y, showMenu } = useContextMenu(containerRef, 100)

const menuBefreEnter = (el: HTMLDivElement | null) => {
  if (!el) return
  el.style.height = '0px'
}

const menuEnter = (el: HTMLDivElement | null) => {
  if (!el) return
  el.style.height = 'auto';
  const height = el.clientHeight;
  el.style.height = '0px';
  requestAnimationFrame(() => {
    el.style.height = `${height}px`
    el.style.transition = '.5s';
  })
}

const deleteTransition = (el: HTMLDivElement | null) => {
  if (!el) return;
  el.style.transition = 'none';
}






</script>

<template>
  <div ref="containerRef" class="ContextMenuContainer">
    <Teleport to="body">
      <Transition @beforeEnter="menuBefreEnter(menuRef)" @enter="menuEnter(menuRef)" v-if="containerRef"
        @afterEnter="deleteTransition(menuRef)">
        <div class="ContextMenu" v-if="showMenu" ref='menuRef' :style="{
        left: `${x}px`,
        top: `${y}px`,
      }">
          <div class="MenuList">
            <div class="MenuItem" v-for="(item) in props.menu" :key="item.label">
              {{ item.label }}
            </div>
          </div>
        </div>
      </Transition>

    </Teleport>
  </div>


</template>

<style lang='scss' scoped>
.ContextMenuContainer {
  width: 100%;
  height: 100%;
}

.ContextMenu {
  position: fixed;
  background: #eee;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  width: 100px;
  border-radius: 5px;
  font-size: 12px;
  color: #1d1d1f;
  line-height: 1.8;
  white-space: nowrap;
  overflow: hidden;
}

.MenuItem {
  border-bottom: 1px solid #ddd;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }
}
</style>
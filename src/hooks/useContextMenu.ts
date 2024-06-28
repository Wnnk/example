import type { Ref } from 'vue'
import { ref, onMounted, onUnmounted } from 'vue'
const useContextMenu = (el:Ref<HTMLDivElement>, width:number = 100) => {

  const showMenu = ref(false);
  const x = ref(0);
  const y = ref(0);
 
  const handleContextMenu = (e:MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    showMenu.value = true;
    /* 计算el偏移位置 */
    const rect = el.value.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    console.log(offsetX, offsetY, rect.width, rect.height)
    /* 处理右边界 */
    if (e.clientX + width > rect.width + rect.left) {
      x.value = e.clientX - width;
    } else {
      x.value = e.clientX;
    }
    y.value = e.clientY;
    /* 处理下边界 */
    // if (e.clientY + width > rect.height + rect.top) {
    //   y.value = e.clientY - width;
    // } else {
    //   y.value = offsetY;
    // }

    // console.log(x.value, y.value, el.value.clientWidth, el.value.clientHeight)

  }

  const closeMenu = () => {
    showMenu.value = false;
  }
  onMounted(() => {
    const div = el.value;
    div.addEventListener('contextmenu',handleContextMenu);
    window.addEventListener('click', closeMenu,true);
    window.addEventListener('contextmenu', closeMenu,true)
  })

  onUnmounted(() => {
    const div = el.value;
    div.removeEventListener('contextmenu',handleContextMenu);
    window.removeEventListener('click', closeMenu,true);
    window.addEventListener('contextmenu', closeMenu,true)
  })

  return {
    showMenu,
    x,
    y
  }
}

export { useContextMenu }
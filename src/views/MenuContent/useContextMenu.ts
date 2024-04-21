import { onMounted, onUnmounted, ref } from 'vue';
export const useContextMenu = (container: HTMLDivElement) => {

    const x = ref(0);
    const y = ref(0);
    const visible = ref(false);
    const showMenu = (event: MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        x.value = event.clientX;
        y.value = event.clientY;
        visible.value = true;
    }
    const closeMenu = () => {
        visible.value = false;
    }
    onMounted(() => {
        container.addEventListener('contextmenu', showMenu);
        window.addEventListener('click',closeMenu,true);
        window.addEventListener('contextmenu',closeMenu,true);
        console.log('mounted')
    });
    onUnmounted(() => {
        container.removeEventListener('contextmenu', showMenu);
    });
        
    return {
        x:x.value,
        y:y.value,
        visible:visible.value,
    }
};
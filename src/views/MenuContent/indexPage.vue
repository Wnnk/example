<script setup lang="ts">
import {ref,reactive, onMounted} from "vue"
import MenuContent from "./menuContent.vue"
import {useContextMenu} from "./useContextMenu"
onMounted(() => {
    const indexPageLeft = document.querySelector(".index-page-left") as HTMLDivElement | null;
    if (indexPageLeft) {
        useContextMenu(indexPageLeft)
    }
   
    
});


</script>
<template>
  <div class="index-page">

    <div class="index-page-left">
        左
        <MenuContent :menu="[
            {name: '菜单1', path: '/menu1'},
            {name: '菜单2', path: '/menu2'},
            {name: '菜单3', path: '/menu3'},
            {name: '菜单4', path: '/menu4'}
        ]" >
            <div class="inner">
                <h1>slot内容</h1>
            </div>
        </MenuContent>
    </div>

    <div class="index-page-right">
        右
        <div class="index-page-child">
            右子
        </div>
    </div>


  </div>
</template>
<style lang="scss" scoped>
.index-page {
    width: 100%;
    display: grid;
    gap: 50px;
    grid-template-columns: 1fr 1fr;
}
.index-page-left {
    background-color: pink;
}
.index-page-right {
    background-color: lightblue;
    position: relative;
}
.index-page-child {
    background-color: yellow;
    position: absolute;
    bottom: 20px;
    width: 500px;
    height: 500px;
}



</style>

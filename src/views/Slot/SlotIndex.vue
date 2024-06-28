<script setup lang='ts'>
import SlotChild from './SlotChild.vue';
import ContextMenu from '@/views/ContextMenu/ContextMenu.vue'
import { ref } from 'vue';
const title = ref('Slot Title');
const message = ref('Slot Message');
const changeHandler = () => {
  message.value = 'New Message';
  console.log(message.value);
}
</script>

<template>
  <div>
    <SlotChild :Message="message">
      <template v-slot:name="{ childMessage }">
        <h1>{{ title }}</h1>
        <h2>{{ childMessage }}</h2>
      </template>
    </SlotChild>
    <button @click="changeHandler">ChangeButton</button>

  </div>
  <div class="menu1">
    <ContextMenu :menu="[
      {
        label: '1菜单1',
      },
      {
        label: '1菜单2',
      },
      {
        label: '1菜单3',
      },
      {
        label: '1菜单4',
      },

    ]" />
  </div>
  <div class="menu2">
    <ContextMenu :menu="[
      {
        label: '2菜单1',
      },
      {
        label: '2菜单2',
      },

    ]" />
    <div class="menu3">
      <ContextMenu :menu="[
      {
        label: '3菜单1',
      },
      {
        label: '3菜单2',
      },
      {
        label: '3菜单3',
      },
      {
        label: '3菜单4',
      },
      {
        label: '3菜单5',
      },
      {
        label: '3菜单6',
      },
      {
        label: '3菜单7',
      },
      {
        label: '3菜单8',
      },
      {
        label: '3菜单9',
      },
      {
        label: '3菜单10',
      },
      {
        label: '3菜11',
      },

    ]" />
    </div>
    <div class="menu4">11</div>
  </div>

</template>

<style lang='scss' scoped>
.menu1 {
  width: 500px;
  height: 400px;
  background-color: gray;
}

.menu2 {
  width: 500px;
  height: 400px;
  background-color: green;
  position: relative;
  display: flex;
  justify-content: start;
}

.menu3 {
  width: 500px;
  height: 200px;
  background-color: yellow;
}
</style>
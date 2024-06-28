<script setup lang='ts'>
import BaseChatInput from './BaseChatInput.vue';
</script>

<template>
  <div class="example-input">
    <div class="header">头部内容</div>
    <div class="main">
      <div class="chat">

      </div>
      <BaseChatInput />
    </div>

  </div>
</template>

<style lang='scss' scoped>
.example-input {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  place-items: center;
}

.header {
  background-color: #ddd;
  border: 1px solid black;
  height: 100%;
  width: 100%;
}

.main {
  position: relative;
  background-color: gray;
  border: 1px solid black;
  height: 100%;
  width: 100%;
  display: flex;
  flex: 1 1 auto;
  flex-grow: 1;
  flex-direction: column;
}

.chat {
  background-color: yellow;
  height: 200vh;
  width: 100%;
  overflow-y: scroll;
}
</style>
<script setup lang='ts'>
import BaseChatInput from './BaseChatInput.vue';
import { Avatar } from '@element-plus/icons-vue';
import { ref } from 'vue';
const value = ref('');
</script>

<template>
  <div class="example-input">
    <BaseChatInput width="300px" color="#333" :disabled="false" :placeholder="'Enter your message here'"
      placement="bottom-end" v-model="value">
      <template #icon>
        <el-icon>
          <Avatar />
        </el-icon>
      </template>
    </BaseChatInput>
  </div>
  <el-icon>
    <Avatar />
  </el-icon>
</template>

<style lang='scss' scoped>
.example-input {
  height: 100vh;
  width: 100%;
}
</style>
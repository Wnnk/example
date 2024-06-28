<script setup lang='ts'>
import SelectBase from './SelectBase.vue';
import { getSelectData, delayGetSelectData, errorGetSelectData, emptyGetSelectData } from '@/api/selectData.ts'
import { ref } from 'vue';

const v1 = ref('');
const v2 = ref('');
const v3 = ref('');
const v4 = ref('');
</script>

<template>
  <div>
    <p>正常</p>
    <SelectBase :api="getSelectData" autoLoad="lazy" clearable v-model="v1">
      <template v-slot:option="{ item }">
        <div style="display: flex;">
          <div style="flex:1">
            {{ item.label }}
          </div>
          <div>
            <el-tag size="small"> {{ item.value }}</el-tag>
          </div>
        </div>

      </template>
    </SelectBase>
    <p>空数据</p>
    <SelectBase :api="emptyGetSelectData" v-model="v2" />
    <p>通行中</p>
    <SelectBase :api="delayGetSelectData" v-model="v3" />
    <p>接口挂了</p>
    <SelectBase :api="errorGetSelectData" v-model="v4" />
  </div>
</template>

<style lang='scss' scoped></style>
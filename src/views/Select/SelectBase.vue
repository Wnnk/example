<script setup lang='ts'>
import { ref } from 'vue'
import axios from 'axios';

/** 
 * @description: el-select 二次封装
 * 1. autoLoad 支持惰性加载，懒加载
 * 2. 支持自定义option内容
 * 3. 加载中、加载失败、空数据状态显示不同ui
 * 
 *
  */

const props = defineProps({
  // value: {
  //   type: String,
  //   required: true
  // },
  api: {
    type: Function,
    required: true,
  },
  autoLoad: {
    type: [Boolean, String],
    required: false,
    default: true,
  }
})

type DataItem = {
  value: string,
  label: string,
}
/* 请求返回数据 */
const data = ref<DataItem[]>([])
/** 
 * 0:未初始化
 * 1:加载中
 * 2:加载成功
 * 3:加载失败
  */
const status = ref(0)
const checkRequestType = (request: any) => {
  return request.constructor.name
}
const abort = async () => {
  /* 取消请求 */
  if (status.value !== 1) return;
  const controller = new AbortController();
  controller.abort()
  /* 测试用例 */
  // const response = await fetch('http://jsonplaceholder.typicode.com/posts', { signal: controller.signal })
  // const axiosResponse = await axios.get('http://jsonplaceholder.typicode.com/posts', { signal: controller.signal })


}

const loadData = async () => {
  if (status.value === 1) {
    abort()
    return
  }
  try {
    status.value = 1
    const result = await props.api()
    if (result.code === 200) {
      data.value = result.data;
      status.value = 2
    }
  } catch (error) {
    console.error(error)
    status.value = 3
  }
}

/* created */
if (props.autoLoad === true || props.autoLoad === 'true') {
  console.log('created')
  loadData()
}

const value = ref('')

const visibleChangeHandle = () => {
  if (status.value === 0) {
    console.log('visibleChangeHandle')
    loadData()
  }
}
abort()
</script>

<template>
  <div class="defaul">
    <div>
      <el-select v-model="value" placeholder="请选择" class="select" @visible-change="visibleChangeHandle" v-bind="$attrs">
        <el-option v-for="item in data" :key="item.value" :label="item.label" :value="item.value">
          <slot name="option" :item="item"></slot>
        </el-option>
        <template v-slot:empty>
          <div v-if="status === 1">
            loading...
          </div>
          <div v-else-if="status === 2">
            空数据
          </div>
          <div v-else-if="status === 3">
            error
            <el-button @click="loadData">
              重试
            </el-button>
          </div>
        </template>
      </el-select>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.defaul {
  width: 100vw;
  display: flex;
}

.select {
  margin-left: 10px;
  width: 200px;
}
</style>
<script setup lang='ts'>

import { echartsThemeData } from '@/config/echartTheme'
import { useThemeStore } from '@/stores/themeStore'

const themeStore = useThemeStore()
const handleClick = (theme: Array<string>) => {
  themeStore.updateCurrentColorByArray(theme)
}
</script>

<template>
  <div class="echarts-theme">
    <el-row :gutter="10">
      <el-col :span="24" v-for="item in echartsThemeData" :key="item.name">
        <div class="echarts-theme-item-group" @click="handleClick(item.theme)">
          <div class="echarts-theme-item-color" v-for="sItem in item.theme" :key="sItem"
            :style='{ backgroundColor: sItem }'></div>
        </div>
      </el-col>
    </el-row>

  </div>



</template>

<style lang='scss' scoped>
.echarts-theme {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  width: 200px;
}

.echarts-theme-item-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: auto;
  height: 32px;
  padding: 5px;
  margin-bottom: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid #eee;
  border-radius: 4px;
}

.echarts-theme-item-color {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 2px;
  margin-bottom: 10px;
  margin-left: 2px;
  border-radius: 3px;
  border: 1px solid #eee;
}
</style>
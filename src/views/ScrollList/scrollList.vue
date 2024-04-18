<script setup lang='ts'>
import { nextTick } from 'process';
import { ref, onMounted, computed } from 'vue'
interface ListItem {
  id: number;
  value: string;
  statu: 0 | 1;
}
const list = ref<HTMLDivElement>();
const items = ref<HTMLDivElement>();
const itemSize = ref(40);
const listData = ref<ListItem[]>([]);
/* 可视区域高度 */
const screenHeight = ref(0);
/* 偏移量 */
const startOffset = ref(0);
/* 开始索引 */
const starIndex = ref(0);
/* 结束索引 */
const endIndex = ref(0);

/** 
 * @description 总列表高度 = 数据量 * 每一项高度
 * @returns {number}
  */
const listHeight = computed(() => {
  return listData.value.length * itemSize.value;
});
/** 
 * @description 可视区域显示的列表项数量 = 可视区域高度 / 每一项高度
 * @returns {number}
  */
const visibleCount = computed(() => {
  return Math.ceil(screenHeight.value / itemSize.value);
});
/** 
 * @description 截取可视区域数组
 * @returns {ListItem[]}
  */

const visibleData = computed(() => {
  return listData.value.slice(
    starIndex.value,
    Math.min(endIndex.value, listData.value.length)
  )
});
/** 
 * @description 计算列表项的 transform 值 以实现滚动效果
 *  @returns {string}
*/
const getTransform = computed(() => {
  return `translate3d(0, ${startOffset.value}px, 0)`;
});

/** 
 * @description 滚动重新计算索引 获取transform
 * @returns {number}
  */

const handleScroll = () => {
  const scrollTop = list.value!.scrollTop;
  starIndex.value = Math.floor(scrollTop / itemSize.value);
  endIndex.value = starIndex.value + visibleCount.value;
  startOffset.value = scrollTop - (scrollTop % itemSize.value);
  // console.log(scrollTop, startOffset.value, starIndex.value, endIndex.value);
};

onMounted(() => {
  getDataSource(100);
  initPosition();
  screenHeight.value = list.value!.clientHeight;
  endIndex.value = starIndex.value + visibleCount.value;
});


/** 
 * @description 模拟后端数据
 * @returns {viod}
  */

const getDataSource = (count: number) => {
  for (let i = 0; i <= count; i++) {
    if (i === 47) {
      listData.value.push({ id: i, value: `item ${i}`, statu: 0 });
    } else {
      listData.value.push({ id: i, value: `item ${i}`, statu: 1 });
    }
  }
};

/** 
 * @description 初始化定位列表
 * @returns {void}
 */


const initPosition = () => {
  screenHeight.value = list.value!.clientHeight;
  const index = listData.value.findIndex((item) => {
    return item.statu === 0;
  });
  /* 找到第一个定位项 */
  if (index !== -1) {
    nextTick(() => {
      /* 计算滚动位置 */
      const scroolPosition = index * itemSize.value;
      /* 设置滚动条位置 */
      list.value!.scrollTop = scroolPosition;
      /* 手动触发计算索引 */
      handleScroll();
    })

  }
};

/** 
 * @description 到底按钮点击事件
 * @returns {void}
  */

const bottomClick = () => {
  list.value!.scrollTop = listHeight.value - screenHeight.value;
  handleScroll();
};





</script>

<template>
  <div class="container" ref="list" @scroll="handleScroll()">
    <div class="phantom" :style="{ height: listHeight + 'px' }"></div>
    <div class="list" :style="{ transform: getTransform }">
      <div ref="items" class="list-item" v-for="item in visibleData" :key="item.id"
        :style="{ height: itemSize + 'px', lineHeight: itemSize + 'px' }">
        {{ item.value }}
      </div>
    </div>
  </div>
  <button @click="bottomClick">到底</button>

</template>

<style lang='scss' scoped>
.container {
  width: 300px;
  height: 300px;
  overflow: auto;
  position: relative;
  border: 1px solid black;
}

.phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
}

.list {
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  text-align: center;
}

.list-item {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid black;
}
</style>
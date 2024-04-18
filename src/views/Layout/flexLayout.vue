<script setup lang='ts'>


</script>

<template>
  <div class="flex-layout">
    <div class="item1">
      Item 1
    </div>
    <h1>Item 2</h1>
    <div class="item3">
      Item 3
    </div>
  </div>
</template>

<style lang='scss' scoped>

.flex-layout {
  height: 100%;
  display: flex;  /* 开启flex布局 */
  flex-direction: row;  /* 主轴方向row水平向右 | row-reverse水平向左 | column垂直 | column-reverse垂直向上 */
  flex-wrap: wrap;  /* 子元素换行 wrap换行 | nowrap不换行 |wrap-reverse换行且第一行在下方 */
  justify-content: center; /* 主轴居中 */ /* justify-content: flex-start靠左 | flex-end靠右 | center居中 | space-between两侧对齐 | space-around每个子元素两侧间隔相等 */
  flex-flow: row wrap;  /* flex-direction和flex-wrap的简写 */
  align-items:  baseline; /* flex-start交叉轴起点 | flex-end交叉轴终点 | center交叉轴居中 | baseline交叉轴基线 | stretch交叉轴拉伸 */
  align-content: center; /* flex-start交叉轴多行起点对齐 | flex-end交叉轴多行终点对齐 | center交叉轴多行居中对齐 | space-between | space-around每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍 | stretch轴线占满整个交叉轴 */
}

.item1 {
  background-color: red;
  width: 1000px;
}

.item3 {
  background-color: blue;
  width: 500px;
  /* flex子元素 */
  order:-1; /* 子元素的排列顺序 数字越小越靠前 默认0 */
  flex-grow:1; /* 子元素的放大比例 默认0 */
  flex-shrink:1; /* 子元素的缩小比例 默认1 */
  flex-basis:200px; /* 设置子元素的初始大小 默认auto <length> | auto*/
  flex:1 1 200px; /* flex: flex-grow flex-shrink flex-basis的简写 */ /* flex: 1  为 flex-grow: 1; flex-shrink: 1; flex-basis: 0; */
  align-self:center; /*  auto | flex-start | flex-end | center | baseline | stretch; */
}
</style>
<script setup lang='ts'>
</script>

<template>
  <div class="grid-layout">
    <!-- <div class="item1">
      Item 1
    </div>
    <h1>Item 2</h1>
    <div class="item3">
      Item 3
    </div>
     <div class="item3">
      Item 4
    </div>
     <div class="item3">
      Item 5
    </div>
     <div class="item3">
      Item 6
    </div>
     <div class="item3">
      Item 7
    </div>
     <div class="item3">
      Item 8
    </div>
     <div class="item3">
      Item 9
    </div>
     <div class="item3">
      Item 10
    </div>
    <div class="item3">
      Item 11
    </div> -->

    <div class="test">
      item
    </div>
    


  </div>
</template>

<style lang='scss' scoped>
// .grid-layout {
//   display: grid;
//   // grid-template-rows: repeat(3fr, min(200px, 500px)); /* 网格每行的高度自动填充，最小高度为100px，最大高度为200px */
//   // grid-template-columns: repeat(3fr,min(200px,200px)); /* 网格每列的宽度自动填充，最小宽度为150px，最大宽度为100% */
//   // column-gap: 10px; /* 网格列间距 */
//   // row-gap: 10px;  /* 网格行间距 */
//   gap: 10px;  /* 网格间距  相当于 column-gap: 10px； row-gap: 10px； */
//   justify-items: center; /* 网格内部元素水平居中 */
//   grid-template-areas: "header header header"
//                        "main main sidebar"
//                        "footer footer footer"; /* 网格区域 */
//   grid-auto-flow: row; /* 网格自动换行方向 */
//   // justify-items: start;/* start | end | center | stretch; */
//   // align-items: end; /* start | end | center | stretch; */
//   place-items:stretch; /* <align-items> <justify-items>; */
//    /*grid 属性简写： grid-template-rows、grid-template-columns、grid-template-areas、 grid-auto-rows、grid-auto-columns、grid-auto-flow */
//    /* grid-template属性简写: grid-template-columns、grid-template-rows和grid-template-areas */
// } 
.grid-layout {
  display: grid;
}

.test {
  justify-self: center;
  align-self: center;
}

.item1 {
  background-color: red;
  grid-row-start: footer;
  grid-column-end: 4;
  /* 
  grid-column-start 属性，
  grid-column-end 属性，
  grid-row-start 属性，
  grid-row-end 属性
  单独制定网格项的位置，可以设置网格项的起始位置和结束位置，可以设置网格项跨越的行数和列数
  */
}

.item3 {
  background-color:gray;
}
</style>
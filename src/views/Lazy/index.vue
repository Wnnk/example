<script setup>
import { onMounted, ref, nextTick, onUnmounted } from "vue";

let imageData = ref([]);
/** 
 * @description 模拟获取数据
 * @returns {void}
  */
async function getMoreData() {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=$%7Bpage%7D&_limit=50`
    );
  let newData = await response.json();

  imageData.value = [ ...newData];
}
let observer = ref(null);
const root = ref(null);

/** 
 * @description 初始化IntersectionObserver，监听root节点的子节点是否出现在交叉区
 * 
 *  
*/
const initIntersectionObserver = () => {
  observer.value = new IntersectionObserver(handlerObserve,{
    root: root.value,
    rootMargin: "0px 0px 800px 0px",
  });
  addObserve();
};
/** 
 * @description 处理IntersectionObserver的回调
 * @returns {void}
  */
const handlerObserve = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
     const targetImg = entry.target.children[0];
     console.log(entry)
     targetImg.src = targetImg.dataset.src;
     observer.value.unobserve(entry.target);
    }
  });
};

const addObserve = () => {
  const list = document.querySelectorAll(".image-item-box");
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    observer.value.observe(element);
  }
};
onMounted(async() => {
  await getMoreData();
  initIntersectionObserver();
});
onUnmounted(() => {
  observer.value.disconnect();
});
</script>

<template>
  <div class="lazy-content" ref="root">
    <div class="image-item-box" v-for="item in imageData" :key="item.id" >
      <!-- 最好能给src一张默认缺省图片 -->
      <img
        class="observeImg"
        src=""
        :data-src="item.url"
        alt="正在加载"
        :key="item.id"
        width="400"
      />
    </div>
    <!-- 拓展一下: 监视该区域出现在交叉区，向服务器请求更多数据 -->
    <div class="bottom-text">
      <!-- <span v-if="page < 50">正在为您加载更多...</span> -->
      <span>加载完毕~</span>
    </div>
  </div>
</template>

<style scoped>
.lazy-content {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
}
.image-item-box {
  width: 400px;
  height: 267px;
  background: #ccc;
  margin: 0 auto 1px;
}
</style>


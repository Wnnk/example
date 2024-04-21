<script lang="ts" setup>
import { ref, onMounted } from 'vue'
    const waterfallEl = ref(null)
      const waterfall = document.querySelector(".waterfall");
      let gap = 10;

      const createItem = (h) => {
        // 582 -> 590
        const e = document.createElement("div");
        e.classList.add("item");
        e.style.height = `${Math.ceil(h / gap) * gap}px`;
        e.style.gridRow = `span ${Math.ceil(h / gap) + 1}`;
        return e;
      };

        const addItem = (e) => {
            gap = +e.target.value * 10;
            waterfall.innerHTML = "";
            waterfallEl.value.style.gridAutoRows = `${gap}px`;
        };


      const append = () => {
        const e = createItem(Math.ceil(50 + Math.random() * 500));
        waterfallEl.value.appendChild(e);
      };

      const clickHandler = () => {
         new Array(100)
          .fill(0)
          .map((v) => Math.ceil(50 + Math.random() * 500))
          .map(createItem)
          .forEach((e) => waterfall.appendChild(e));
      };

</script>

<template>
    <div class="operation">
    <h2>Props</h2>

    <p>
    gap
    <input id="gap-range" type="range" value="1" min="1" max="10" @click="addItem" />
    </p>

    <p><button id="add" @click="append">Add</button></p>

    <p><button id="add100" @click="clickHandler">Add 100 items</button></p>
</div>

<div class="waterfall" ref="waterfallEl"></div>
</template>

<style scoped  lang='scss'>

</style>
        


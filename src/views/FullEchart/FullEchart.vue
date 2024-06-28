<script setup lang='ts'>
import HorizontalBar from './HorizontalBar.vue'
import MapChart from './MapChart.vue'
import RadarBar from './RadarBar.vue'
import RelationBar from './RelationBar.vue'
import RingBar from './RingBar.vue'
import TotalData from './TotalData.vue'
import FunctionArea from './FunctionArea.vue'
import WordCloud from './WordCloud.vue'
import setCurrentColor from './setCurrentColor.vue'
import {
  getHorizontalBarData,
  getWorldCloudData,
  getMapData,
  getTotalData,
} from '@/api/echartData'
import { ref, onMounted } from 'vue'

const horizontalBarData = ref();
const worldCloudData = ref();
const mapData = ref();
const totalData = ref();
const showFunctionArea = ref(false);

const showFunctionAreaHandler = (e: Event) => {
  // e.stopPropagation()
  showFunctionArea.value = !showFunctionArea.value
}

const FunctionAreaAfterLeave = () => {
  console.log('FunctionAreaAfterLeave')
  showFunctionArea.value = false
}

onMounted(async () => {
  horizontalBarData.value = await getHorizontalBarData()
  worldCloudData.value = await getWorldCloudData()
  mapData.value = await getMapData()
  totalData.value = await getTotalData()
})

</script>

<template>
  <div class="full-echart">
    <div class="left">
      <HorizontalBar v-if="horizontalBarData" :data="horizontalBarData.regions" />
      <RadarBar />
      <RelationBar />
    </div>
    <div class="center">
      <TotalData class="total-data" v-if="totalData" :data="totalData" />
      <MapChart class="map-chart" v-if="mapData" :data="mapData" />
    </div>
    <div class="right">
      <FunctionArea :showFunctionAreaHandler="showFunctionAreaHandler" />
      <RingBar />
      <WordCloud v-if="worldCloudData" :data="worldCloudData.datas" />
    </div>
    <setCurrentColor v-if="showFunctionArea" :showFunctionAreaHandler="showFunctionAreaHandler"
      :showFunctionArea="showFunctionArea" @after-leave="FunctionAreaAfterLeave" />
  </div>

</template>

<style lang='scss' scoped>
.full-echart {
  display: grid;
  grid-template-columns: 1fr 50% 1fr;
  grid-gap: 5px;
  background-image: url('../../assets/bg.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
  overflow: hidden;
  z-index: 10;
  width: 100vw;
}

.left {
  background-color: rgba(61, 72, 82, 0.5);
  margin: 12px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  padding: 8px;
}

.left>div {
  padding-bottom: 12px;
}

.center {
  margin: 12px;
  display: grid;
  grid-template-rows: 1fr 2fr;

  .total-data {
    background-color: rgba(61, 72, 82, 0.5);
    padding: 8px;
    margin-top: 12px;
  }

  .map-chart {
    background-color: rgba(61, 72, 82, 0.5);
    padding: 8px;
    margin-top: 12px;
    min-height: 500px;
  }
}

.right {
  background-color: rgba(61, 72, 82, 0.5);
  margin: 12px;
  display: grid;
  grid-template-rows: 100px 1fr 1fr;
  padding: 8px;
}

.right>div {
  padding-bottom: 12px;
}
</style>
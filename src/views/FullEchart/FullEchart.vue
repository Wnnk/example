<script setup lang='ts'>
import HorizontalBar from './HorizontalBar.vue'
import MapChart from './MapChart.vue'
import RadarBar from './RadarBar.vue'
import RelationBar from './RelationBar.vue'
import RingBar from './RingBar.vue'
import TotalData from './TotalData.vue'
import VerticalBar from './VerticalBar.vue'
import WordCloud from './WordCloud.vue'
</script>

<template>
  <div class="full-echart">
    <div class="left">
      <HorizontalBar />
      <RadarBar />
      <RelationBar />
    </div>
    <div class="center">
      <TotalData class="total-data" />
      <MapChart class="map-chart" />
    </div>
    <div class="right">
      <VerticalBar />
      <RingBar />
      <WordCloud />
    </div>
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
  grid-template-rows: repeat(2, 1fr);

  .total-data {
    background-color: rgba(61, 72, 82, 0.5);
    padding: 8px;
    margin-top: 12px;
  }

  .map-chart {
    background-color: rgba(61, 72, 82, 0.5);
    padding: 8px;
    margin-top: 12px;
  }
}

.right {
  background-color: rgba(61, 72, 82, 0.5);
  margin: 12px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  padding: 8px;
}

.right>div {
  padding-bottom: 12px;
}
</style>
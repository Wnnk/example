<script setup lang='ts'>
import { onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts'
import chinaMap from '@/assets/china.json'


const props = defineProps({
  data: {
    type: Object,
    required: false,
  }
})


const target = ref()
let mChat = ref();
onMounted(() => {
  echarts.registerMap('china', chinaMap as any)
  mChat.value = echarts.init(target.value)
  renderChart()
})
const renderChart = () => {
  const options = {
    timeline: {
      data: props.data?.voltageLevel,
      axisType: 'category',
      autoPlay: true,
      playInterval: 3000,
      left: '10%',
      right: '10%',
      bottom: '0%',
      width: '80%',
      label: {
        normal: {
          textStyle: {
            color: '#ddd'
          },
          emphasis: {
            textStyle: {
              color: '#fff'
            }
          }
        }
      },
      symbolSize: 10,
      lineStyle: {
        color: '#555'
      },
      checkpointStyle: {
        borderColor: '#888',
        borderWidth: 2,
      },
      controlStyle: {
        showNextBtn: true,
        showPrevBtn: true,
        normal: {
          color: '#666',
          borderColor: '#666'
        },
        emphasis: {
          color: '#aaa',
          borderColor: '#aaa'
        }
      }
    },
    baseOption: {
      grid: {
        right: "2%",
        top: "15%",
        bottom: "10%",
        width: "20%",
      },
      geo: {
        show: true,
        map: 'china',
        roam: true,
        zoom: 1.2,
        center: [113.83531246, 34.0267395887],
        itemStyle: {
          normal: {
            borderColor: 'rgba(147,235,248,1)',
            borderWidth: 0.8,
            areaColor: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(147,235,248,0)'
                },
                {
                  offset: 1,
                  color: 'rgba(147,235,248,0.2)'
                },
              ]
            }
          }
        },
        emphasis: {
          areaColor: '389BB7',
          borderWidth: 0,
        }
      }
    },
    options: [] as any[],
  }
  props.data?.voltageLevel.forEach((item: any, index: number) => {
    options.options.push({
      title: [
        {
          text: '2019-2024年',
          left: '0%',
          top: "0%",
          textStyle: {
            color: '#ccc',
            contSize: 30,
          }
        },
        {
          id: 'statistic',
          text: item + '统计情况',
          right: '0%',
          top: "4%",
          textStyle: {
            color: '#ccc',
            contSize: 30,
          }
        }
      ],
      xAxis: {
        type: 'value',
        scale: true,
        position: 'top',
        splitLine: {
          show: false
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          margin: 2,
          textStyle: {
            color: '#aaa',
          }

        },
      },
      yAxis: {
        type: 'category',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#ddd',
          }
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          interval: 0,
          textStyle: {
            color: '#ddd',
          }
        },
        data: props.data?.categoryData[item].map((item: any) => item.name),
      },
      series: [
        {
          type: 'bar',
          zlevel: 1.5,
          itemStyle: {
            normal: {
              color: props.data?.colors[index]
            },
          },
          data: props.data?.categoryData[item].map((item: any) => item.value),
        },
        {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: props.data?.topData[item],
          sybbolSize: function (val: any) {
            return val[2] / 4
          },
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke',
            scale: 3,
            period: 3,
          },
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: true,
            }
          },
          itemStyle: {
            normal: {
              color: props.data?.colors[index],
              shadowBlur: 5,
              shadowColor: props.data?.colors[index],
            },
          },
        }
      ]
    })
  })

  if (mChat.value !== null) {
    mChat.value.setOption(options)
  }

}

watch(() => props.data, () => {
  renderChart()
})


</script>

<template>
  <div ref="target">

  </div>
</template>

<style lang='scss' scoped></style>
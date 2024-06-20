import { defineStore } from "pinia";
import { ref } from "vue";

export const echartColorStore = defineStore("echartColor", () => {
  const currentColor = ref('#5d98ce')
  const changeColor = (color: string) => {
    currentColor.value = color
  }
  return {
    currentColor,
    changeColor
  }
});
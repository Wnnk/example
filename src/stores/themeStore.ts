import { defineStore } from "pinia";
import { ref } from "vue";

export const useThemeStore = defineStore("themeStore", () => {
  const currentColorArray = ref<string[]>()
  /* 根据颜色组跟新当前颜色组 */
  const updateCurrentColorByArray = (color:string[]) => {
    currentColorArray.value = color
  }

  return {
    updateCurrentColorByArray,
    currentColorArray
  }
});
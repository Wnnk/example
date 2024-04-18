<script setup lang='ts'>
import { ref } from 'vue'
import { requestUpload, createProgress } from '@/utils/upload'

/* 
  1.获取input选择的文件

*/

/* 上传大文件变量  */
const inputEl = ref(HTMLInputElement)
/**
 * @description: 选择上传文件
 */
  const selectFile = (e:Event) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) {
      const chunkList =createChunks(file, 1024 * 1024 * 2); // 2MB
      const uploadChunkList = chunkList.map((chunk, index) => {
        
        return{
          file:chunk,
          size: chunk.size,
          chunkName:`${file.name}_${index}`,
          fileName: file.name,
          parcent: 0,
          index,
        }
      });
      const formData = uploadChunks(uploadChunkList);
    }
  }

/** 
 * @description: 大文件分片
 * @param {File} file 文件对象
 * @param {number} chunkSize 分片大小
 * @returns {Blob[]}: 返回分片数组
 */
  const createChunks = (file: File, chunkSize: number): Blob[] => {
    const chunkList: Blob[] = [];
    let cur = 0;
    while (cur < file.size) {
      chunkList.push(file.slice(cur, cur + chunkSize));
      cur += chunkSize;
    }
    return chunkList;
  }

/** 
 * @description: 上传分片
 * @returns [{formData,index}] formData: FormData对象, index: 分片索引
 * 
  */
  const uploadChunks = (uploadChunkList : any[]) => {
    const res = uploadChunkList.map(({file,chunkName,fileName,index }) => {
      /* 将Blob对象转换为formData对象 */
      const formData = new FormData();
      /* 将分片添加到formData对象 */
      formData.append('file', file);
      formData.append('fileName', fileName);
      formData.append('chunkName', chunkName);
      return {
        formData,
        index,
      };  
    });
    const requestList = res.map(({formData,index}) => {
      return requestUpload({
        url: 'http://localhost:3000/upload',
        method: 'post',
        data: formData,
        // onUploadProgress: createProgress(formData[index]),
      });
    });
  };
</script>

<template>
  <div>
    <h1>Upload</h1>
    <input type="file" @change="selectFile" ref="inputEl" />
  </div>
</template>

<style lang='scss' scoped>
</style>
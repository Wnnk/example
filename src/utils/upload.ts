import axios from 'axios';
import type { AxiosRequestConfig, Method, AxiosResponse, AxiosProgressEvent } from 'axios'; 
interface UploadOptions {
    url: string
    method?: Method
    data: any
    headers?: any
    onUploadProgress?: (progressEvent: AxiosProgressEvent) => void
}
const requestUpload = ({ url, method = 'post', data, headers = {}, onUploadProgress }:UploadOptions):Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
      const config: AxiosRequestConfig = {
        method,
        url,
        data,
        headers,
        onUploadProgress,
      };
      axios(config)
       .then((res:AxiosResponse) => {
          resolve(res);
       })
       .catch(err => {
        reject(err);
       })
  })
}

/**
 * @description: 分片上传文件进度条
 * @param item: 文件对象
 *   */
const createProgress = (item:any) => {
  return (e:any) => {
    item.percent = parseInt(String(e.loaded / e.total * 100))
  }
}

export { requestUpload, createProgress }

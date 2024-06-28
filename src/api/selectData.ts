const options = [{
  value: '选项1',
  label: '黄金糕'
}, {
  value: '选项2',
  label: '双皮奶'
}, {
  value: '选项3',
  label: '蚵仔煎'
}, {
  value: '选项4',
  label: '龙须面'
}, {
  value: '选项5',
  label: '北京烤鸭'
}]
/* 快速返回 */
export const getSelectData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve({
        code: 200,
        data: options
      })
    },1000)
    
  })
}

/* 延迟返回 */
export const delayGetSelectData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: 200,
        data: options
      })
    },10000)
  })
}

/* 错误返回 */
export const errorGetSelectData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({
        code: 500,
        data: [],
      })
    },1000)
    
  })
}

/* 空数据 */
export const emptyGetSelectData = () => {
  return new Promise((resolve, reject) => {
    resolve({
      code: 200,
      data: []
    })
  })
}

/* 返回不同格式的数据 */
export const getDifferentFormatData = () => {
  return new Promise((resolve, reject) => {
    resolve({
      code: 200,
      data: {
        options: options,
        total: 5
      }
    })
  })
}


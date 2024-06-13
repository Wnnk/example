const MAX_LENGTH = 10;
const MSG_TYPE_COUNT = 4;

/** 
 * @description 生成一条信息
 * @param {*} value
 * @returns {id:string, value:any, type:number}
  */
export const createMsg = (value:any) =>{
  return {
    id: `p2p${Date.now()}_${Math.floor(Math.random() * 1000)}_${Math.floor(Math.random() * 100000000000)}`,
    value,
    type: Math.floor(Math.random() * MSG_TYPE_COUNT),
  }
}; 

/** 
 * @description 模拟分页，滚动加载信息
 * @param {*} page
 * @param {*} size
 * @returns {Promise<Array<id:string, value:any, type:number>>}
 */
type listItemType = {
  id: string,
  value: any,
  type: number,
}
export const fetchData = (page:number, size:number):Promise<listItemType[]> => {
  return new Promise((resolve, reject) => {
    if (page * size > MAX_LENGTH) {
      alert('数据已全部加载完毕')
      reject();
    } else {
      console.log('数据加载中...');
      setTimeout(() => {
        const data = [];
        for(let i = 0; i < size; i++) {
          data.push(createMsg(page * size + i))
        }
        resolve(data);
      }, Math.random() * 500);
    }
  })
};


/**
 * @description 自定义消息类型高度
 * @param {*} type
 * @returns 
  */

export const getMsgHeight = (type:number) => {
  let hegiht = 0;
  switch(type) {
    case 0: // 文字
    hegiht = Math.random() * 20 + 20;
    break;
    case 1: // 图片
      hegiht = 200;
      break;
    case 2: //视频
      hegiht = 48;
      break;
    case 3: //音频
      hegiht = 80;
      break;
    default: //其他
      hegiht = 43;
      break;
  }
  return hegiht;
} 
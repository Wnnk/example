const HorizontalBarData = {
  regions:[
    {id:1,name:'东北',value:63},
    {id:2,name:'华北',value:55},
    {id:3,name:'华东',value:48},
    {id:4,name:'华南',value:38},
    {id:5,name:'西北',value:32},
    {id:6,name:'西南',value:28},
    {id:7,name:'中南',value:24},
    {id:8,name:'中西',value:20},
    {id:9,name:'其他',value:16}
  ]
}

export const getHorizontalBarData = () => {
  return new Promise((resolve, reject) => {
    resolve(HorizontalBarData)
  })
}

const worldCloudData = {
  datas:[
    {value:24, name:'企联网'},
    {value:20, name:'中兴通讯'},
    {value:16, name:'中兴商业'},
    {value:12, name:'中兴物流'},
    {value:8, name:'中兴电信'},
    {value:4, name: '红米'},
    {value:2, name: '小米'},
    {value:2, name: '华为'},
    {value:2, name: 'OPPO'},
    {value:2, name: 'vivo'},
    {value:2, name: '联想'},
    {value:2, name: '魅族'},
    {value:2, name: '酷派'},
    {value:2, name: '一加'},
    {value:2, name: '努比亚'},
    {value:2, name: '步步高'},
    {value:2, name: '摩托罗拉'},
    {value:2, name: '朵唯'},
    {value:2, name: '金立'},
    {value:2, name: '三星'},
    {value:2, name: '索尼'},
    {value:2, name: '诺基亚'},
    {value:2, name: 'LG'},
  ]
}

export const getWorldCloudData = () => {
  return new Promise((resolve, reject) => {
    resolve(worldCloudData)
  })
}

const mapData = {
  categoryData:{
    2019:[
      {value:90, name:'北京'},
      {value:35, name:'天津'},
      {value:56, name:'河北'},
      {value:45, name:'山西'},
      {value:30, name:'内蒙古'},
      {value:20, name:'吉林'},
      {value:30, name:'辽宁'},
      {value:25, name:'黑龙江'},
      {value:10, name:'上海'},
      {value:15, name:'江苏'},
      {value:35, name:'安徽'},
      {value:25, name:'浙江'},
      {value:20, name:'福建'},
      {value:78, name:'河南'},
    ],
    2020:[
      {value:85, name:'北京'},
      {value:19, name:'天津'},
      {value:29, name:'河北'},
      {value:39, name:'山西'},
      {value:18, name:'内蒙古'},
      {value:16, name:'吉林'},
      {value:14, name:'辽宁'},
      {value:72, name:'黑龙江'},
      {value:62, name:'上海'},
      {value:48, name:'江苏'},
      {value:29, name:'安徽'},
      {value:17, name:'浙江'},
      {value:17, name:'福建'},
      {value:26, name:'河南'},
    ],
    2021:[
      {value:53, name:'北京'},
      {value:35, name:'天津'},
      {value:51, name:'河北'},
      {value:49, name:'山西'},
      {value:25, name:'内蒙古'},
      {value:39, name:'吉林'},
      {value:20, name:'辽宁'},
      {value:14, name:'黑龙江'},
      {value:17, name:'上海'},
      {value:11, name:'江苏'},
      {value:24, name:'安徽'},
      {value:51, name:'浙江'},
      {value:12, name:'福建'},
      {value:48, name:'河南'},
    ],
    2022:[
      {value:90, name:'北京'},
      {value:65, name:'天津'},
      {value:51, name:'河北'},
      {value:42, name:'山西'},
      {value:41, name:'内蒙古'},
      {value:46, name:'吉林'},
      {value:24, name:'辽宁'},
      {value:29, name:'黑龙江'},
      {value:30, name:'上海'},
      {value:41, name:'江苏'},
      {value:21, name:'安徽'},
      {value:18, name:'浙江'},
      {value:15, name:'福建'},
      {value:27, name:'河南'},
    ],
    2023:[
      {value:69, name:'北京'},
      {value:63, name:'天津'},
      {value:29, name:'河北'},
      {value:47, name:'山西'},
      {value:72, name:'内蒙古'},
      {value:68, name:'吉林'},
      {value:39, name:'辽宁'},
      {value:33, name:'黑龙江'},
      {value:41, name:'上海'},
      {value:62, name:'江苏'},
      {value:74, name:'安徽'},
      {value:37, name:'浙江'},
      {value:63, name:'福建'},
      {value:93, name:'河南'},
    ],
    2024:[
      {value:88, name:'北京'},
      {value:43, name:'天津'},
      {value:22, name:'河北'},
      {value:53, name:'山西'},
      {value:24, name:'内蒙古'},
      {value:63, name:'吉林'},
      {value:22, name:'辽宁'},
      {value:83, name:'黑龙江'},
      {value:39, name:'上海'},
      {value:29, name:'江苏'},
      {value:27, name:'安徽'},
      {value:38, name:'浙江'},
      {value:19, name:'福建'},
      {value:58, name:'河南'},
    ],
  },
  voltageLevel:['2019','2020','2021','2022','2023','2024'],
  colors:['#1de9b6','#f46e36','#04b9ff','#5dbd32','#ffc809','#fb95d5','#bda29a','#6e7074','#546470', '#c4ccd3'],
  topData:{
    2019:[
      {name:'天津', value:[117.4219, 39.4189, 84.1]},
      {name:'河北', value:[114.4995, 38.042, 83.1]},
      {name:'山西', value:[112.5623, 37.8726, 82.1]},
      {name:'吉林', value:[126.6323, 43.8466, 81.1]},
      {name:'辽宁', value:[123.4291, 41.8354, 80.1]},
      {name:'上海', value:[121.4737, 31.2304, 79.1]},
      {name:'安徽', value:[117.2272, 31.8611, 78.1]},
      {name:'福建', value:[119.3063, 26.0745, 77.1]},
      {name:'河南', value:[113.4862, 34.682, 76.1]},
    ],
    2020:[
      {name:'北京', value:[116.413554, 39.911013,69.1]},
      {name:'厦门', value:[118.095915, 24.485821,56.2]},
      {name:'广州', value:[113.264435, 23.15209,55.2]},
      {name:'深圳', value:[114.057866, 22.543099,54.2]},
      {name:'杭州', value:[120.15507, 30.274085,53.2]},
      {name:'南京', value:[118.796877, 32.060255,52.2]},
      {name:'合肥', value:[117.227216, 31.820553,51.2]},
      {name:'武汉', value:[114.38965, 30.662825,50.2]},
      {name:'长沙', value:[113.082321, 28.256836,49.2]},
      {name:'郑州', value:[113.649636, 34.75661,48.2]},
    ],
    2021:[
      {name:'宁波', value:[121.556686, 29.880177, 46.3]},
      {name:'青岛', value:[120.38268, 36.06708, 45.3]},
      {name:'苏州', value:[120.619995, 31.317981, 44.3]},
      {name:'无锡', value:[120.30545, 31.56703, 43.3]},
      {name:'南昌', value:[115.858197, 28.682988, 42.3]},
      {name:'济南', value:[117.000923, 36.675807, 41.3]},
      {name:'杭州', value:[120.15507, 30.274085, 37.3]},
      {name:'成都', value:[104.071216, 30.576279,52.3]},
    ],
    2022:[
      {name:'南京', value:[118.796877, 32.060255, 36.3]},
      {name:'苏州', value:[120.619995, 31.317981, 35.3]},
      {name:'无锡', value:[120.30545, 31.56703, 34.3]},
      {name:'杭州', value:[120.15507, 30.274085, 33.3]},
      {name:'济南', value:[117.000923, 36.675807, 32.3]},
      {name:'青岛', value:[120.38268, 36.06708, 31.3]},
      {name:'宁波', value:[121.556686, 29.880177, 30.3]},
      {name:'厦门', value:[118.095915, 24.485821, 29.3]},
      {name:'长沙', value:[113.082321, 28.256836, 28.3]},
      {name:'合肥', value:[117.227216, 31.820553, 27.3]},
    ],
    2023:[
      {name:'汕头', value:[116.688739, 23.359289, 26.3]},
      {name:'南宁', value:[108.366997, 22.817003, 25.3]},
      {name:'北海', value:[109.12009, 21.481109, 24.3]},
      {name:'海口', value:[110.331196, 20.022071, 23.3]},
      {name:'贵阳', value:[106.630157, 26.647634, 21.3]},
      {name:'昆明', value:[102.714607, 25.049153, 20.3]},
      {name:'福州', value:[119.306236, 26.075308, 19.3]},
    ],
    2024:[
      {name:'兰州', value:[103.834305, 36.061379, 18.3]},
      {name:'西宁', value:[101.778239, 36.623314, 17.3]},
      {name:'银川', value:[106.230901, 38.487155, 16.3]},
      {name:'乌鲁木齐', value:[87.617733, 43.843577, 16.3]},
      {name:'银川', value:[106.230901, 38.487155, 15.3]},
      {name:'长春', value:[125.3245, 43.886841, 14.3]},
      {name:'沈阳', value:[123.432792, 41.808689, 13.3]},
      {name:'石家庄', value:[114.4995, 38.042, 12.3]},
      {name:'保定', value:[115.482349, 38.867657, 11.3]},
    ],
  }
}

export const getMapData = () => {
  return new Promise((resolve, reject) => {
    resolve(mapData)
  })
}

const totalData = {
  db:'65446',
  hd: '87788',
  total: '6794739',
  xb: '75753',
  xn: '74654',
  zn:'42135',
  hx:'32134',
}

export const getTotalData = () => {
  return new Promise((resolve, reject) => {
    resolve(totalData)
  })  
}

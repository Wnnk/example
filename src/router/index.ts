import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Upload/uploadFile.vue')
    },
    {
      path: '/scrollList',
      name:'scrollList',
      component: () => import('@/views/ScrollList/scrollList.vue')
    },
    {
      path:'/lazy',
      name:'lazy',
      component: () => import('@/views/Lazy/index.vue')
    },
    {
      path:'/layout',
      name:'layout',
      component: () => import('@/views/Layout/indexPage.vue'),
      children: [
        {
          path: '/layout/flex',
          name: 'flex',
          component: () => import('@/views/Layout/flexLayout.vue')
        },
        {
          path: '/layout/grid',
          name: 'grid',
          component: () => import('@/views/Layout/gridLayout.vue')
        }
      ]
    },
    {
      path: '/waterFall',
      name: 'waterFall',
      component: () => import('@/views/WaterFall/waterFall.vue')
    },
    {
      path:'/echarts',
      name:'echarts',
      component: () => import('@/views/Echarts/testEchart.vue'),
    },
    {
      path:'/fullEchart',
      name:'fullEchart',
      component: () => import('@/views/FullEchart/FullEchart.vue'),
    },
    {
      path: '/select',
      name:'select',
      component: () => import('@/views/Select/SelectIndex.vue')
    },
    {
      path:'/slot',
      name:'slot',
      component: () => import('@/views/Slot/SlotIndex.vue')
    },
    {
      path:'/input',
      name:'input',
      component: () => import('@/views/Input/InputExample.vue')
    }
  ]
})

export default router

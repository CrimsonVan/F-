import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores'
const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(import.meta.env.BASE_URL),

  // history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Layout/HomeView.vue'),
      redirect: '/homepage',
      children: [
        {
          path: '/homepage',
          name: 'homepage',
          component: () => import('../views/Home/homePage.vue')
        },
        {
          path: '/cart',
          name: 'cart',
          component: () => import('../views/Cart/CartPage.vue')
        },
        {
          path: '/checkout',
          name: 'checkout',
          component: () => import('../views/Checkout/CheckoutPage.vue')
        },
        {
          path: '/detail',
          name: 'detail',
          component: () => import('../views/Detail/detailPage.vue')
        },

        {
          path: '/category/:id',
          component: () => import('@/views/Category/categoryPage.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',

      component: () => import('../views/Login/LoginPage.vue'),
      children: [
        {
          path: '/employee',
          component: () => import('../views/Login/LoginPage.vue')
        }
      ]
    },
    {
      path: '/test',
      name: 'test',

      component: () => import('../views/test/testPage.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/NotFound/notFound.vue')
    }
  ]
})

router.beforeEach((to) => {
  // 如果没有token, 且访问的是非登录页，拦截到登录，其他情况正常放行
  const useStore = useUserStore()
  console.log('打印打包后的测试')

  if (!useStore?.userInfo?.token && to.path !== '/login') return '/login'
})

export default router

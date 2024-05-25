import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    meta: {
      title: 'Home'
    },
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    meta: {
      title: 'About'
    },
    component: () => import('@/views/About.vue')
  },
  {
    path: '/user',
    meta: {
      title: 'User'
    },
    component: () => import('@/views/Users.vue')
  },
  {
    path: '/appointment',
    meta: {
      title: 'Appointment'
    },
    component: () => import('@/views/SetAppointment.vue')
  },
  {
    path: '/services',
    meta: {
      title: 'Service'
    },
    component: () => import('@/views/Service.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    // Scroll to the top of the page on route navigation
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} | Motor Service` : 'Motor Service'
  next()
})

export default router

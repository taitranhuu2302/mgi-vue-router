import * as VueRouter from 'vue-router'

const routes: VueRouter.RouteRecordRaw[] = [
  {
    path: '/',
    components: {
      default: () => import('@/layouts/RootLayout.vue'),
      Header: () => import('@/components/HeaderComponent.vue')
    },
    children: [
      {
        path: '',
        strict: true,
        components: {
          default: () => import('@/views/HomeView.vue')
        }
      },
      {
        path: 'books/:slug',
        name: 'book-detail',
        components: {
          default: () => import('@/views/BookDetailView.vue')
        }
      },
      {
        path: 'authors/:id',
        name: 'author-detail',
        components: {
          default: () => import('@/views/AuthorDetailView.vue')
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('@/views/ErrorView.vue')
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})

export default router

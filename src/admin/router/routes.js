export default [
  {
    path: '/login',
    component: () => import('@/admin/views/Login.vue'),
    meta: {
      public: true,
    },
  },
  {
    path: '/',
    component: () => import('@/admin/views/Main.vue'),
    children: [
      {
        path: '/',
        component: () => import('@/admin/views/About.vue'),
        meta: {
          title: 'Блок «Обо мне»',
        },
      },
      {
        path: '/works',
        component: () => import('@/admin/views/Works.vue'),
        meta: {
          title: 'Блок «Работы»',
        },
      },
      {
        path: '/reviews',
        component: () => import('@/admin/views/Reviews.vue'),
        meta: {
          title: 'Блок «Отзывы»',
        },
      },
    ],
  },
  {
    path: '*',
    redirect: '/',
  },
];

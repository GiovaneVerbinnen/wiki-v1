
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/View', component: () => import('pages/ListUsers.vue')
  },
  {
    path: '/Edit', component: () => import('pages/EditUser.vue')
  },
  {
    path: '/Create', component: () => import('pages/CreateUser.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

import MainLayout from 'layouts/MainLayout'
import View from 'pages/ListUsers.vue'
import Edit from 'pages/EditUser.vue'
import Create from 'pages/CreateUser.vue'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: 'view', component: View
      },
      {
        path: 'edit', component: Edit
      },
      {
        path: 'create', component: Create
      },
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

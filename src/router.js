import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/measures',
      component: () => import('./views/MeasuresPage.vue'),
    },
    { name: 'productsCard', 
    path: '/:id', 
    component: () => import('./views/RecipeCard.vue')
  },
    ],
})

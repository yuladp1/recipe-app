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
      name: 'RecipeCard',
      props: true,
      path: '/recipe-id-:id',
      component: () => import('./views/RecipeCard.vue')
    },
    {
      name: 'DishRecipes',
      props: true,
      path: '/:dish',
      component: () => import('./views/DishRecipes.vue')
    }
  ],
})

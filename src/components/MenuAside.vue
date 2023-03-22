<template>
  <aside class="menu py-0 has-text-weight-semibold aside__container ">
   
    <ul class="menu-list is-size-6 ">
      <div v-for="item in recipesStore.dishes" :key="item">
        <router-link
          :to="{ name: 'DishRecipes', params: { dish: item } }"
        >
          <li>{{ item }}</li>
        </router-link>
      </div>
    </ul>
  </aside>
</template>

<script>
import { useCatalog } from "../stores/recipeStore";
export default {
  name: "MenuAside",
  setup() {
    const recipesStore = useCatalog();
    return { recipesStore };
  },
};
</script>

<style lang="scss">
$menu-item-hover-color: white;
.aside__container {
   margin-top: 110px;
  letter-spacing: 2px;
  font-weight: 600;
  font-family: 'Pacifico', cursive;
}
li {
 font-family: 'Pacifico', cursive; 
}
li:hover {
  color: #a50d0d;
  text-decoration: underline;
  
}
</style>

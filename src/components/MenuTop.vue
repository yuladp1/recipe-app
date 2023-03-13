<template>
  <div class="navbar columns py-2 is-light is-spaced has-shadow">
    <div class="navbar-brand">
      <div class="navbar-item">
        <router-link to="/" class="title is-size-3 recipe__header-content"
          >Recipe App</router-link
        >
      </div>
      <div class="navbar-item is-hidden-desktop">
        <div class="dropdown is-hoverable">
          <div class="dropdown-trigger">
            <button
              class="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
            >
              <span>Let's go to:</span>
              <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <div
                v-for="item in recipesStore.recipes"
                :key="item.ID"
                class="dropdown-item"
              >
                <router-link
                  :to="{
                    name: 'DishRecipes',
                    params: { dish: item.kindOfDish },
                  }"
                >
                  <p>- {{ item.kindOfDish }}</p>
                </router-link>
                <hr class="dropdown-divider" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end ">
        <div class="navbar-item ">
          <button
            class="button is-primary is-normal "
            @click="recipesStore.showmodal = true"
          >
            Add new recipe
          </button>
        </div>
      </div>
    </div>
  </div>
  <ModalRecipe
    class="modal"
    :class="{ 'is-active': recipesStore.showmodal }"
  ></ModalRecipe>
</template>
<script>
import { useCatalog } from "../stores/recipeStore";
import ModalRecipe from "./ModalRecipe.vue";
export default {
  setup() {
    const recipesStore = useCatalog();
    return { recipesStore };
  },
  components: {
    ModalRecipe,
  },
};
</script>
<style>
.recipe__header-content {
  line-height: 100%;
}
</style>

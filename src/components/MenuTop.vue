<template>
  <div class="navbar columns py-2 is-spaced is-fixed-top top__navbar">
    <div class="navbar-brand">
      <div class="navbar-item">
        <router-link to="/" class="title is-size-3"
          ><span class="recipe__header-content"> Recipe App</span></router-link
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
      <div class="navbar-end">
        <div class="navbar-item">
          <button
            class="button is-large top-nav__button"
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
    v-if="recipesStore.showmodal"
  ></ModalRecipe>
</template>

<script>
import { useCatalog } from "../stores/recipeStore";
import ModalRecipe from "./ModalRecipe.vue";
import { onMounted } from "vue";

export default {
  components: {
    ModalRecipe,
  },
  setup() {
    const recipesStore = useCatalog();

    onMounted(() => {
      window.addEventListener("scroll", function () {
        var navbar = document.querySelector(".navbar");
        navbar.classList.toggle("navbar__small", window.scrollY > 0);
        var recipe__header = document.querySelector(".recipe__header-content");
        recipe__header.classList.toggle(
          "recipe__header-small",
          window.scrollY > 0
        );
      });
    });

    return { recipesStore };
  },
};
</script>

<style>
.navbar {
  height: 120px;
  border-bottom: 1px solid grey;
  transition: height 0.3s ease;
}
.navbar__small {
  height: 70px;
}

.recipe__header-content {
  font-family: "Pacifico", cursive;
  font-size: 56px;
  line-height: 100%;
  color: #054b03;
  transition: font-size 0.3s ease;
}
.recipe__header-small {
  font-size: 36px;
}
.top-nav__button {
  font-family: "Amatic SC", cursive;
  letter-spacing: 2px;
  font-weight: 800;
}
</style>

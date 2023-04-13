<template>
  <div class="navbar is-fixed-top top__navbar">
    <div class="navbar-brand level">
      <router-link to="/">
        <div class="level-item recipe__header-content px-3 ">
          Recipe App
        </div></router-link
      >
      <div class="level-item is-hidden-desktop">
        <div class="dropdown is-hoverable">
          <div class="dropdown-trigger dropdown__title recipe__header-content">Let's go to:</div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <div
                v-for="item in recipesStore.dishes"
                :key="item.ID"
                class="dropdown-item"
              >
                <router-link
                  :to="{
                    name: 'DishRecipes',
                    params: { dish: item },
                  }"
                >
                  <p>- {{ item }}</p>
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
import { gsap } from "gsap";

export default {
  components: {
    ModalRecipe,
  },
  setup() {
    const recipesStore = useCatalog();
    const logoAnimation = () => {
      gsap.from(".recipe__header-content", {
        opacity: 0,
        duration: 2,
        delay: 0.5,
        x: -200,
      });
    };

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
      logoAnimation();
    });

    return { recipesStore, logoAnimation };
  },
};
</script>

<style>
.navbar__small {
  height: 70px;
}
.recipe__header-content {
  font-family: "Pacifico", cursive;
  color: #054b03;
  font-size: 42px;
}
.recipe__header-small {
  font-size: 36px;
}
.dropdown__title {
  font-family: "Amatic SC", cursive;
  letter-spacing: 2px;
  font-weight: 800;
  color: black;
   margin-left: auto;
   font-size: 1.5rem;
}
.dropdown__title:hover {
  cursor: pointer;
}
.top-nav__button {
  font-family: "Amatic SC", cursive;
  letter-spacing: 2px;
  font-weight: 800;
}
</style>

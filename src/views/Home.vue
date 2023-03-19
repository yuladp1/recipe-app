<template>
  <div class="columns is-multiline has-text-centered px-0 mx-0">
    <div class="column is-full box py-6 px-4 recipe-app__content">
      <h1 class="title is-2 is-uppercase is-spaced">Welcome to the recipe app</h1>
      <h2 class="subtitle is-3">
        This app will help you save your favorite recipes fast
      </h2>
      <button
        class="button is-large is-primary m-2"
        @click="recipesStore.showmodal = true"
      >
        Add new recipe
      </button>
      <button class="button is-large is-link m-2" @click="recipesStore.showItems(1)">
        Show all
      </button>
    </div>

    <div class="column is-full box has-background-success" v-if="recipesStore.showAll">
      <div class="columns is-multiline px-3 py-3">
        <div
          class="card column is-one-third my-3"
          v-for="item in recipesStore.temp"
          :key="item.ID"
        >
          <router-link
            :to="{
              name: 'RecipeCard',
              params: { id: item.ID },
            }"
          >
            <div class="card-header title is-4 px-3 py-3 is-shadowless has-text-link">
              {{ item.RecipeTitle }}
            </div></router-link
          >
          <div
            class="card-content is-italic is-4 has-text-justified is-shadowless card__recipe-content"
          >
            {{ item.ingredients }}
          </div>
          <router-link :to="{ name: 'DishRecipes', params: { dish: item.kindOfDish } }">
            <div class="card-content is-size-5 has-text-weight-semibold">
              Serve as: {{ item.kindOfDish }}
            </div>
          </router-link>

          <div class="card-footer">
            <div class="card-footer-item">
              <router-link
                :to="{
                  name: 'RecipeCard',
                  params: { id: item.ID },
                }"
              >
                <button class="button is-info is-medium card-footer-item">
                  See more...
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="column" v-if="recipesStore.showAll">
        <nav class="pagination" role="navigation" aria-label="pagination">
          <a class="pagination-previous" @click="this.recipesStore.showPrevious()"
            >Previous</a
          >
          <a class="pagination-next" @click="this.recipesStore.showNext()">Next page</a>

          <ul
            class="pagination-list"
            v-for="page in recipesStore.arrayOfPages"
            :key="page"
          >
            <li>
              <a
                class="pagination-link"
                :class="{ 'is-current': page == recipesStore.currentPage }"
                aria-label="Goto page {page}"
                @click="recipesStore.showItems(page)"
                >{{ page }}</a
              >
            </li>
          </ul>
        </nav>
      </div>
    <ModalRecipe
      class="modal"
      :class="{ 'is-active': recipesStore.showmodal }"
    ></ModalRecipe>
  </div>
</template>
<script>
import ModalRecipe from "../components/ModalRecipe.vue";
import { useCatalog } from "../stores/recipeStore";
import { mapState, mapActions } from "pinia";
export default {
  setup() {
    const recipesStore = useCatalog();
    return { recipesStore };
  },
  name: "Home",
  components: {
    ModalRecipe,
  },
  computed: {
    ...mapState(useCatalog, { recipes: "results" }),
  },

  methods: {
    ...mapActions(useCatalog, ["fetchNewArrivals"]),
  },

  created() {
    this.fetchNewArrivals();
    this.recipesStore.calculateAmountPages();
  },
};
</script>

<style scoped>
.recipe-app__content {
  background-image: url("../assets/pexels-diana-light-7296683.jpg");
  background-size: cover;
  background-position: center center;
}
.card__recipe-content {
  max-height: 150px;

  overflow: hidden;
}
</style>

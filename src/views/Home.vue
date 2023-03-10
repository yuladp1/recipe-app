<template>
  <div class="columns is-multiline has-text-centered px-0 mx-0">
    <div class="column is-full box py-6 px-4 recipe-app__content">
      <h1 class="title is-2 is-uppercase is-spaced">
        Welcome to the recipe app
      </h1>
      <h2 class="subtitle is-3">
        This app will help you save your favorite recipes fast
      </h2>
      <button
        class="button is-large is-primary m-2"
        @click="recipesStore.showmodal = true"
      >
        Add new recipe
      </button>
      <button
        class="button is-large is-link m-2"
        @click="recipesStore.showAll = !recipesStore.showAll"
      >
        Show all
      </button>
    </div>

    <div
      class="column is-full box has-background-success"
      v-if="recipesStore.showAll"
    >
      <div class="columns is-multiline px-3 py-3">
        <div
          class="card column is-one-third my-3"
          v-for="item in recipesStore.recipes"
          :key="item.ID"
        >
          <router-link
            :to="{
              name: 'RecipeCard',
              params: { id: item.ID },
            }"
          >
            <div
              class="card-header title is-4 px-3 py-3 is-shadowless has-text-link"
            >
              {{ item.RecipeTitle }}
            </div></router-link
          >
          <div
            class="card-content is-italic is-4 has-text-justified is-shadowless card__recipe-content"
          >
            {{ item.ingredients }}
          </div>
          <router-link
            :to="{ name: 'DishRecipes', params: { dish: item.kindOfDish } }"
          >
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

    <div class="column">
      <nav class="pagination" role="navigation" aria-label="pagination">
        <a class="pagination-previous">Previous</a>
        <a class="pagination-next">Next page</a>

        <ul class="pagination-list">
          <li>
            <a
              class="pagination-link"
              aria-label="Goto page 1"
              @click="showItems(1)"
              >1</a
            >
          </li>
          <li>
            <a
              class="pagination-link"
              aria-label="Goto page 2"
              @click="showItems(2)"
              >2</a
            >
          </li>
          <li>
            <a
              class="pagination-link"
              aria-label="Goto page 3"
              @click="showItems(3)"
              >3</a
            >
          </li>
          <li>
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a class="pagination-link" aria-label="Goto page 45"
              >last page, computed</a
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

    showItems(page) {
      this.recipesStore.recipesStoreLength = this.recipesStore.recipes.length;
      console.log(this.recipesStore.recipesStoreLength);

      this.recipesStore.startPoint = (page - 1) * (this.recipesStore.resultsPerPage - 1),
        console.log(this.recipesStore.startPoint),
      this.recipesStore.endPoint = this.recipesStore.startPoint + 2,
        console.log(this.recipesStore.endPoint);
      for (
        let i = this.recipesStore.startPoint;
        i <= this.recipesStore.endPoint;
        i++
      ) {
        this.recipesStore.temp = this.recipesStore.recipes[i];
        console.log(this.recipesStore.temp);
        console.log(i),
        this.recipesStore.recipesShowOnClick.push(temp);
        
      }

      console.log(this.recipesStore.recipesShowOnClick);
    },
  },

  created() {
    this.fetchNewArrivals();
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

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
        @click="taskStore.showmodal = true"
      >
        Add new recipe
      </button>
      <button
        class="button is-large is-link m-2"
        @click="taskStore.showAll = !taskStore.showAll"
      >
        Show all
      </button>
    </div>

    <div class="column is-full box " v-if="taskStore.showAll">
      <div class=" columns is-multiline">
      <div
        class="card column is-one-third my-2 has-text-centered"
        v-for="item in taskStore.recipes"
        :key="item.ID"
      >
        <router-link
          :to="{
            name: 'RecipeCard',
            params: { id: item.ID, recipe: item.RecipeTitle },
          }"
        >
          <div class="card-header title is-4 py-3 ">
            {{ item.RecipeTitle }}
          </div></router-link
        >
        <div class="card-content is-italic is-4">
          {{ item.ingredients }}
        </div>
        <div class="card-content is-size-5 has-text-weight-semibold">
          Serve as: {{ item.kindOfDish }}
        </div>
      </div>
    </div>
    </div>

    <ModalRecipe
      class="modal"
      :class="{ 'is-active': taskStore.showmodal }"
    ></ModalRecipe>
  </div>
</template>
<script>
import ModalRecipe from "../components/ModalRecipe.vue";
import { useCatalog } from "../stores/recipeStore";
import { mapState, mapActions } from "pinia";
export default {
  setup() {
    const taskStore = useCatalog();
    return { taskStore };
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
  },
};
</script>

<style scoped>
.recipe-app__content {
  background-image: url("../assets/pexels-diana-light-7296683.jpg");
  background-size: cover;
  background-position: center center;
}
</style>

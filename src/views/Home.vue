<template>
  <div class="box has-text-centered my-4 py-6 recipe-app__content">
    <h1 class="title is-2 is-uppercase is-spaced">Welcome to the recipe app</h1>
    <h2 class="subtitle is-3">
      This app will help you save your favorite recipes fast
    </h2>
    <button class="button is-primary" @click="taskStore.showmodal = true">
      Add new recipe
    </button>
    <button
      class="button is-link"
      @click="taskStore.showAll = !taskStore.showAll"
    >
      Show all
    </button>
  </div>

  <div class="columns is-multiline" v-if="taskStore.showAll">
    <div
      class="card column is-4"
      v-for="item in taskStore.recipes"
      :key="item.ID"
    >
      <router-link :to="/products/this.item.ID">
        <div class="card-header title is-4 has-text-centered">
          {{ item.RecipeTitle }}
        </div></router-link
      >
      <div class="card-content is-italic is-4">
        {{ item.ingredients }}
      </div>
      <div class="card-content is-size-4">Serve as: {{ item.kindOfDish }}</div>
    </div>
  </div>

  <ModalRecipe
    class="modal"
    :class="{ 'is-active': taskStore.showmodal }"
  ></ModalRecipe>
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
    linkOpen() {
      return `/products/${this.item}`;
    },
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

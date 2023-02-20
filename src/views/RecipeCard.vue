<template>
  <div>
    <h1>{{productId}}</h1>
    <h2>{{ $route.params.id }}</h2>
      <h1>Recipe {{ taskStore.recipes.ID }}</h1>


      <div class="card column is-4">
     <div class="card-header title is-4 has-text-centered">
        {{  taskStore.recipes.RecipeTitle }}
      </div>
       <div class="card-content is-italic is-4">
        {{  taskStore.recipes.ingredients }}
      </div>
      <div class="card-content is-size-4">Serve as: {{  taskStore.recipes.kindOfDish }}</div>
    </div>
  </div>
</template>

<script>
import {useCatalog} from '../stores/recipeStore'
export default {
  setup() {
    const taskStore = useCatalog();
    return {taskStore};

  },
  name: "RecipeCard",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
  computed: {
          productId () {
              return +this.$route.params.id;
          }
      }
};
</script>

<style lang="scss" scoped></style>
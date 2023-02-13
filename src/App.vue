<script>
export default {
  name: "App",
  data() {
    return {
      showmodal: false,
      showAll: false,
      recipes: [],
      item: {},
      recipeName: "",
      recipeIngridients: "",
      dish: "",
    };
  },
  methods: {
    addNewRecipe() {
      const newRecipe = {
        ID: Date.now(),
        RecipeTitle: this.recipeName,
        ingredients: this.recipeIngridients,
        kindOfDish: this.dish,
      };
      this.recipes.push(newRecipe);
      this.showmodal = false;
    },
  },
  async mounted() {
    const result = await fetch("recipes.json");
    const data = await result.json();
    this.recipes = data;
  },
};
</script>

<template>
  <div class="container is-fluid recipe-app__container">
    <div class="navbar columns">
      <div class="navbar-brand">
        <p class="navbar-item is-size-3" href="">Recipe App</p>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-burger"></div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <button
              class="button is-link is-large is-outlined my-2"
              @click="showmodal = true"
            >
              Add new recipe
            </button>
          </div>
          <div class="navbar-item">
            <router-link to="/">Home</router-link>
          </div>
          <div class="navbar-item mr-3">
            <router-link to="/measures">Measures</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <aside class="menu column-3 my-4">
        <p class="menu-label is-size-5">Find recipe:</p>
        <ul class="menu-list is-size-5">
          <li><a>appetizers</a></li>
          <li><a>cold platter</a></li>
          <li><a>hot appetizers</a></li>
          <li><a>starters</a></li>
          <li><a>soups</a></li>
          <li><a>salads</a></li>
          <li><a>main dishes</a></li>
          <li><a>meat</a></li>
        </ul>
      </aside>
      <div class="column">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>


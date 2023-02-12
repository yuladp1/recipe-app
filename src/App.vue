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
    <div class="navbar has-background-grey-lighter columns">
      <div class="navbar-brand">
        <a class="navbar-item" href="">
            <img src="./assets/logo.png" />
         </a>
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
              class="button is-link is-large is-outlined"
              @click="showmodal = true"
            >
              Add new recipe
            </button>
          </div>
          <div class="navbar-item">
            <router-link to="/">Home</router-link>
          </div>
          <div class="navbar-item">
            <router-link to="/about">About</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <aside class="menu column-3">
        <p class="menu-label">Find recipe:</p>
        <ul class="menu-list">
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
      <div class="column ">
        <div class="box has-text-centered recipe-app__content">
          <h1 class="title is-2 is-uppercase is-spaced">
            Welcome to the recipe app
          </h1>
          <h2 class="subtitle is-3">
            This app will help you save your favorite recipes fast
          </h2>
          <button class="button is-primary" @click="showmodal = true">
            Add new recipe
          </button>
          <button class="button is-link" @click="showAll = !showAll">
            Show all
          </button>
        </div>

        <div class="columns is-multiline" v-if="showAll">
          <div class="card column is-4" v-for="item in recipes" :key="item.ID">
            <div class="card-header title is-4 has-text-centered">
              {{ item.RecipeTitle }}
            </div>
            <div class="card-content is-italic is-4">
              {{ item.ingredients }}
            </div>
            <div class="card-content is-5">Serve as: {{ item.kindOfDish }}</div>
          </div>
        </div>

        <router-view></router-view>
      </div>
    </div>

    <div class="modal" :class="{ 'is-active': showmodal }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">New recipe card</p>
          <button
            class="delete"
            aria-label="close"
            @click="showmodal = false"
          ></button>
        </header>
        <section class="modal-card-body">
          <input
            class="input"
            type="text"
            placeholder="Enter recipe name:"
            v-model="recipeName"
          />
          <textarea
            class="textarea"
            placeholder="Ingredients:"
            v-model="recipeIngridients"
          ></textarea>
          <div class="select">
            <select v-model="dish">
              <option disabled>Please select dish:</option>
              <option>appetizers</option>
              <option>cold platter</option>
              <option>hot appetizers</option>
              <option>starters</option>
              <option>soups</option>
              <option>salads</option>
              <option>main dishes</option>
              <option>meat</option>
            </select>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="addNewRecipe">
            Save changes
          </button>
          <button class="button" @click="showmodal = false">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<style scoped>
.recipe-app__content {
  background-image: url("./assets/pexels-diana-light-7296683.jpg");
  background-size: cover;
  background-position: center center;
}
</style>

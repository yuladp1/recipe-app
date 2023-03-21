<template>
  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title has-text-weight-bold">New recipe card</p>
        <button
          class="delete"
          aria-label="close"
          @click="recipesStore.showmodal = false"
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
        <button class="button is-success has-text-weight-bold modal__button" @click="addNewRecipe">
          Save changes
        </button>
        <button class="button has-text-weight-bold modal__button" @click="recipesStore.showmodal = false">
          Cancel
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
import { useCatalog } from "../stores/recipeStore";

export default {
  name: "ModalRecipe",
  setup() {
    const recipesStore = useCatalog();
    return { recipesStore };
  },
  methods: {
    addNewRecipe() {
      const newRecipe = {
        ID: Date.now(),
        RecipeTitle: this.recipeName,
        ingredients: this.recipeIngridients,
        kindOfDish: this.dish,
      };
      this.recipesStore.recipes = JSON.parse(
        localStorage.getItem("recipesLocal")
      );
      this.recipesStore.recipes.push(newRecipe);
      this.recipesStore.calculateAmountPages();
      localStorage.setItem(
        "recipesLocal",
        JSON.stringify(this.recipesStore.recipes)
      );
      this.recipesStore.showmodal = false;
    },
  },
};
</script>

<style scoped>
.modal__button {
  font-family: "Amatic SC", cursive;
  letter-spacing: 2px;
  font-weight: 800;
}
</style>

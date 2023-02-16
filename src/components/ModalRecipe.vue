<template>
  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">New recipe card</p>
        <button
          class="delete"
          aria-label="close"
          @click="taskStore.showmodal = false"
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
        <button class="button" @click="taskStore.showmodal = false">
          Cancel
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from "../stores/recipeStore";
export default {
  name: "ModalRecipe",
  setup() {
    const taskStore = useTaskStore();
    return taskStore;
  },
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>

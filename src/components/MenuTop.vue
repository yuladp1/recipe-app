<template>

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
            @click="taskStore.showmodal = true"
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
  <ModalRecipe class="modal" :class="{'is-active': taskStore.showmodal}"></ModalRecipe>
</template>
<script>
import {useCatalog} from '../stores/recipeStore'
import ModalRecipe from "./ModalRecipe.vue";
export default {
  setup() {
    const taskStore = useCatalog();
    return { taskStore };
  },
  components: {
    ModalRecipe,
    }
};
</script>

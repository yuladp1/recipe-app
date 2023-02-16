<script>
import MenuTop from "./components/MenuTop.vue";
import MenuAside from "./components/MenuAside.vue";
import ModalRecipe from './components/ModalRecipe.vue'
import {useTaskStore} from './stores/recipeStore' 
export default {
  setup() {
    const taskStore = useTaskStore();
    return (taskStore);

  },
  name: "App",
  components: {
    MenuTop,
    MenuAside,
    ModalRecipe
  },
};
</script>

<template>
  <div class="container is-fluid recipe-app__container">
   <MenuTop></MenuTop>
    <div class="columns">
      <div >
      <MenuAside></MenuAside>
      </div>
      <div class="column">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

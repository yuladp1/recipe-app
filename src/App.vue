<script>
import MenuTop from "./components/MenuTop.vue";
import ModalRecipe from "./components/ModalRecipe.vue";
import RecipesTags from "./components/RecipesTags.vue";

export default {
  name: "App",
  components: {
    MenuTop,
    ModalRecipe,
    RecipesTags,
  },
};
</script>

<template>
  <div class="container is-fluid __wrapper">
    <div class="columns is-multiline">
      <MenuTop></MenuTop>
      <div class="column is-full wrapper__main-part">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
.__wrapper {
  background-image: url("./assets/pexels-diana-light-7296683.jpg");
  background-size: 100% auto;
  background-position: center center;
  background-repeat: repeat-y;
  background-position: center -400px;
}
.wrapper__main-part {
  height: 100vh;
}
</style>

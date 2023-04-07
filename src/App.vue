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
  <div class="container is-fluid">
    <div class="columns is-multiline">
      <div class="column is-full">
        <MenuTop></MenuTop>
      </div>
      <div class="column columns is-mobile is-full">
        <div class="column wrapper__main-part">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
.wrapper__main-part {
  margin-top: 100px;
}
</style>

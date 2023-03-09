<script>
import MenuTop from "./components/MenuTop.vue";
import MenuAside from "./components/MenuAside.vue";
import ModalRecipe from "./components/ModalRecipe.vue";
export default {
  name: "App",
  components: {
    MenuTop,
    MenuAside,
    ModalRecipe,
  },
};
</script>

<template>
  <div class="container is-fluid">
    <div class="columns is-multiline">
      <div class="column is-full ">
        <MenuTop></MenuTop>
      </div>
      <div class="column columns is-mobile is-full">
        <div class = "column is-narrow py-0 is-hidden-touch">
          <MenuAside></MenuAside>
        </div>
        <div class="column">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');
* {
  font-family: 'Inconsolata', monospace;
}
</style>
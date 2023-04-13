<template>
  <div class="tags are-medium has-text-centered">
    <div v-for="item in recipesStore.dishes" :key="item">
      <span
        class="tag is-rounded is-light mx-3 tag__animation"
        @click="recipesStore.goToDishCards(item)"
      >
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useCatalog } from "../stores/recipeStore";
import { gsap } from "gsap";
export default {
  name: "RecipesTags",
  setup() {
    const recipesStore = useCatalog();
    const tagsAnimation = () => {
      gsap.to(".tag__animation", {
        stagger: 0.5,
        opacity: 1,
        duration: 2,
      });
    };

    onMounted(() => {
      tagsAnimation();
    });
    return { recipesStore, tagsAnimation };
  },
};
</script>

<style lang="scss">
.tag__animation {
  opacity: 0;
}
</style>

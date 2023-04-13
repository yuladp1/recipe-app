<template>
  <div class="columns is-multiline has-text-centered px-0 mx-0">
    <div class="column is-full py-6 px-4 recipe-app__content">
      <h1
        class="subtitle is-uppercase is-spaced title__animation title__main-text"
      >
        Welcome to the recipe app
      </h1>
      <h2
        class="subtitle is-3 is-uppercase title__animation title__primary-text"
      >
        save your favorite recipes fast!
      </h2>
      <button
        class="button is-medium is-primary m-2 custom__button button__animation"
        @click="recipesStore.showmodal = true"
      >
        Add new recipe
      </button>
      <button
        class="button is-medium is-link m-2 custom__button button__animation"
        @click="recipesStore.showAll = !recipesStore.showAll"
      >
        Show all
      </button>
      <div class="column is-half m-auto">
        <RecipesTags></RecipesTags>
      </div>
    </div>

    <div class="column is-full" v-if="recipesStore.showAll">
      <div class="columns">
        <div
          class="card column m-3"
          v-for="item in recipesStore.temp"
          :key="item.ID"
        >
          <div class="card-header is-shadowless">
            <div
              @click="recipesStore.goToRecipeCard(item.ID)"
              class="card-header-title subtitle px-3 py-3 has-text-link"
            >
              {{ item.RecipeTitle }}
            </div>
          </div>

          <div
            class="card-content is-italic is-4 has-text-justified is-shadowless card__recipe-content"
          >
            {{ item.ingredients }}
          </div>

          <div
            class="card-content is-5 has-text-weight-semibold __serveAs"
            @click="recipesStore.goToDishCards(item.kindOfDish)"
          >
            serve as: {{ item.kindOfDish }}
          </div>

          <div class="card-footer">
            <div class="card-footer-item">
              <button
                @click="recipesStore.goToRecipeCard(item.ID)"
                class="button is-info is-medium card-footer-item custom__button"
              >
                see more...
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column" v-if="recipesStore.showAll">
      <nav
        class="pagination has-text-weight-bold home__pagination"
        role="navigation"
        aria-label="pagination"
      >
        <a class="pagination-previous" @click="this.recipesStore.showPrevious()"
          >Previous</a
        >
        <a class="pagination-next" @click="this.recipesStore.showNext()"
          >Next page</a
        >

        <ul
          class="pagination-list"
          v-for="page in recipesStore.arrayOfPages"
          :key="page"
        >
          <li>
            <a
              class="pagination-link"
              :class="{ 'is-current': page == recipesStore.currentPage }"
              aria-label="Goto page {page}"
              @click="recipesStore.showItems(page)"
              >{{ page }}</a
            >
          </li>
        </ul>
      </nav>
    </div>
    <ModalRecipe
      class="modal"
      :class="{ 'is-active': recipesStore.showmodal }"
    ></ModalRecipe>
  </div>
</template>
<script>
import ModalRecipe from "../components/ModalRecipe.vue";
import { useCatalog } from "../stores/recipeStore";
import { computed, onMounted } from "vue";
import { mapState, mapActions } from "pinia";
import { watch } from "vue";
import RecipesTags from "../components/RecipesTags.vue";
import { gsap } from "gsap";

export default {
  name: "Home",
  components: {
    ModalRecipe,
    RecipesTags,
  },
  setup() {
    const recipesStore = useCatalog();
    const fetchNewArrivals = () => {
      recipesStore.fetchNewArrivals();
    };
    const titleAnimation = () => {
      gsap.from(".title__animation", {
        opacity: 0,
        duration: 3,
        delay: 0.5,
      });
    };
    const buttonAnimation = () => {
      gsap.from(".button__animation", {
        opacity: 0,
        width: 0,
        font: 0,
        duration: 2,
        delay: 0.5,
      });
    };
    onMounted(() => {
      if (recipesStore.recipesLocal.length <= 0) {
        fetchNewArrivals();
      }
      titleAnimation();
      buttonAnimation();
    });

    watch(
      () => recipesStore.showAll,
      () => {
        recipesStore.showItems(1);
      }
    );
    return {
      recipesStore,
      fetchNewArrivals,
      recipesLocal: computed(() => recipesStore.getAllrecipesLocal),
      titleAnimation,
      buttonAnimation,
    };
  },
  computed: {
    ...mapState(useCatalog, { results: "results" }),
  },

  methods: {
    ...mapActions(useCatalog, ["fetchNewArrivals"]),
  },
};
</script>

<style scoped>
.title__main-text,
.title__primary-text {
  -webkit-text-stroke: 1px black;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black;
  font-family: "Lilita One", cursive;
  color: white;
}
.title__main-text {
  font-size: 66px;
  padding-top: 100px;
}
.title__primary-text {
  letter-spacing: 2px;
}
.card__recipe-content {
  max-height: 150px;
  overflow: hidden;
}
.custom__button {
  font-family: "Amatic SC", cursive;
  letter-spacing: 1px;
  font-weight: 800;
}
.button__see-more > a {
  width: 100%;
}
.card-header:hover,
.__serveAs:hover {
  cursor: pointer;
}

.home__pagination {
  font-family: "Amatic SC", cursive;
  font-size: 20px;
}
</style>

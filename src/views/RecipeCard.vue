<template>
  <div>
      <h1>Recipe {{ productId }}</h1>
  </div>
</template>

<script>
export default {
  name: "RecipeCard",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
  computed: {
          productId () {
              return +this.$route.params.id;
          }
      }
};
</script>

<style lang="scss" scoped></style>
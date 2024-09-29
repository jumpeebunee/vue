<script>
export default {
  data() {
    return {
      filmId: 0,
      banner: `<div>Film Banner</div>`,
      prevTest: "data-testId",
      nextButtonAttr: {
        disabled: false,
      },
    };
  },
  methods: {
    clickPrev() {
      this.filmId -= 1;
    },
    clickNext() {
      this.filmId += 1;
    },
  },
};
</script>

<template>
  <h1>Film ID: {{ filmId }}</h1>
  <div v-html="banner"></div>

  <div class="buttons">
    <button @click="clickPrev" :[prevTest]="`prevButton`">Prev</button>
    <button @click="clickNext" v-bind="nextButtonAttr">Next</button>
  </div>
</template>

<style>
.buttons {
  display: flex;
  margin-top: 12px;
  gap: 10px;
}
</style>

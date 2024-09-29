<script>
import { nextTick } from "vue";

export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      filmId: 0,
      banner: `<div>Film Banner</div>`,
      prevTest: "data-testId",
      nextButtonAttr: {
        disabled: false,
      },
      collections: [
        { id: 1, name: "Гарри Поттер и философский камень" },
        { id: 2, name: "Гарри Поттер и Тайная комната" },
        { id: 3, name: "Гарри Поттер и узник Азкабана" },
      ],
      stats: {
        clickedTimes: 0,
      },
    };
  },
  computed: {
    checkCollectionLength() {
      return Boolean(this.collections.length);
    },
    fullname: {
      get() {
        return this.firstname + " " + this.lastname;
      },
      set(value) {
        const res = value.split(" ");
        [this.firstname, this.lastname] = res;
      },
    },
  },
  methods: {
    auth() {
      this.fullname = "Bob Jhonson";
    },
    clickPrev() {
      this.filmId -= 1;
      this.updateClickedTimes();
    },
    clickNext() {
      this.filmId += 1;
      this.updateClickedTimes();
    },
    async updateClickedTimes() {
      this.stats.clickedTimes += 1;
      await nextTick();
    },
  },
};
</script>

<template>
  <header class="header">
    <button @click="auth" v-if="fullname.length === 1">Auth</button>
    <div>{{ fullname }}</div>
  </header>

  <h1>Film ID: {{ filmId }}</h1>
  <div class="times">Total Clicked: {{ stats.clickedTimes }}</div>

  <div v-html="banner"></div>

  <div v-if="checkCollectionLength">
    <h3>Collection list</h3>
    <ul></ul>
  </div>

  <div class="buttons">
    <button @click="clickPrev" :[prevTest]="`prevButton`">Prev</button>
    <button @click="clickNext" v-bind="nextButtonAttr">Next</button>
  </div>
</template>

<style>
.header {
  display: flex;
  justify-content: end;
}

.times {
  margin-bottom: 3px;
}

.buttons {
  display: flex;
  margin-top: 12px;
  gap: 10px;
}
</style>

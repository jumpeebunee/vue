<script>
import { nextTick } from "vue";

export default {
  data() {
    return {
      filmId: 0,
      banner: `<div>Film Banner</div>`,
      prevTest: "data-testId",
      nextButtonAttr: {
        disabled: false,
      },
      stats: {
        clickedTimes: 0,
      },
    };
  },
  methods: {
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
  <h1>Film ID: {{ filmId }}</h1>
  <div class="times">Total Clicked: {{ stats.clickedTimes }}</div>

  <div v-html="banner"></div>

  <div class="buttons">
    <button @click="clickPrev" :[prevTest]="`prevButton`">Prev</button>
    <button @click="clickNext" v-bind="nextButtonAttr">Next</button>
  </div>
</template>

<style>
.times {
  margin-bottom: 3px;
}

.buttons {
  display: flex;
  margin-top: 12px;
  gap: 10px;
}
</style>

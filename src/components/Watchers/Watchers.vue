<template>
  <div class="question">
    <div>
      <div>{{ info.name }} a yes/no question:</div>
      <input :disabled="isBlocked" v-model="question" type="text" />
    </div>

    <div v-if="isLoading">Thinking...</div>
    <div v-else>{{ answer }}</div>
  </div>

  <div class="info">
    <input v-model="info.name" placeholder="Change name" type="text" />
  </div>

  <div id="searchData">{{ searchData }}</div>
  <input :style="{ marginTop: `20px` }" type="text" v-model="searchData" />

  <button :disabled="counter === 5" @click="counter++">
    Click {{ 5 - counter }} times to kill name watcher
  </button>
</template>

<script>
const api = "https://yesno.wtf/api";

export default {
  data() {
    return {
      counter: 0,
      answer: "",
      question: "",
      searchData: "",
      isLoading: false,
      isBlocked: false,
      info: {
        name: "Bobik",
      },
    };
  },
  created() {
    const unwatch = this.$watch(
      "info",
      (data) => {
        console.log(data.name);
      },
      { deep: true }
    );

    this.$watch("counter", (data) => {
      if (data === 5) unwatch();
    });
  },
  methods: {
    async getAnswer() {
      this.isLoading = true;

      try {
        const res = await fetch(api);
        const data = await res.json();
        this.answer = data.answer;
      } catch (error) {
        this.answer = "Error! Could not reach the API. ";
      }

      this.isLoading = false;
    },
  },
  watch: {
    question(newQuestion) {
      if (newQuestion.includes("?")) this.getAnswer();
      if (newQuestion.includes("fuck")) this.isBlocked = true;
    },
    searchData: {
      handler(n, p, onCleanup) {
        const controller = new AbortController();

        fetch("https://jsonplaceholder.typicode.com/todos/1", {
          signal: controller.signal,
        })
          .then((data) => {
            return data.json();
          })
          .then((data) => {});

        onCleanup(() => {
          controller.abort();
        });
      },
      flush: "post",
    },
    info: {
      handler(newValue) {
        const { name } = newValue;
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style></style>

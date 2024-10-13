<template>
  <input ref="inputRef" type="text" />

  <div class="list">
    <div class="item" v-for="data of content" ref="item" :key="data.name">
      <div>{{ data.name }}</div>
      <div>{{ data.number }}</div>
    </div>
  </div>

  <button @click="counter++" :ref="(el) => console.log(el)">
    Count {{ counter }}
  </button>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      content: [
        {
          name: "Oleg",
          number: "555-123",
        },
        {
          name: "Peter",
          number: "555-832",
        },
      ],
    };
  },
  mounted() {
    console.log(this.$refs);
    this.$refs.inputRef.focus();
  },
};
</script>

<style>
.list {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.item {
  padding: 20px 10px;
  max-width: 400px;
  border: solid 1px black;
}
</style>

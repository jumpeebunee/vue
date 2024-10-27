<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<template>
  <button @click="count++" class="btn">Button clicked: {{ count }}</button>
</template>

<style scoped>
.btn {
  display: block;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background: #005bff;
  border: none;
  padding: 10px 15px;
  border-radius: 16px;
  cursor: pointer;
}
</style>

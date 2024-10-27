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

<style>
.btn {
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background: #005bff;
  border: none;
  padding: 15px 30px;
  border-radius: 20px;
  cursor: pointer;
}
</style>

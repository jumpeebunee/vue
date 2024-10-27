<template>
  <button @click="$emit('onAction')" class="button">{{ text }}</button>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style scoped>
.button {
  cursor: pointer;
}
</style>

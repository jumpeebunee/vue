<template>
  <div class="content">
    <ButtonCounter />
    <ButtonCounter />
  </div>
</template>

<script>
import ButtonCounter from "./components/ButtonCounter.vue";

export default {
  components: {
    ButtonCounter,
  },
};
</script>

<style>
.content {
  display: flex;
  gap: 16px;
}
</style>

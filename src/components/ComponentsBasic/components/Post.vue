<template>
  <div class="post">
    <div class="title">{{ title }}</div>

    <div class="btn">
      <ButtonCounter />
    </div>
  </div>
</template>

<script>
import ButtonCounter from "./ButtonCounter.vue";

export default {
  props: ["title"],
  components: {
    ButtonCounter,
  },
};
</script>

<style scoped>
.title {
  font-size: 16px;
}

.post {
  max-width: 240px;
  padding: 24px 16px;
  border-radius: 10px;
  background: #f5f7fa;
}

.btn {
  margin-top: 16px;
}
</style>

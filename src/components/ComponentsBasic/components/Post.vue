<template>
  <div class="post">
    <div class="title">{{ title }}</div>

    <div class="btn">
      <Button @onAction="() => $emit('onLikeClick', id)" text="Like" />
      <div class="likes">Likes: {{ likes }}</div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  props: ["id", "title", "likes"],
  components: {
    Button,
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
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 16px;
}
</style>

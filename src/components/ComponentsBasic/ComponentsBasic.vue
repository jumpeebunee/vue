<template>
  <div class="content">
    <Post v-for="post in posts" :title="post.title" :key="post.id" />
  </div>
</template>

<script>
import ButtonCounter from "./components/ButtonCounter.vue";
import Post from "./components/Post.vue";

export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Defining a Component",
        },
        {
          id: 2,
          title: "Using a Component",
        },
        {
          id: 3,
          title: "Passing Props",
        },
      ],
    };
  },
  components: {
    ButtonCounter,
    Post,
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>

<template>
  <div class="content">
    <Post
      v-for="post in posts"
      :id="post.id"
      :key="post.id"
      :title="post.title"
      :likes="post.likes"
      @onLikeClick="onLikeClick"
    />
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
          likes: 2,
        },
        {
          id: 2,
          title: "Using a Component",
          likes: 0,
        },
        {
          id: 3,
          title: "Passing Props",
          likes: 0,
        },
      ],
    };
  },
  components: {
    ButtonCounter,
    Post,
  },
  methods: {
    onLikeClick(id) {
      const post = this.posts.find((post) => post.id === id);
      post.likes += 1;
    },
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

<template>
  <div>
    <div class="tabs">
      <button
        @click="() => changeTab(key)"
        v-for="(value, key) in tabs"
        :key="value"
      >
        {{ value }}
      </button>
    </div>

    <component :is="tab" />
  </div>
</template>

<script>
import Post from "./components/Post.vue";
import Home from "./components/tabs/Home.vue";
import Posts from "./components/tabs/Posts.vue";

export default {
  data() {
    return {
      tab: "Home",
      tabs: {
        home: "Home",
        posts: "Posts",
      },
    };
  },
  components: {
    Home,
    Posts,
    Post,
  },
  methods: {
    changeTab(tab) {
      this.tab = this.tabs[tab];
    },
  },
};
</script>

<style scoped>
.tabs {
  margin-bottom: 16px;
}
</style>

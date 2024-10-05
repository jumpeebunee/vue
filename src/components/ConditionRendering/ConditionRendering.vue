<template>
  <div>
    <h2>Leave a review</h2>
    <div class="review">
      <div v-if="type">
        <div v-if="type === 'stars'">
          <button @click="() => setStars(1)" :class="{ active: stars === 1 }">
            1
          </button>
          <button @click="() => setStars(2)" :class="{ active: stars === 2 }">
            2
          </button>
          <button @click="() => setStars(3)" :class="{ active: stars === 3 }">
            3
          </button>
        </div>
        <div v-else-if="type === 'like'">
          <button :class="{ active: like }" @click="() => (like = !like)">
            Like
          </button>
        </div>
      </div>
      <div v-else>Choose review method</div>
    </div>
    <div class="buttons">
      <button @click="setType('stars')">Stars</button>
      <button @click="setType('like')">Like</button>
    </div>

    <button v-show="showSubmitButton" @click="sendReview" class="submit">
      Send Review
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "",
      stars: 0,
      like: false,
    };
  },
  methods: {
    setType(type) {
      this.type = type;
    },
    setStars(stars) {
      this.stars = stars;
    },
  },
  computed: {
    showSubmitButton() {
      return this.stars || this.like || this.comment;
    },
    sendReview() {
      this.type = "";
      this.stars = 0;
      this.like = false;
    },
  },
};
</script>

<style scoped>
button {
  cursor: pointer;
}

.active {
  background: rebeccapurple;
}

.buttons {
  display: flex;
  gap: 8px;
}

.review {
  margin-bottom: 10px;
}

.submit {
  margin-top: 20px;
}
</style>

<template>
  <div class="content">
    <div>
      <div class="chat-wrapper">
        <div v-if="!isLoading" class="chat">
          <div
            v-for="({ message, id }, index) in messages"
            :key="id"
            class="message"
          >
            <div>{{ index }}.</div>
            <div>{{ message }}</div>
          </div>
        </div>
        <div v-else class="skeleton">
          <div v-for="n in 4" :key="n" class="bone"></div>
        </div>
      </div>

      <div class="form">
        <input
          @input="inputMessage"
          :value="message"
          type="text"
          placeholder="message"
        />
        <button @click="sendMessage">Send</button>
      </div>
    </div>

    <div class="profile">
      <button @click="() => (showProfileData = !showProfileData)">
        {{ showProfileData ? "Hide Profile" : "Show Profile" }}
      </button>

      <div class="profile-data" v-show="showProfileData">
        <div v-for="(value, key, index) in profileInfo" :key="key" class="data">
          {{ index }}. {{ key }}: {{ value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      showProfileData: false,
      messages: [
        { id: 1, message: "Hello Peter!" },
        { id: 2, message: "Are you ok?" },
      ],
      profileInfo: {
        about: "How to do lists in Vue",
        name: "Jane Doe",
        registerAt: "2016-04-10",
      },
      isLoading: true,
    };
  },
  methods: {
    inputMessage(e) {
      this.message = e.target.value;
    },
    sendMessage() {
      this.messages.push({ id: this.messages + 1, message: this.message });
      this.message = "";
    },
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 600);
  },
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: space-between;
}

.message {
  display: flex;
  gap: 6px;
}

.profile-data {
  margin-top: 10px;
}

.form {
  margin-top: 10px;
}

.skeleton {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.bone {
  width: 100px;
  height: 20px;
  background: gray;
}
</style>

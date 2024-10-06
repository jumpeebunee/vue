<template>
  <div>
    <div class="content">
      <h2>Counter: {{ count }}</h2>

      <div class="buttons">
        <button @click="count++">Add one</button>
        <button @click="doubleCount">Add two</button>
        <button @click="customCount(4)">Random number</button>
      </div>

      <div class="info">
        <div>About event in console.log</div>
        <button @click="console.log($event)" class="about-btn">
          Check event info
        </button>
      </div>
    </div>

    <form v-show="formVisible" action="" class="form">
      <input
        type="text"
        placeholder="Message"
        @keydown.right.alt="() => (formVisible = false)"
      />
      <button class="submit-btn" @click.prevent="sendMessage">
        <div>Send</div>
        <div @click.stop.prevent="() => (formVisible = false)" class="hide">
          Hide form
        </div>
      </button>
    </form>
  </div>

  <div>Exact</div>
  <button @click.ctrl.exact="console.log('1')">1</button>
  <button @click.middle.exact="console.log('2')">2</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      formVisible: true,
    };
  },
  methods: {
    doubleCount() {
      this.count += 2;
    },
    customCount(val) {
      this.count += val;
    },
    sendMessage() {
      alert("Message sended");
    },
  },
};
</script>

<style>
.buttons {
  display: flex;
  gap: 6px;
}

.info {
  margin-top: 20px;
}

.about-btn {
  margin-top: 10px;
}

.form {
  margin-top: 20px;
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 5px;
}

.hide {
  padding: 4px 10px;
  margin-left: 10px;
  background: ghostwhite;
  border: solid 1px black;
}
</style>

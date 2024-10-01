<template>
  <div :class="{ 'content-light': isBlackTheme }" class="content">
    <button @click="changeTheme">Change Theme</button>
    <h2 :class="getTitleStyles">Counter: {{ counter }}</h2>
    <button :class="[buttonLeftClass, ...buttonPreset]" @click="clickLeft">
      Left
    </button>
    <button :class="[buttonRightClass, ...buttonPreset]" @click="clickRight">
      Right
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      buttonPreset: ["rounded", "big"],
      isBlackTheme: true,
      buttonLeftClass: {
        "btn-red": false,
      },
      buttonRightClass: {
        "btn-red": false,
      },
    };
  },
  computed: {
    getTitleStyles() {
      return {
        "counter-inited": this.counter === 0,
        "counter-light": this.isBlackTheme,
      };
    },
  },
  methods: {
    clickLeft() {
      this.counter -= 1;

      if (this.counter < 10) {
        this.buttonRightClass["btn-red"] = false;
      }
    },
    clickRight() {
      this.counter += 1;

      if (this.counter > 10) {
        this.buttonRightClass["btn-red"] = true;
      }
    },
    changeTheme() {
      this.isBlackTheme = !this.isBlackTheme;
    },
  },
};
</script>

<style>
.btn-red {
  background: brown;
}

.content {
  padding: 20px;
  border: solid 1px black;
}

.content-light {
  border-color: red;
}

.counter-light {
  color: brown;
}

.counter-inited {
  color: gray;
}

.rounded {
  border-radius: 14px;
}

.big {
  padding: 4px 20px;
}
</style>

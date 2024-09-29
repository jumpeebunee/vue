<script>
export default {
  data() {
    return {
      name: "Horrors",
      msg: "Find your best horror movie",
      msgId: 237,
      data: `<span style="color: red">or die from scary</span>`,
      disabled: true,
      secondButtonAttr: {
        id: "secondDisabledBtn",
        disabled: true,
      },
    };
  },
};
</script>

<template>
  <h1 :id="msgId">{{ name }}</h1>
  <p>{{ msg }}</p>
  <div v-html="data"></div>

  <div class="buttons">
    <button :disabled="disabled">Main Button</button>
    <button v-bind="secondButtonAttr">Second Button</button>
  </div>
</template>

<style>
.buttons {
  display: flex;
  margin-top: 12px;
  gap: 10px;
}
</style>

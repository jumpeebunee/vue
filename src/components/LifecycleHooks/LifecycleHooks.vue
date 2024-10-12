<template>
  {{ message }}
</template>

<script>
export default {
  data() {
    return {
      message: "Not created",
    };
  },
  beforeCreate() {
    this.message = "Before created";
  },
  created() {
    this.message = "Created";
  },
  beforeMount() {
    this.message = "Before mounted";
  },
  mounted() {
    this.message = "Mounted";
  },
  unmounted() {
    this.message = "Destroy";
  },
  updated() {
    this.message = "Updated";
  },
};
</script>

<style></style>

import { createApp } from "vue";
import App from "./App.vue";
import Button from "./components/Button.vue";

const app = createApp(App);
const secondApp = createApp(App);

// Captures errors from all descendant component
app.config.errorHandler = (err) => {
  console.log(err);
};

// Available for use anywhere in app
app.component("Button", Button);

// Multiple application instances
app.mount("#app");
secondApp.mount("#app2");

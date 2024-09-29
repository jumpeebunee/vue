import { createApp } from "vue";
import App from "./Apps/App.vue";
import Button from "./components/Button.vue";
import SecondApp from "./Apps/SecondApp.vue";

const app = createApp(App);
const secondApp = createApp(SecondApp);

// Captures errors from all descendant component
app.config.errorHandler = (err) => {
  console.log(err);
};
// Restricted Globals Access
app.config.globalProperties = {
  window,
};

// Available for use anywhere in app
app.component("Button", Button);

// Multiple application instances
app.mount("#app");
secondApp.mount("#app2");

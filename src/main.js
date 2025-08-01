import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// pinia config
import { createPinia } from "pinia";

// mitt
import mitt from "mitt";
const emitter = mitt();

//swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Components
const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .provide("emitter", emitter)
  .use(vuetify)
  .use(createPinia())
  .use(router)
  .mount("#app");

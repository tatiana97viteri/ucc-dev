import Vue from "vue";
import App from "./App.vue";
import VueScrollTo from "vue-scrollto";
import ElementUI from "element-ui";
import router from './router';
import "element-ui/lib/theme-chalk/index.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'


library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueScrollTo);
Vue.use(ElementUI);
Vue.use(Vuetify)

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  render: h => h(App)
}).$mount("#app");

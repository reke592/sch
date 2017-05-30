import {routes} from "./routes";

const Vue = require("vue");
const VueRouter = require("vue-router");
const Vuex = require("vuex");
const HomeComponent = require("./assets/js/components/Home.vue");

Vue.use(VueRouter);
Vue.use(Vuex);

const app = new Vue({
	component : HomeComponent
}).$mount("#app");
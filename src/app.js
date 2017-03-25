import Vue from 'vue'
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';

import App from './app.vue'
import routes from './routes'
import store from './stores'

/* Plugin Inject*/
Vue.use(VueRouter);

/* Create Router */
const router = new VueRouter({
	mode: 'history',
	routes
})

sync(store, router)

/* Create new app */
new Vue({
	el: 'app',
	router,
	store,
	render: c => c(App)
})
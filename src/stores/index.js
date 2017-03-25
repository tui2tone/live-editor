import Vue from 'vue';
import Vuex from 'vuex';

import { default as actions } from './actions';
import { default as getters } from './getters';
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
	actions,
	getters,
	modules: modules,
	strict: false,
	plugins: []
})
/**
 * Created by dobromirbogatev on 06.04.17.
 */
import Vue from 'vue';
import Vuex from 'vuex';

export const ADD_TO_LIST = "ADD-TO-LIST";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		list: []
	},
	mutations: {
		[ADD_TO_LIST] (state, itemName) {
			if (itemName)
				state.list.push(itemName);
		}
	},
	getters: {
		getList: state => {
			return state.list;
		},
		getCapitalList: (state, getters) => {
			return getters.getList.filter((item) => item[0] === item[0].toUpperCase());
		},
		getLowerList: (state, getters) => {
			return getters.getList.filter((item) => item[0] === item[0].toLowerCase());
		}
	}
});

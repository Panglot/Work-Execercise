import Vue from 'vue'
import App from './NewApp.vue'
import store from './vuex/store';


new Vue({
    store,
    el: '#app',
    render: h => h(App)
});





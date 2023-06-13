// require('./bootstrap');

import Vue from 'vue/dist/vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

window.axios = require('axios');

Vue.use(VueAxios, axios)

Vue.component('pos_system', require('./components/admin/pos').default);

import Vue2Filters from 'vue2-filters';

Vue.use(Vue2Filters);

const app = new Vue({
    el: '#app',
}).$mount('#app');

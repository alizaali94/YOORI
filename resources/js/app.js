require('./bootstrap');

// window.Vue = require('vue');
import Vue from 'vue/dist/vue'
Vue.config.productionTip = false;
Vue.config.devtools = false;

// coolLightBox
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

Vue.use(CoolLightBox);
//vue-router
import VueRouter from 'vue-router'

Vue.use(VueRouter);
//vue-axios
import {routes} from "./routes/frontend";

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

import vSelect from 'vue-select';
Vue.component('v-select', vSelect);

import ProductZoomer from 'vue-product-zoomer';
Vue.use(ProductZoomer);

//Vuex
import Vuex from 'vuex'

Vue.use(Vuex);
import VuePlyr from 'vue-plyr';

Vue.use(VuePlyr, {
    plyr: {}
})

//lazy loader
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)

import storeData from './store/index';
import module from './store/module';

const store = new Vuex.Store({
    modules: {
        module,
        storeData
    }
});
export default store;
import helper from './helper'

import objectToFormData from "./objectToFormData";

window.objectToFormData = objectToFormData;

Vue.component('frontend_master', require('./components/frontend/frontend_master').default);
Vue.component('loading_button', require('./components/frontend/partials/loading_button').default);

import VueProgressBar from 'vue-progressbar'

const options = {
    color: 'var(--primary-color)',
    failedColor: '#bb2d3b',
    thickness: '2px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
}

Vue.use(VueProgressBar, options);

import Vue2Filters from 'vue2-filters';

Vue.use(Vue2Filters);

import { initializeApp } from "firebase/app";

function getValueFromId(id)
{
    let value = '';
    let input_box = document.getElementById(id);

    if (input_box)
    {
        value = input_box.value;
    }
    return value;
}

const firebaseConfig = {
    apiKey: getValueFromId('api_key'),
    authDomain: getValueFromId('auth_domain'),
    projectId: getValueFromId('project_id'),
    storageBucket: getValueFromId('storage_bucket'),
    messagingSenderId: getValueFromId('messaging_sender_id'),
    appId: getValueFromId('app_id'),
    measurementId: getValueFromId('measurement_id')
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);

const router = new VueRouter({
    mode: 'history',
    base: app_path,
    history: true,
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0}
    }
});

const app = new Vue({
    el: '#app',
    router,
    mixins: [helper],
    store,
}).$mount('#app');

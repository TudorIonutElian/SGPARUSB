/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);


/* Importare Vue Components START */

import HomeComponent from './components/Home.vue';
import OrdonatoriCredite from './components/OrdonatoriCredite.vue';
import Institutii from './components/Institutii.vue';
import Institutie from './components/Institutie.vue';

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
      { path: '/', component: HomeComponent },
      { path: '/ordonatori', component: OrdonatoriCredite },
      { path: '/institutii', component: Institutii },
      { path: '/institutie', component: Institutie }
    ]
  });

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('home', require('./components/Home.vue').default);
Vue.component('ordonatori-credite', require('./components/OrdonatoriCredite.vue'));
Vue.component('institutii', require('./components/Institutii.vue'));
Vue.component('institutie', require('./components/Institutie.vue'));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router: router
});

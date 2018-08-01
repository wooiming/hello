import Vue from 'nativescript-vue';

import router from './router';

import store from './store';

import './styles.scss';

import {TNSFontIcon, fonticon} from 'nativescript-fonticon';

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;


TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  'fa': './font-awesome.css'
};
TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon);

Vue.registerElement('CardView', () => require('nativescript-cardview').CardView)

new Vue({

  router,

  store,

}).$start();

import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';
import {getString} from 'tns-core-modules/application-settings'

Vue.use(VueRouter);

import Home from '../components/Home';
import HelloWorld from '../components/HelloWorld';
import Counter from '../components/Counter';
import Login from '../components/Login';
import Main from '../components/Main';
import InspectionDetail from '../components/InspectionDetail';

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/hello',
      component: HelloWorld,
      meta: {
        title: 'Hello World',
      },
    },
    {
      path: '/counter',
      component: Counter,
      meta: {
        title: 'Counter',
      },
    },
    {
      path: '/login',
      component: Login,
      meta: {
        title: 'Login'
      }
    },
    {
      path: '/main',
      component: Main,
      meta: {
        title : 'Main'
      }
    },
    {
      path: '/inspection/details',
      name: 'inspection-details',
      component: InspectionDetail
    },
    {path: '*', redirect: '/home'},
  ],
});
 
if(getString('token') !== undefined) {
  router.replace('/main');
}else {
  router.replace('/login');

}

module.exports = router;

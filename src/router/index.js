import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(
        /* webpackChunkName: "registerVaccine" */ '../views/RegisterVaccine.vue'
      )
  },
  {
    path: '/registerPatient',
    name: 'RegisterPatient',
    component: () =>
      import(
        /* webpackChunkName: "registerPatient" */ '../views/RegisterPatient.vue'
      )
  },
  {
    path: '/registerDose',
    name: 'RegisterDose',
    component: () =>
      import(/* webpackChunkName: "registerDose" */ '../views/RegisterDose.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;

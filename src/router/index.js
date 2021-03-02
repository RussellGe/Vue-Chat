// import Vue from "vue";
import {createRouter, createWebHashHistory} from "vue-router";
import Home from '../pages/Home'
import Message from '../pages/Message'

const routes = [
    { path: '/', component: Home },
    { path: '/message', component: Message },
  ]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })



export default router
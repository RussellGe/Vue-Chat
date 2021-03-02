// import Vue from "vue";
import {createRouter, createWebHashHistory} from "vue-router";
import Home from '../pages/Home'
import Message from '../pages/Message'
import Register from '../pages/Register'

const routes = [
    { path: '/', component: Home },
    { path: '/message', component: Message },
    { path: '/register', component: Register },
  ]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })



export default router
import Vue from 'vue';
import VueRouter from 'vue-router';
import { User } from "../models/my-fetch";
import Home from '../views/Home.vue';
import Game from '../views/Game';
import Login from '../views/Login';
import JoinGame from '../views/JoinGame';
import BURNT from '../views/About';
import TIME from '../views/Time';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: Home },
  { 
    path: '/game', name: 'game', component: Game,
    beforeEnter: (to, from, next) => {
      if(User.User_Id == null){
        next( { name: "login" } )
      }else{
        next();
      }
    }
  },
  { path: '/login', name: 'login', component: Login },
  { path: '/join', name: 'join-game', component: JoinGame },
  { path: '/burnt', name: 'calorie', component: BURNT },
  { path: '/time', name: 'time', component: TIME },

  /*{
    path: '/calorie',
    name: 'calorie',
    // route level code-splitting
    // this generates a separate chunk (calorie.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "calorie" *-/ '../views/About.vue'),
  },*/
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

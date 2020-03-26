import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import meetups from '../components/meetup/meetups.vue'
import createmeetup from '../components/meetup/createmeetup.vue'
import profile from '../components/user/profile.vue'
import signin from '../components/user/signin.vue'
import signup from '../components/user/signup.vue'
import meetup from '../components/meetup/meetup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/meetups',
    name: 'meetups',
    component: meetups
  },

  {
    path: '/meetup/new',
    name: 'createmeetup',
    component: createmeetup
  },
  {
    path: '/meetups/:id',
    name: 'meetup',
    props: true,
    component: meetup
  },

  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/signin',
    name: 'signin',
    component: signin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

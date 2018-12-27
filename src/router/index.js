import Vue from 'vue'
import Router from 'vue-router'
import Guest from '@/components/Guest'
import GuestName from '@/components/GuestName'
import GuestLink from '@/components/GuestLink'
import GuestIdentity from '@/components/GuestIdentity'
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import Place from '@/components/Place'
import Hostel from '@/components/Hostel'
import Gift from '@/components/Gift'
import Form from '@/components/Form'
import Redirect404 from '@/components/Redirect404'
let token

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/guest',
      name: 'Guest',
      component: Guest,
      children: [
        {
          path: '/guest/link',
          name: 'GuestLink',
          component: GuestLink,
          props: true
          // beforeEnter (to, from, next) {
          //   if () {
          //     next()
          //   } else {
          //     next({name: 'Redirect404'})
          //   }
          // }
        },
        {
          path: '/guest/name',
          name: 'GuestName',
          component: GuestName
        },
        {
          path: '/guest/identity',
          name: 'GuestIdentity',
          component: GuestIdentity
        }
      ]
    },
    {
      path: '/404',
      name: 'Redirect404',
      component: Redirect404
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter (to, from, next) {
        if (token) {
          next()
        } else {
          next({name: 'Guest'})
        }
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/place',
      name: 'Place',
      component: Place
    },
    {
      path: '/hostel',
      name: 'Hostel',
      component: Hostel
    },
    {
      path: '/gift',
      name: 'Gift',
      component: Gift
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    }
  ]
})

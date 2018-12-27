import Vue from 'vue'
import Router from 'vue-router'
import Guest from '@/components/Guest'
import GuestLink from '@/components/GuestLink'
import GuestName from '@/components/GuestName'
import GuestIdentity from '@/components/GuestIdentity'
import GuestWrongIdentity from '@/components/GuestWrongIdentity'
import GuestConfirmIdentity from '@/components/GuestConfirmIdentity'
import GuestNotFound from '@/components/GuestNotFound'
import GuestData from '@/components/GuestData'
import GuestAccess from '@/components/GuestAccess'
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import Place from '@/components/Place'
import Hostel from '@/components/Hostel'
import Gift from '@/components/Gift'
import Form from '@/components/Form'
import Redirect404 from '@/components/Redirect404'
import store from '../store'
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
          props: true,
          beforeEnter (to, from, next) {
            if (store.state.token) {
              next()
            } else {
              next({name: 'Guest'})
            }
          }
        },
        {
          path: '/guest/name',
          name: 'GuestName',
          component: GuestName,
          props: true,
          beforeEnter (to, from, next) {
            if (store.state.token) {
              next()
            } else {
              next({name: 'Guest'})
            }
          }
        },
        {
          path: '/guest/identity',
          name: 'GuestIdentity',
          component: GuestIdentity,
          props: true,
          beforeEnter (to, from, next) {
            if (store.state.token) {
              next()
            } else {
              next({name: 'Guest'})
            }
          }
        },
        {
          path: '/guest/find-identity',
          name: 'GuestWrongIdentity',
          component: GuestWrongIdentity,
          props: true,
          beforeEnter (to, from, next) {
            if (store.state.token) {
              next()
            } else {
              next({name: 'Guest'})
            }
          }
        },
        {
          path: '/guest/confirm-identity',
          name: 'GuestConfirmIdentity',
          component: GuestConfirmIdentity,
          props: true,
          beforeEnter (to, from, next) {
            if (store.state.token) {
              next()
            } else {
              next({name: 'Guest'})
            }
          }
        },
        {
          path: '/guest/not-found-contact',
          name: 'GuestNotFound',
          component: GuestNotFound,
          props: true,
          beforeEnter (to, from, next) {
            if (store.state.token) {
              next()
            } else {
              next({name: 'Guest'})
            }
          }
        },
        {
          path: '/guest/data',
          name: 'GuestData',
          component: GuestData,
          props: true,
          beforeEnter (to, from, next) {
            if (store.state.token) {
              next()
            } else {
              next({name: 'Guest'})
            }
          }
        },
        {
          path: '/guest/access',
          name: 'GuestAccess',
          component: GuestAccess,
          props: true,
          beforeEnter (to, from, next) {
            if (store.state.token) {
              next()
            } else {
              next({name: 'Guest'})
            }
          }
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
      props: true,
      beforeEnter (to, from, next) {
        if (store.state.token) {
          next()
        } else {
          next({name: 'Guest'})
        }
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      props: true,
      beforeEnter (to, from, next) {
        if (store.state.token) {
          next()
        } else {
          next({name: 'Guest'})
        }
      }
    },
    {
      path: '/place',
      name: 'Place',
      component: Place,
      props: true,
      beforeEnter (to, from, next) {
        if (store.state.token) {
          next()
        } else {
          next({name: 'Guest'})
        }
      }
    },
    {
      path: '/hostel',
      name: 'Hostel',
      component: Hostel,
      props: true,
      beforeEnter (to, from, next) {
        if (store.state.token) {
          next()
        } else {
          next({name: 'Guest'})
        }
      }
    },
    {
      path: '/gift',
      name: 'Gift',
      component: Gift,
      props: true,
      beforeEnter (to, from, next) {
        if (store.state.token) {
          next()
        } else {
          next({name: 'Guest'})
        }
      }
    },
    {
      path: '/form',
      name: 'Form',
      component: Form,
      props: true,
      beforeEnter (to, from, next) {
        if (store.state.token) {
          next()
        } else {
          next({name: 'Guest'})
        }
      }
    }
  ]
})

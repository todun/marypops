import Vue from 'vue'
import Router from 'vue-router'
import Guest from '@/components/guest/Guest'
import GuestLink from '@/components/guest/GuestLink'
import GuestName from '@/components/guest/GuestName'
import GuestIdentity from '@/components/guest/GuestIdentity'
import GuestWrongIdentity from '@/components/guest/GuestWrongIdentity'
import GuestConfirmIdentity from '@/components/guest/GuestConfirmIdentity'
import GuestNotFound from '@/components/guest/GuestNotFound'
import GuestData from '@/components/guest/GuestData'
import GuestAccess from '@/components/guest/GuestAccess'
import Home from '@/components/pages/Home'
import Contact from '@/components/pages/Contact'
import Place from '@/components/pages/Place'
import Hostel from '@/components/pages/Hostel'
import Gift from '@/components/pages/Gift'
import Form from '@/components/pages/Form'
import Utils from '@/components/pages/Utils'
import Karaoke from '@/components/pages/Karaoke'
import Following from '@/components/pages/Following'
import Redirect404 from '@/components/pages/Redirect404'
import store from '../store'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/guest',
      name: 'Guest',
      component: Guest,
      props: true,
      beforeEnter (to, from, next) {
        if (store.state.token || store.getters.isRegistered) {
          next({name: 'Home'})
        } else {
          next()
        }
      },
      children: [
        {
          path: '/guest/link',
          name: 'GuestLink',
          component: GuestLink,
          props: true,
          beforeEnter (to, from, next) {
            if (store.state.token || store.getters.isRegistered) {
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
            if (store.state.token || store.getters.isRegistered) {
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
            if (store.state.token || store.getters.isRegistered) {
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
            if (store.state.token || store.getters.isRegistered) {
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
            if (store.state.token || store.getters.isRegistered) {
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
            if (store.state.token || store.getters.isRegistered) {
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
            if (store.state.token || store.getters.isRegistered) {
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
            if (store.state.token || store.getters.isRegistered) {
              next()
            } else {
              next({name: 'Guest'})
            }
          }
        }
      ]
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: true,
      beforeEnter (to, from, next) {
        if (store.state.token || store.getters.isRegistered) {
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
        if (store.state.token || store.getters.isRegistered) {
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
        if (store.state.token || store.getters.isRegistered) {
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
        if (store.state.token || store.getters.isRegistered) {
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
        if (store.state.token || store.getters.isRegistered) {
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
        if (store.state.token || store.getters.isRegistered) {
          next()
        } else {
          next({name: 'Guest'})
        }
      }
    },
    {
      path: '/utils',
      name: 'Utils',
      component: Utils,
      props: true,
      beforeEnter (to, from, next) {
        if (store.state.token || store.getters.isRegistered) {
          next()
        } else {
          next({name: 'Guest'})
        }
      }
    },
    {
      path: '/karaoke',
      name: 'Karaoke',
      component: Karaoke
    },
    {
      path: '/following',
      name: 'Following',
      component: Following
    },
    {
      path: '*',
      name: 'Redirect404',
      component: Redirect404
    }
  ]
})

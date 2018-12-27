/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from './router/index';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    guest: {
      firstname: null,
      lastname: null,
      link: null
    }
  },

  mutations: {
    mutateGuestInfo (state, guest) {
      state.guest.firstname = guest.firstname
      state.guest.lastname = guest.lastname
      state.guest.link = guest.link
    },

    mutateToken (state, token) {
      state.token = token
    }
  },
  actions: {
    setToken ({commit}, token) {
      axios.post('http://localhost:3000/token', {
        token: token.token
      })
      .then(res => {
        console.log('response', res)
        commit('mutateToken', {
          token: true
        })
        router.push({name: 'GuestLink'})
      })
    },

    setGuest ({commit}, guest) {
      axios.get(`http://localhost:3000/guests/${guest.firstname}`)
        .then(res => {
          commit('mutateGuestInfo', {
            firstname: res.data[0].firstname,
            lastname: res.data[0].lastname,
            link: res.data[0].link
          })
        })
        .then(() => {
          router.push({name: 'GuestIdentity'})
        })
        .catch(error => console.log(error))
    },
  },
  getters: {
    //
  }
})
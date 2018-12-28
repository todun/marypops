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
      link: null,
      email: null,
      phone: null,
      address: null,
      alone: null,
      children: null
    }
  },

  mutations: {
    mutateToken (state, token) {
      state.token = token
    },

    mutateGuestInfo (state, guest) {
      state.guest.firstname = guest.firstname
      state.guest.lastname = guest.lastname
      state.guest.link = guest.link
    },
    mutateGuestData (state, guest) {
      state.guest.email = guest.email
      state.guest.phone = guest.phone
      state.guest.address = guest.address
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

    setGuestWithLastname ({commit}, guest) {
      console.log(`http://localhost:3000/guests/${guest.firstname}&${guest.lastname}`)
      axios.get(`http://localhost:3000/guests/${guest.lastname}/${guest.firstname}`)
        .then(res => {
          commit('mutateGuestInfo', {
            firstname: res.data[0].firstname,
            lastname: res.data[0].lastname,
            link: res.data[0].link
          })
        })
        .then(() => {
          router.push({name: 'GuestConfirmIdentity'})
        })
        .catch(error => console.log(error))
    },

    setGuestData ({commit}, guest) {
      axios.put(`http://localhost:3000/guests`, guest)
        .then(res => {
          console.log('res', res)
          commit('mutateGuestData', {
            email: res.data[0].email,
            phone: res.data[0].phone,
            address: res.data[0].address
          })
        })
        .then(() => {
          router.push({name: 'GuestAccess'})
        })
        .catch(error => console.log(error))
    }
  },
  getters: {
    //
  }
})
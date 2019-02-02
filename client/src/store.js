/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from './router/index';

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    token: null,
    seeEvent: false,
    inputError: false,
    guest: {
      firstname: null,
      lastname: null,
      link: null,
      email: null,
      phone: null,
      address: null,
      alone: null,
      brunch: null,
      coming: null,
      loverFirstname: null,
      hasChildren: null,
      children: null,
      song: null
    }
  },

  mutations: {
    mutateToken (state, token) {
      state.token = token
    },

    mutateSeeEvent (state, seeEvent) {
      state.seeEvent = seeEvent
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
      axios.post(`/api/token`, {
        token: token.token
      })
      .then(res => {
        console.log('response in store token', res)
        commit('mutateToken', {
          token: true
        })
        router.push({name: 'GuestLink'})
      })
      .catch(err =>{
        console.log('in err store', err)
        this.state.inputError = true
        console.log('this.msgErr .',this.msgErr )
        return this.msgErr = true
      })
    },

    setSeeEvent ({commit}) {
      commit('mutateSeeEvent', {
        seeEvent: true
      })
    },

    setGuest ({commit}, guest) {
      axios.get(`/api/guests/${guest.firstname}`)
        .then(res => {
          console.log('res', res)
          if (res.data.length > 0) {
            commit('mutateGuestInfo', {
              firstname: res.data[0].firstname,
              lastname: res.data[0].lastname,
              link: res.data[0].link
            })
              router.push({name: 'GuestIdentity'})
          } else {
            commit('mutateGuestInfo', {
              firstname: ''
            })
          }
        })
        .catch(error => console.log(error))
    },

    setGuestWithLastname ({commit}, guest) {
      axios.get(`/api/guests/${guest.lastname}/${guest.firstname}`)
        .then(res => {
          console.log('res setGuestWithLastname', res)
          if (res.data.length > 0) {
            commit('mutateGuestInfo', {
              firstname: res.data[0].firstname,
              lastname: res.data[0].lastname,
              link: res.data[0].link
            })
            router.push({name: 'GuestConfirmIdentity'})
          } else {
            commit('mutateGuestInfo', {
              firstname: this.state.guest.firstname,
              lastname: ''
            })
          }
        })
        .catch(error => console.log(error))
    },

    setGuestData ({commit}, guest) {
      axios.put(`/api/guests`, guest)
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
    },

    setGuestResponse({commit}, guest) {
      console.log('setGuestResponse', guest)
      axios.put(`/api/guests`, guest)
        .then(res => {
          console.log('res', res)
        })
        .then(() => {
         console.log('done')
        })
        .catch(error => console.log(error))
    }
  },
  getters: {
    //
  }
})

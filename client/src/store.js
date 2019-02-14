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
      song: null,
      fillForm: 1
    },
    registered: {
      firstname: null
    }
  },

  mutations: {
    mutateToken (state, token) {
      state.token = token
    },

    mutateSeeEvent (state, seeEvent) {
      state.seeEvent = seeEvent
    },
    mutateLink (state, guest) {
      state.guest.link = guest.link
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
    },
    mutateGuestResponse (state, guest) {
      state.guest.alone = guest.alone
      state.guest.brunch = guest.brunch
      state.guest.coming = guest.coming
      state.guest.hasChildren = guest.hasChildren
      state.guest.song = guest.song
      state.guest.fillForm = guest.fillForm
      state.guest.loverFirstname = guest.loverFirstname
      state.guest.children = guest.children
    },
    registered (state, guest) {
      state.registered.firstname = guest.firstname
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
      })
    },

    setSeeEvent ({commit}) {
      commit('mutateSeeEvent', {
        seeEvent: true
      })
    },

    setLink ({commit}, guest) {
      console.log('link', guest)
      commit('mutateLink', {
        link: guest.link
      })
    },

    setGuest ({commit}, guest) {
      console.log('guest', guest)
      axios.get(`/api/guests/${guest.link}/${guest.firstname}`)
        .then(res => {
          console.log('res', res)
          if (res.data.length > 0) {
            commit('mutateGuestInfo', {
              firstname: res.data[0].firstname,
              lastname: res.data[0].lastname,
              link: res.data[0].link,
            })
              router.push({name: 'GuestIdentity'})
          } else {
            this.state.inputError = true
            commit('mutateGuestInfo', {
              firstname: '',
              link: guest.link
            })
          }
        })
        .catch(error => console.log(error))
    },

    setGuestWithLastname ({commit}, guest) {
      axios.get(`/api/guests/${guest.link}/${guest.lastname}/${guest.firstname}`)
        .then(res => {
          console.log('res setGuestWithLastname', res)
          if (res.data.length > 0) {
            commit('mutateGuestInfo', {
              link: this.state.guest.link,
              firstname: res.data[0].firstname,
              lastname: res.data[0].lastname,
            })
            router.push({name: 'GuestConfirmIdentity'})
          } else {
            this.state.inputError = true
            commit('mutateGuestInfo', {
              link: this.state.guest.link,
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
          commit('mutateGuestResponse', {
            alone: res.data[0].alone,
            brunch: res.data[0].brunch,
            coming: res.data[0].coming,
            loverFirstname: res.data[0].lover_firstname,
            hasChildren: res.data[0].has_children,
            children: res.data[0].children,
            song: res.data[0].song,
            fillForm: res.data[0].fill_form
          })
        })
        .then(() => {
          localStorage.setItem('formFilled', this.state.guest.firstname)
        })
        .catch(error => console.log(error))
    },
    tryAutoLogin ({commit}) {
      const firstname = localStorage.getItem('formFilled')
      if (!firstname) {
        return
      }
      commit('registered', {
        firstname: firstname
      })
      router.replace({name: 'Home'});
    },
  },
  getters: {
    isRegistered: state => {
      return state.registered.firstname !== null
    }
  }
})

<template>
  <section class="">
    <h1 class="page-title">Présence</h1>
    <h3 class="page-subtitle">A remplir avant le 31 mars 2019</h3>
    <section class="container__content" v-if="guest.fillForm === 1">
      <div class="botui-app-container" id="my-botui-app" v-if="guest.fillForm === 1">
        <bot-ui v-if="!formFilled"></bot-ui>
      </div>
       <div class="btn-wrapper"><a v-if="formData.over" class="btn btn--blue" @click="onSubmit">Envoyer la réponse</a></div>
    </section>
    <section class="container__content" v-if="formFilled" >
      <h3>Merci pour votre réponse</h3>
    </section>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { initBotApp } from './../../my-botui-app'

export default {
  name: 'Form',
  computed: {
    ...mapState({
      guest: state => state.guest
    }),
    formFilled: function () {
      return this.formFull
    }
  },
  data () {
    return {
      data: {},
      formData: {},
      formFull: false
    }
  },
  methods: {
    onSubmit () {
      this.data.coming = this.formData.coming
      this.data.alone = this.formData.alone
      this.data.brunch = this.formData.brunch
      this.data.loverFirstname = this.formData.loverFirstname
      this.data.hasChildren = this.formData.hasChildren
      this.data.children = this.formData.children
      this.data.song = this.formData.song
      this.data.fillForm = 0
      let response = this.data
      console.log('res on submit', response)
      this.$store.dispatch('setGuestResponse', {response})
    }
  },
  mounted () {
    this.data = this.guest
    console.log('data', this.data)
    this.formData = initBotApp()
    console.log('this.formData', this.formData)
  },
  updated () {
    if (this.guest.fillForm === 0) {
      this.formFull = true
    } else {
      this.formFull = false
    }
  }
}
</script>

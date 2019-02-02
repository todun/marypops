<template>
  <section class="">
    <h1 class="page-title">Présence</h1>
    <h3 class="page-subtitle">A remplir avant le 31 mars 2019</h3>
    <section class="container__content" v-if="guest.fillForm === 1">
      <div class="botui-app-container" id="my-botui-app" v-if="guest.fillForm === 1">
        <bot-ui v-if="guest.fillForm === 1"></bot-ui>
      </div>
       <a v-if="formData.over" class="btn btn--blue" @click="onSubmit">Envoyer la réponse</a>
    </section>
    <section class="container__content" v-if="guest.fillForm === 0 " >
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
    })
  },
  data () {
    return {
      data: {},
      formData: {}
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
  }
}
</script>

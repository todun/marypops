<template>
  <section class="">
    <h1 class="page-title">Présence</h1>
    <section class="container__content">
      <div class="botui-app-container" id="my-botui-app">
        <bot-ui></bot-ui>
      </div>
       <a v-if="formData.over" class="btn btn--blue" @click="onSubmit">Envoyer la réponse</a>
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

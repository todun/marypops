<template>
  <div id="app" @click="openMenu = false">
    <app-header/>
    <main><router-view/></main>
    <app-footer/>
  </div>
</template>

<script>
import Header from './components/general/Header'
import Footer from './components/general/Footer'

export default {
  name: 'App',
  components: {
    appHeader: Header,
    appFooter: Footer
  },
  data () {
    return {
    }
  },
  beforeCreate () {
    this.$store.dispatch('tryAutoLogin')
  }
}
</script>
<style lang="sass">
@import './assets/sass/style'
</style>

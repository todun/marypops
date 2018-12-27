<template>
  <div id="app">
    <app-header/>
    <main>
      <router-view/>
    </main>
    <app-footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>
<style lang="sass">
@import './assets/sass/style'
</style>

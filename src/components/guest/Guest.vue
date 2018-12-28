<template>
  <div style="height: 84vh">
    <section class="container" v-if="!token">
      <section class="container__content">
        <article>
          <h2>Merci d'être ici!</h2>
          <h2>Veuillez entrer votre code</h2>
        </article>
        <form @submit.prevent="onSubmit">
        <input type="text" name="token" placeholder="Votre code" class="input" v-model="inputToken">
        <p v-if="inputError"> Le code n'est pas le bon....</p>
        <input type="submit" value="Valider!" class="btn btn--orange btn--input">
      </form>
      </section>
    </section>
    <router-view v-if="token"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Guest',
  computed: {
    ...mapState({
      token: state => state.token
    })
  },
  data () {
    return {
      inputError: false,
      inputToken: ''
    }
  },
  methods: {
    onSubmit () {
      let formattingData = this.inputToken.trim().toUpperCase()
      this.$store.dispatch('setToken', {token: formattingData})
    }
  }
}
</script>
<style lang="sass">
@import '../../assets/sass/guest'
</style>

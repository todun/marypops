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

export default {
  name: 'Guest',
  data () {
    return {
      token: false,
      inputError: false,
      inputToken: ''
    }
  },
  methods: {
    onSubmit () {
      // let inputToken = this.token
      console.log('inputoken', this.inputToken)
      if (this.inputToken === 'code') {
        this.token = true
        this.$router.push({ name: 'GuestLink' })
      } else {
        this.inputError = true
      }
    }
  },
  mounted () {
    this.axios.get('http://localhost:3000/guests')
      .then(res => {
        console.log('res', res)
      })
  }
}
</script>
<style lang="sass">
@import '../assets/sass/guest'
</style>

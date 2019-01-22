<template>
  <section class="container">
    <canvas id="anim-guestname"></canvas>
    <section class="container__content">
      <article>
        <h2>Oups...<br> Il nous faut alors plus d'informations,</h2>
        <h2>Quel est votre nom de famille?</h2>
      </article>
      <form @submit.prevent="onSubmit">
        <input type="text" name="lastname" placeholder="Votre nom de famille" class="input" v-model="lastname">
        <input type="submit" value="Valider!" class="btn btn--orange btn--input">
      </form>
    </section>
    <p  class="errors" v-if="guest.lastname === ''"> Oh bah on ne vous trouve pas...Mais pouvez réessayer! (Si le problème persiste, essayez votre conjoint.e ou contactez-nous)</p>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      lastname: ''
    }
  },
  computed: {
    ...mapState({
      guest: state => state.guest
    })
  },
  methods: {
    onSubmit () {
      let formattingData = this.lastname.trim().toUpperCase()
      this.$store.dispatch('setGuestWithLastname', {firstname: this.guest.firstname, lastname: formattingData})
    }
  }
}
</script>

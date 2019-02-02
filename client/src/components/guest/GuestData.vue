<template>
  <section class="container">
    <canvas id="anim-guestname"></canvas>
    <section class="container__content">
      <article>
        <h2>Super!!</h2>
        <h2>Mettons nous à jour rapidemment</h2>
      </article>
      <form @submit.prevent="onSubmit">
        <input type="email" name="email" placeholder="Votre email" class="input" v-model="email" required>
        <input type="text" name="address" placeholder="Votre adresse" class="input" v-model="address" required>
        <input type="text" name="phone" placeholder="Votre téléphone" class="input" v-model="phone" required>
        <input type="submit" value="Valider!" class="btn btn--orange btn--input">
      </form>
    </section>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'GuestData',
  computed: {
    ...mapState({
      guest: state => state.guest
    })
  },
  data () {
    return {
      email: '',
      phone: '',
      address: ''
    }
  },
  methods: {
    onSubmit () {
      let formData = {
        firstname: this.guest.firstname,
        lastname: this.guest.lastname,
        email: this.email,
        phone: this.phone,
        address: this.address,
        link: this.guest.link
      }
      console.log('formData', formData)
      this.$store.dispatch('setGuestData', {formData})
    }
  }
}
</script>

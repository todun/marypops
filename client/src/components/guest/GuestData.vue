<template>
  <section class="container">
    <canvas id="anim-guestname"></canvas>
    <section class="container__content">
      <article>
        <h2>Super!!</h2>
        <h2>Mettons nous à jour rapidemment</h2>
      </article>
      <form @submit.prevent="onSubmit">
        <input id="email" type="email" name="email" placeholder="Votre email" class="input" v-model.lazy="email" @blur="$v.email.$touch()" >
        <p :class="{invalid: $v.email.$error}" v-if="$v.email.$error">Oups adresse mail invalide</p>
        <!-- <input id="address" type="text" name="address" placeholder="Votre adresse" class="input" v-model.lazy="address" @blur="$v.address.$touch()" >
        <p :class="{invalid: $v.address.$error}" v-if="!$v.address.$error">Oups ceci n'est pas une adresse valide</p> -->
        <input id="phone" type="tel" name="phone" placeholder="Votre téléphone" class="input" v-model.lazy="phone" @blur="$v.phone.$touch()" >
        <p :class="{invalid: $v.phone.$error}" v-if="!$v.phone.minLen">Oups ceci n'est pas un numéro valide</p>
        <input type="submit" value="Valider!" :disabled="$v.$invalid" class="btn btn--orange btn--input">
      </form>
    </section>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { required, email, numeric, minLength } from 'vuelidate/lib/validators'
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
      address: 'no adress needed'
    }
  },
  validations: {
    email: {
      required,
      email
    },
    phone: {
      required,
      numeric,
      minLen: minLength(10)
    },
    address: {
      required
    }
  },
  methods: {
    onSubmit () {
      let indexToReplace = []
      let formattingAddress = this.address
      for (let i = 0; i < formattingAddress.length; i++) {
        if (formattingAddress.charAt(i) === '\'') {
          indexToReplace.push(i)
          console.log('tmpAddress', indexToReplace)
        }
      }
      indexToReplace = indexToReplace.sort((a, b) => b - a)
      console.log('tmpAddress last', indexToReplace)
      for (let j = 0; j < indexToReplace.length; j++) {
        console.log(j + indexToReplace[j])
        formattingAddress = formattingAddress.replace(`${formattingAddress[indexToReplace[j + 1]]}`, `''`)
        console.log('formattingAddress', formattingAddress)
      }
      console.log('formattingAddress', formattingAddress)
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

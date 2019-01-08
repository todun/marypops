<template>
  <section class="container">
    <section class="container__content">
      <article>
        <h2>Présence</h2>
      </article>
      <form @submit.prevent="onSubmit">
        <div class="radio">
          <input type="radio" id="no" :value="b" v-model="picked">
          <label for="no">Je ne pourrais pas venir...</label>
        </div>
        <div class="radio">
          <input type="radio" id="yes" :value="a" v-model="picked">
          <label for="yes">Je viendrais avec plaisir</label>
        </div>
        <div v-if="picked == 0">
          <div class="radio">
            <input type="radio" id="alone" :value="a" v-model="alone">
            <label for="alone">Seul.e</label>
          </div>
          <div class="radio">
            <input type="radio" id="withsomeone" :value="b" v-model="alone">
            <label for="withsomeone">Accompagné.e</label>
          </div>
        </div>

        <div v-if="alone == 1">
          <h3>Je viendrais avec:</h3>
          <input type="text" name="firstname" placeholder="Prénom" class="input" v-model="withsomeone.firstname">
          <input type="text" name="lastname" placeholder="Nom" class="input" v-model="withsomeone.lastname">
          <h3>Je viendrais avec des enfants:</h3>
          <div class="radio">
            <input type="radio" id="yes" :value="b" v-model="child">
            <label for="yes">Oui</label>
          </div>
          <div class="radio">
            <input type="radio" id="no" :value="a" v-model="child">
            <label for="no">Non</label>
          </div>
        </div>
        <div v-if="child == 1">
          <input type="text" name="firstname" placeholder="Prénom" class="input" v-model="withchildren.firstname">
          <input v-model.number="withchildren.age" type="number">
        </div>
        <input type="submit" value="Valider!" class="btn btn--orange btn--input">
      </form>
    </section>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Form',
  computed: {
    ...mapState({
      guest: state => state.guest
    })
  },
  data () {
    return {
      a: 0,
      b: 1,
      picked: 2,
      alone: 2,
      child: 2,
      withsomeone: {
        firstname: '',
        lastname: ''
      },
      withchildren: {
        firstname: [],
        age: []
      }
    }
  },
  methods: {
    onSubmit () {
      let formData = {
        firstname: this.guest.firstname,
        lastname: this.guest.lastname,
        email: this.email,
        phone: this.phone,
        address: this.address
      }
      this.$store.dispatch('setGuestData', {formData})
    }
  },
  updated () {
    console.log('picked', this.picked)
    console.log('alone', this.alone)
    console.log('child', this.child)
  }
}
</script>

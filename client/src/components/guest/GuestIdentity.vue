<template>
  <section class="container">
    <vue-particles color="#5CE1E6"
                   :particleOpacity="0.7"
                   :particlesNumber="180"
                   shapeType="circle"
                   :particleSize="8"
                   linesColor="#FF914D"
                   :linesWidth="1"
                   :lineLinked="true"
                   :lineOpacity="0.4"
                   :linesDistance="50"
                   :moveSpeed="0.5">
    </vue-particles>
    <section class="container__content">
      <article>
        <h2>Ah {{guest.firstname}} merci d'être ici!</h2>
        <h2>Confirmez-nous juste que vous êtes bien {{guest.firstname}} {{guest.lastname}}</h2>
      </article>
      <div class="btn-wrapper btn-wrapper__column">
        <a class="btn btn--orange" @click="(() => { this.$router.push({name: 'GuestData'})})">C'est bien moi!</a>
        <a class="btn" @click="(() => { this.$router.push({name: 'GuestWrongIdentity'})})">Ah non mauvais.e {{guest.firstname}}...</a>
      </div>
    </section>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'GuestIdentity',
  computed: {
    ...mapState({
      guest: state => state.guest
    })
  }
}
</script>

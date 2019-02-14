<template>
  <section class="container">
    <vue-particles color="#FFDE59"
                   :particleOpacity="0.7"
                   :particlesNumber="180"
                   shapeType="circle"
                   :particleSize="8"
                   linesColor="#5CE1E6"
                   :linesWidth="1"
                   :lineLinked="true"
                   :lineOpacity="0.4"
                   :linesDistance="50"
                   :moveSpeed="0.5">
    </vue-particles>
    <section class="container__content">
      <article>
        <h2>Ah {{guest.firstname}} {{guest.lastname}} cette fois-ci on vous a trouvé!</h2>
        <h2>N'est-ce pas?</h2>
      </article>
      <div class="btn-wrapper btn-wrapper__column">
        <a class="btn btn--orange" @click="(() => { this.$router.push({name: 'GuestData'})})">Oui c'est bien moi!</a>
        <a class="btn" @click="(() => { this.$router.push({name: 'GuestNotFound'})})">Non...c'est toujours pas moi</a>
      </div>
    </section>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'GuestConfirmIdentity',
  computed: {
    ...mapState({
      guest: state => state.guest
    })
  }
}
</script>

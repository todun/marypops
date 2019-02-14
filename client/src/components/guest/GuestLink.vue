<template>
  <section class="container">
    <vue-particles color="#FF914D"
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
        <h2>Bienvenue sur notre site!</h2>
        <h2>Quel est votre lien avec les mariées?</h2>
      </article>
      <div class="btn-wrapper btn-wrapper__row">
        <a class="btn" @click="linkValidated(link[1])">Jana</a>
        <a class="btn" @click="linkValidated(link[0])">Olivia</a>
      </div>
    </section>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'GuestLink',
  computed: {
    ...mapState({
      guest: state => state.guest
    })
  },
  data () {
    return {
      link: [0, 1]
    }
  },
  methods: {
    linkValidated (link) {
      this.$store.dispatch('setLink', {link})
        .then(() => {
          this.$router.push({ name: 'GuestName' })
        })
    }
  }
}
</script>
<style lang="sass">

</style>

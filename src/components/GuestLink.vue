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
                   :moveSpeed="3">
    </vue-particles>
    <section class="container__content">
      <article>
        <h2>Bienvenue sur notre site!</h2>
        <h2>Quel est votre lien avec les mariées?</h2>
      </article>
      <div class="btn-wrapper btn-wrapper__row">
        <a class="btn" @click="linkValidated(link[0])">Jana</a>
        <a class="btn" @click="linkValidated(link[1])">Olivia</a>
      </div>
    </section>
  </section>
</template>

<script>

export default {
  name: 'GuestLink',
  data () {
    return {
      link: ['jana', 'olivia']
    }
  },
  methods: {
    linkValidated (link) {
      console.log('link', link)
      console.log('this.link[1]', this.link[1])
      console.log('this.link[0]', this.link[0])
      if (link === this.link[1]) {
        console.log('olivia db')
        this.$router.push({ name: 'GuestName' })
      } else {
        console.log('jana db')
        this.$router.push({ name: 'GuestName' })
      }
    }
  }
}
</script>
<style lang="sass">

</style>

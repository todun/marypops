<template>
  <section class="container">
    <canvas id="anim-guestname"></canvas>
    <section class="container__content">
      <article>
        <h2>Merci pour toutes ces informations!</h2>
        <h2>Maintenant nous vous laissons découvrir</h2>
        <h2>Notre heureux événement...</h2>
      </article>
      <div class="btn-wrapper btn-wrapper__column">
        <a class="btn btn--orange" @click="(() => { this.$router.push({name: 'Home'})})">Voir l'événement</a>
      </div>
    </section>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'GuestAccess',
  computed: {
    ...mapState({
      guest: state => state.guest
    })
  }
}
</script>

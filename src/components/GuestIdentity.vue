<template>
  <section class="container">
    <canvas id="anim-guestname"></canvas>
    <section class="container__content">
      <article>
        <h2>Ah {{guest.firstname}} merci d'être ici!</h2>
        <h2>Confirmez-nous juste que vous êtes bien {{guest.firstname}} {{guest.lastname}}</h2>
      </article>
      <div>
        <a class="btn">C'est bien moi!</a>
        <a class="btn">Ah non mauvais {{guest.firstname}}</a>
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

<template>
  <section class="container">
    <canvas id="anim-guestname"></canvas>
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

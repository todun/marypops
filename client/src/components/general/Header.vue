<template>
    <header>
      <img src="../../assets/icons/menu.svg" v-if="(token && seeEvent) || isRegistered" alt="icon-menu" @click="openMenu = true">
      <p v-if="(token && seeEvent) || isRegistered"  @click="openMenu = true">MENU</p>
      <h1>Jana<span>&</span>Olivia</h1>
      <div></div>
      <transition name="menu">
      <nav v-if="openMenu">
        <ul class="">
          <li class=""><router-link tag="li" active-class="active" exact :to="{ name: 'Home' }">Accueil</router-link></li>
          <li class=""><router-link tag="li" active-class="active" :to="{ name: 'Form' }">Formulaire de présence</router-link></li>
          <li class=""><router-link tag="li" active-class="active" :to="{ name: 'Place' }">Les lieux</router-link></li>
          <li class=""><router-link tag="li" active-class="active" :to="{ name: 'Hostel' }">Hébergements</router-link></li>
          <li class=""><router-link tag="li" active-class="active" :to="{ name: 'Gift' }">Liste de Mariage</router-link></li>
          <li class=""><router-link tag="li" active-class="active" :to="{ name: 'Utils' }">Infos Utiles</router-link></li>
          <li class=""><router-link tag="li" active-class="active" :to="{ name: 'Contact' }">Contact</router-link></li>
        </ul>
      </nav>
    </transition>
    <transition name="menu-side">
      <div v-if="openMenu" class="nav-side" @click="openMenu = false"></div>
    </transition>
    </header>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data () {
    return {
      openMenu: false
    }
  },
  watch: {
    '$route' (to, from) {
      this.openMenu = false
    }
  },
  computed: {
    ...mapState({
      token: state => state.token,
      seeEvent: state => state.seeEvent
    }),
    ...mapGetters(['isRegistered'])
  }
}
</script>

<template>
  <div>
    <header>
      <!-- <img src="../../assets/icons/menu.svg" v-if="token &&seeEvent" alt="icon-menu" @click="openMenu = true"> -->
      <img src="../../assets/icons/menu.svg" alt="icon-menu" @click="openMenu = true">
      <h1>Jana<span>&</span>Olivia</h1>
    </header>
    <transition name="menu">
      <nav v-if="openMenu">
        <ul class="">
          <li class=""><router-link tag="li" active-class="active" exact :to="{ name: 'Home' }">Accueil</router-link></li>
          <li class=""><router-link tag="li" active-class="active" :to="{ name: 'Form' }">Formulaire de présence</router-link></li>
          <li class=""><router-link tag="li" active-class="active" :to="{ name: 'Place' }">Le lieu</router-link></li>
          <li class=""><router-link tag="li" active-class="active" :to="{ name: 'Hostel' }">Hébergement</router-link></li>
          <li class=""><router-link tag="li" active-class="active" :to="{ name: 'Gift' }">Liste de Mariage</router-link></li>
          <li class=""><router-link tag="li" active-class="active" :to="{ name: 'Contact' }">Contact</router-link></li>
        </ul>
      </nav>
    </transition>
    <transition name="menu-side">
      <div v-if="openMenu" class="nav-side" @click="openMenu = false"></div>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
    })
  },
  methods: {
  }
}
</script>

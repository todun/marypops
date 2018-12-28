<template>
  <div>
    <header>
      <img src="../../assets/icons/menu.svg" alt="icon-menu" @click="openMenu = true">
      <h1>Jana<span>&</span>Olivia</h1>
    </header>
    <nav v-if="openMenu" :class="[openMenu ? animFromLeft : animLeftRight]">
      <ul class="">
        <li class=""><router-link @click="openMenu = false" data-toggle="collapse" data-target=".navbar-collapse" class="nav-link" active-class="active" exact :to="{ name: 'Home' }">Accueil</router-link></li>
        <li class=""><router-link @click="openMenu = false" data-toggle="collapse" data-target=".navbar-collapse" class="nav-link" active-class="active" :to="{ name: 'Form' }">Formulaire de présence</router-link></li>
        <li class=""><router-link @click="openMenu = false" data-toggle="collapse" data-target=".navbar-collapse" class="nav-link" active-class="active" :to="{ name: 'Place' }">Le lieu</router-link></li>
        <li class=""><router-link @click="openMenu = false" data-toggle="collapse" data-target=".navbar-collapse" class="nav-link" active-class="active" :to="{ name: 'Hostel' }">Hébergement</router-link></li>
        <li class=""><router-link @click="openMenu = false" data-toggle="collapse" data-target=".navbar-collapse" class="nav-link" active-class="active" :to="{ name: 'Gift' }">Liste de Mariage</router-link></li>
        <li class=""><router-link @click="openMenu = false" data-toggle="collapse" data-target=".navbar-collapse" class="nav-link" active-class="active" :to="{ name: 'Contact' }">Contact</router-link></li>
      </ul>
    </nav>
    <div class="nav-side" v-if="openMenu" :class="[openMenu ? animFromLeft : animLeftRight]" @click="openMenu = false"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      openMenu: false,
      animFromLeft: 'anim-from-left',
      animLeftRight: 'anim-left-right'
    }
  },
  methods: {
  }
}
</script>

<template>
  <section class="">
    <h1 class="page-title">Hébergement</h1>
    <article class="card" v-for="hostel in hostels" :key="hostel.index">
      <a :href="hostel.link" target="_blank">
        <div class="card__background" :class="hostel.url">
          <h2 class="card__title">{{ hostel.title }}</h2>
        </div>
        <div class="card__content">
          <p>{{ hostel.description }}</p>
        </div>
      </a>
    </article>
  </section>
</template>

<script>
export default {
  data () {
    return {
      hostels: [
        {
          title: 'La ferme des Moulineaux',
          url: 'ferme_moulineaux',
          link: 'http://www.gitesdesprinces.com/pages/les-gites-de-la-ferme-des-moulineaux-a-bailly-78870-gitesdesprinces.html',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit'
        },
        {
          title: 'La ferme de Pontaly',
          url: 'ferme_pontaly',
          link: 'http://www.fermedepontaly.fr/gites/le-cottage/',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit'
        },
        {
          title: 'Charmilles des Cordeliers',
          url: 'charmilles_cordeliers',
          link: 'http://www.charmillesdescordeliers.com/wordpress/',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit'
        }
      ]
    }
  }
}
</script>

<style lang="sass">

</style>

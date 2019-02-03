<template>
  <section class="">
    <h1 class="page-title">Hébergements</h1>
    <section class="section-container">
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
        },
        {
          title: 'Appart\'City Versailles Saint Cyr',
          url: 'appartcity',
          link: 'https://www.appartcity.com/fr/destinations/ile-de-france/saint-cyr-lecole/versailles-saint-cyr-l-ecole.html',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit'
        },
        {
          title: 'Hotel Première Classe Versailles - Saint Cyr L\'Ecole',
          url: 'premiere_classe',
          link: 'https://www.premiereclasse.com/fr/hotels/premiere-classe-versailles-st-cyr-lecole?utm_source=google&utm_medium=maps&utm_content=FRA22118&utm_campaign=Premi%C3%A8re+Classe',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit'
        },
        {
          title: 'Hotel Ibis Versailles Parly 2',
          url: 'ibis',
          link: 'https://www.accorhotels.com/fr/hotel-0939-ibis-versailles-parly-2/index.shtml#section-description',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit'
        },
        {
          title: 'Hotel Mercure Versailles Parly 2',
          url: 'mercure',
          link: 'https://www.accorhotels.com/fr/hotel-0379-hotel-mercure-versailles-parly-2/index.shtml#section-description',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit'
        }
      ]
    }
  }
}
</script>

<style lang="sass">

</style>

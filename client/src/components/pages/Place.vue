<template>
  <section class="">
    <h1 class="page-title">Les Lieux</h1>
    <section class="section-container">
      <article class="card" v-for="place in places" :key="place.index">
        <div class="card__background" :class="place.url">
          <h2 class="card__title">{{ place.title }}</h2>
        </div>
        <div class="card__content">
          <div>
            <i class="i fas fa-calendar-week"></i>
            <p>{{ place.date }}</p>
          </div>
          <div>
            <i class="i far fa-clock"></i>
            <p>{{ place.hour }}</p>
          </div>
          <div>
            <i class="i fas fa-map-marker-alt"></i>
            <p>{{ place.address }}</p>
          </div>
        </div>
    </article>
    </section>
  </section>
</template>
<script>
export default {
  data () {
    return {
      places: [
        {
          title: 'Mariage Civile à la Mairie de Chatou',
          address: '11 Place du General de Gaulle, 78400 Chatou',
          url: 'mairie_chatou',
          date: 'Samedi 25 Mai 2019',
          hour: 'à 15h',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit'
        },
        {
          title: 'Réception à la Ferme du Prieuré',
          address: 'rue de Villepreux, 78590 Rennemoulin',
          url: 'ferme_prieuré_1',
          date: 'Samedi 25 Mai 2019',
          hour: 'de 17h à 03h',
          link: 'http://www.fermedepontaly.fr/gites/le-cottage/',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit'
        },
        {
          title: 'Brunch à la Ferme du Prieuré',
          address: 'rue de Villepreux, 78590 Rennemoulin',
          url: 'ferme_prieuré_2',
          date: 'Dimanche 26 Mai 2019',
          hour: 'de 11h à 15h',
          link: 'http://www.charmillesdescordeliers.com/wordpress/',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit'
        }
      ]
    }
  }
}
</script>

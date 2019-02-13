<template>
  <section class="page-container">
    <h1 class="page-title">Following</h1>
    <section>
      <h1 class="page-subtitle">Will Come (counter : {{counter}})</h1>
      <div v-for="(comingGuest, index) in comingGuests" :key="index">
        <p>{{index + 1}} . {{comingGuest.firstname}}  {{comingGuest.lastname}}</p>
        <p>accompagné.e : {{comingGuest.lover_firstname !== 'none' ? comingGuest.lover_firstname : 'non'}}</p>
        <p>enfant : {{comingGuest.has_children !== 1 ? comingGuest.children : 'sans enfant'}}</p>
        <p>brunch : {{comingGuest.brunch !== 1 ? 'oui' : 'non'}}</p>
      </div>
    </section>
    <section>
      <h1 class="page-subtitle">Not Coming</h1>
      <div v-for="(el, index) in notComingGuests" :key="index">
        <p > {{index + 1}} . {{el.firstname}} {{el.lastname}}</p>
      </div>
    </section>
    <section>
      <h1 class="page-subtitle">Didn't fill Form</h1>
      <div v-for="(el, index) in notFillForm" :key="index">
        <p> {{index + 1}} . {{el.firstname}} {{el.lastname}}</p>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Following',
  data () {
    return {
      comingGuests: [],
      notComingGuests: [],
      notFillForm: [],
      counter: 0
    }
  },
  methods: {
    fetchComingGuest () {
      this.axios.get(`api/guests`)
        .then(res => {
          res.data.map(el => {
            if (el.fill_form === 0 && el.coming === 0) {
              this.comingGuests.push(el)
              if (el.lover_firstname !== 'none') {
                this.counter += 2
              } else {
                this.counter += 1
              }
            } else if (el.fill_form === 0 && el.coming === 1) {
              this.notComingGuests.push(el)
            } else {
              this.notFillForm.push(el)
            }
          })
        })
    }
  },
  mounted () {
    this.fetchComingGuest()
  }
}
</script>

<style scoped>
  p {
    margin-left: 1em;
  }
</style>

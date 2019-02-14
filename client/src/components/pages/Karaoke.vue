<template>
  <section class="page-container">
    <h1 class="page-title">Karaoke</h1>
    <section>
      <p v-for="(song, index) in songs" :key="song"> {{index + 1}} . {{song}}</p>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Karaoke',
  data () {
    return {
      songs: []
    }
  },
  methods: {
    fetchSongs () {
      this.axios.get(`api/guests/songs`)
        .then(res => {
          res.data.map(el => {
            if (el.song !== null) {
              this.songs.push(el.song)
            }
          })
        })
    }
  },
  mounted () {
    this.fetchSongs()
  }
}
</script>

<style scoped>
  p {
    margin-left: 1em;
  }
</style>

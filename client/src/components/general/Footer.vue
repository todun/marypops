<template>
  <footer>
    <p>{{timeLeft}}</p>
  </footer>
</template>

<script>

export default {
  data () {
    return {
      timeLeft: ''
    }
  },
  methods: {
    calculateTimeLeft () {
      let countDownDate = new Date('May 22, 2019 15:00:00').getTime()
      let x = setInterval(() => {
        let now = new Date().getTime()
        let distance = countDownDate - now
        let days = Math.floor(distance / (1000 * 60 * 60 * 24))
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((distance % (1000 * 60)) / 1000)
        if (distance > 0) {
          this.timeLeft = 'temps restant : ' + days + 'j ' + hours + 'h ' + minutes + 'm ' + seconds + 's '
        } else {
          clearInterval(x)
          this.timeLeft = 'Mais vous devriez être à la mairie!!'
        }
      }, 1000)
    }
  },
  beforeMount () {
    this.calculateTimeLeft()
    console.log(this.timeLeft)
  }
}
</script>

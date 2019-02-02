<template>
  <section style="height: 86vh">

    <section class="container" id="container" v-if="!token">
      <canvas id="anim-guest"></canvas>
      <img class="img_anim" src="../../assets/images/not_blurred.jpg">
      <section class="container__content guest_container">
        <article>
          <h2>Merci d'être ici!</h2>
          <h2>Veuillez entrer votre code</h2>
        </article>
        <form @submit.prevent="onSubmit">
          <input type="text" name="token" placeholder="Votre code" class="input" v-model="inputToken" @focus="hideErrorMessage">
          <input type="submit" value="Valider!" class="btn btn--orange btn--input">
        </form>
      </section>
      <p class="errors" v-if="msgErr && inputToken !== ''"> Le code n'est pas le bon....</p>
    </section>
    <router-view v-if="token"/>

  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Guest',
  computed: {
    ...mapState({
      token: state => state.token,
      seeEvent: state => state.seeEvent,
      inputError: state => state.inputError
    })
  },
  data () {
    return {
      inputToken: '',
      msgErr: false
    }
  },
  methods: {
    onSubmit () {
      let formattingData = this.inputToken.trim().toUpperCase()
      this.$store.dispatch('setToken', {token: formattingData})
      this.msgErr = this.inputError
      console.log('this.inputError', this.inputError)
      console.log('this.msgErr', this.msgErr)
    },
    hideErrorMessage () {
      this.msgErr = false
    }
  },
  mounted () {
    this.msgErr = this.inputError

    let image = document.querySelector('img')
    let imageCanvas = document.getElementById('anim-guest')
    let imageCanvasContext = imageCanvas.getContext('2d')
    let lineCanvas = document.createElement('canvas')
    let lineCanvasContext = lineCanvas.getContext('2d')
    let pointLifetime = 1000
    let points = []

    if (image.complete) {
      start()
    } else {
      image.onload = start
    }

    /**
     * Attaches event listeners and starts the effect.
     */
    function start () {
      document.addEventListener('mousemove', onMouseMove)
      window.addEventListener('resize', resizeCanvases)
      resizeCanvases()
      tick()
    }

    /**
     * Records the user's cursor position.
     *
     * @param {!MouseEvent} event
     */
    function onMouseMove (event) {
      points.push({
        time: Date.now(),
        x: event.clientX,
        y: event.clientY
      })
    }

    /**
     * Resizes both canvases to fill the window.
     */
    function resizeCanvases () {
      imageCanvas.width = lineCanvas.width = window.innerWidth
      imageCanvas.height = lineCanvas.height = window.innerHeight
    }

    /**
     * The main loop, called at ~60hz.
     */
    function tick () {
      // Remove old points
      points = points.filter(function (point) {
        let age = Date.now() - point.time
        return age < pointLifetime
      })

      drawLineCanvas()
      drawImageCanvas()
      requestAnimationFrame(tick)
    }

    /**
     * Draws a line using the recorded cursor positions.
     *
     * This line is used to mask the original image.
     */
    function drawLineCanvas () {
      let minimumLineWidth = 25
      let maximumLineWidth = 100
      let lineWidthRange = maximumLineWidth - minimumLineWidth
      let maximumSpeed = 50

      lineCanvasContext.clearRect(0, 0, lineCanvas.width, lineCanvas.height)
      lineCanvasContext.lineCap = 'round'
      lineCanvasContext.shadowBlur = 30
      lineCanvasContext.shadowColor = '#000'

      for (let i = 1; i < points.length; i++) {
        let point = points[i]
        let previousPoint = points[i - 1]

        // Change line width based on speed
        let distance = getDistanceBetween(point, previousPoint)
        let speed = Math.max(0, Math.min(maximumSpeed, distance))
        let percentageLineWidth = (maximumSpeed - speed) / maximumSpeed
        lineCanvasContext.lineWidth = minimumLineWidth + percentageLineWidth * lineWidthRange

        // Fade points as they age
        let age = Date.now() - point.time
        let opacity = (pointLifetime - age) / pointLifetime
        lineCanvasContext.strokeStyle = 'rgba(0, 0, 0, ' + opacity + ')'

        lineCanvasContext.beginPath()
        lineCanvasContext.moveTo(previousPoint.x, previousPoint.y)
        lineCanvasContext.lineTo(point.x, point.y)
        lineCanvasContext.stroke()
      }
    }

    /**
     * @param {{x: number, y: number}} a
     * @param {{x: number, y: number}} b
     * @return {number} The distance between points a and b
     */
    function getDistanceBetween (a, b) {
      return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))
    }

    /**
     * Draws the original image, masked by the line drawn in drawLineToCanvas.
     */
    function drawImageCanvas () {
      // Emulate background-size: cover
      let width = imageCanvas.width
      let height = imageCanvas.width / image.naturalWidth * image.naturalHeight

      if (height < imageCanvas.height) {
        width = imageCanvas.height / image.naturalHeight * image.naturalWidth
        height = imageCanvas.height
      }

      imageCanvasContext.clearRect(0, 0, imageCanvas.width, imageCanvas.height)
      imageCanvasContext.globalCompositeOperation = 'source-over'
      imageCanvasContext.drawImage(image, 0, 0, width, height)
      imageCanvasContext.globalCompositeOperation = 'destination-in'
      imageCanvasContext.drawImage(lineCanvas, 0, 0)
    }
  }
}
</script>
<style lang="sass">
@import '../../assets/sass/guest'
</style>

<template>
  <section class="container">
    <canvas id="anim-home"></canvas>
  </section>
</template>

<script>
export default {
  methods: {
    draw () {
      var c = document.getElementById('anim-home')
      var ctx = c.getContext('2d')
      ctx.beginPath()
      ctx.moveTo(0, 30)
      ctx.lineTo(80, 30)
      ctx.lineTo(100, 50)
      ctx.lineTo(80, 70)
      ctx.lineTo(20, 70)
      ctx.lineTo(0, 90)
      ctx.lineTo(20, 110)
      ctx.lineTo(100, 110)
      ctx.stroke()
    }
  },
  mounted () {
    window.requestAnimationFrame(this.draw)
  }
}
</script>

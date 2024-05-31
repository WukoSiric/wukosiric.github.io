<script>
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<template>
  <NavBar />
  <div>
    Welcome to my corner of the internet! I’m a recent Computer Science graduate with a strong
    interest in web development, majoring in Distributed Systems and Networking.With experience
    working in a collaborative environment under my belt, I look forward to applying and developing
    my skills!
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
  scroll-padding-top: 200px;
  height: 100%;
}

body {
  color: white;
  height: 100%;
  margin: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  @apply bg-gradient-to-b from-slate-dark to-slate-light;
}
</style>

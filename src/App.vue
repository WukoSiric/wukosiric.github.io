<script>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'

export default {
  components: {
    NavBar,
    HeroSection
  }
}
</script>

<template>
  <NavBar />
  <div class="content">
    <HeroSection />
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

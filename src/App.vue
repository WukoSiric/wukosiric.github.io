<script>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'

export default {
  components: {
    NavBar,
    HeroSection,
    ExperienceSection,
    ProjectsSection,
    ContactSection
  }
}
</script>

<template>
  <NavBar />
  <div class="content gap-10">
    <HeroSection id="about" />
    <ExperienceSection id="experience" />
    <ProjectsSection id="projects" />
    <ContactSection id="contact" />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
  scroll-padding-top: 200px;
  height: 100%;
  min-width: 400px;
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

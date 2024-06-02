<script>
import HumanGreetingProximityIcon from 'vue-material-design-icons/HumanGreetingProximity.vue'
import GmailIcon from 'vue-material-design-icons/Gmail.vue'
import LinkedinIcon from 'vue-material-design-icons/Linkedin.vue'
import GithubIcon from 'vue-material-design-icons/Github.vue'

export default {
  components: {
    HumanGreetingProximityIcon,
    GmailIcon,
    LinkedinIcon,
    GithubIcon
  }
}
</script>

<template>
  <div class="projects bg-slate-darkest grid grid-cols-2 px-5 pb-10 sm:px-24 md:px-52 2xl:px-80">
    <h1 class="col-span-2 row-span-1 m-0 self-end p-0 py-8 text-5xl font-bold md:text-7xl">
      Contact.
    </h1>
    <div class="col-span-2 py-2 text-xl lg:col-span-1">
      I'm both open to work and collaborating on a project together! Please reach out via whatever
      is most comfortable for you
    </div>
    <div class="div flex flex-col gap-2 text-lg font-bold">
      <a
        class="flex items-center gap-3 transition-transform duration-100 ease-in-out hover:scale-105 hover:cursor-pointer"
        href="mailto:siric.lukestainer@gmail.com"
      >
        <GmailIcon /> siric.lukestainer@gmail.com
      </a>
      <a
        class="flex items-center gap-3 transition-transform duration-100 ease-in-out hover:scale-105 hover:cursor-pointer"
        href="https://www.linkedin.com/in/luke-siric-stainer/"
        target="_blank"
      >
        <LinkedinIcon fill-color="#0077B5" /> Message me on LinkedIn
      </a>
      <a
        class="flex items-center gap-3 transition-transform duration-100 ease-in-out hover:scale-105 hover:cursor-pointer"
        href="https://github.com/WukoSiric"
        target="_blank"
      >
        <GithubIcon /> View my Github
      </a>
    </div>
    <HumanGreetingProximityIcon
      :size="250"
      fill-color="#4ED957"
      class="col-span-1 col-start-2 row-span-2 row-start-2 hidden place-self-center lg:block"
    />
  </div>
</template>

<style></style>

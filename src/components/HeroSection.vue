<script>
import GithubIcon from 'vue-material-design-icons/Github.vue'
import LinkedinIcon from 'vue-material-design-icons/Linkedin.vue'

export default {
  components: {
    GithubIcon,
    LinkedinIcon
  }
}
</script>

<template>
  <div class="hero grid h-screen bg-fixed">
    <div
      class="grid h-1/2 w-full grid-cols-3 gap-2 justify-self-center p-5 py-6 sm:px-20 sm:py-24 lg:px-56 2xl:px-80"
    >
      <span
        class="col-span-3 justify-self-center font-mono text-2xl font-bold text-accent md:justify-self-start md:text-5xl"
        >hello,
      </span>
      <span
        class="col-span-3 flex items-center justify-self-center text-5xl font-bold text-offwhite md:col-span-2 md:justify-self-start md:text-7xl 2xl:col-span-1"
      >
        I'm Luke.
      </span>
      <div
        class="socials col-span-3 flex items-center gap-2 justify-self-center md:col-span-1 md:justify-self-start"
      >
        <a
          href="https://www.linkedin.com/in/luke-siric-stainer/"
          class="transition-transform duration-75 hover:scale-110 hover:cursor-pointer"
          target="_blank"
          ><LinkedinIcon fill-color="#0077B5" :size="48"
        /></a>
        <a
          href="https://github.com/WukoSiric"
          class="transition-transform duration-75 hover:scale-110 hover:cursor-pointer"
          target="_blank"
        >
          <GithubIcon :size="48"
        /></a>
      </div>
      <span class="text-md col-span-3 font-light sm:text-lg lg:col-span-2">
        Welcome to my corner of the internet! I’m a recent Computer Science graduate with a strong
        interest in web development, majoring in Distributed Systems and Networking. With experience
        working in a collaborative environment under my belt, I look forward to applying and
        developing my skills!
      </span>
      <div class="spcaer col-span-3 h-5"></div>
      <div
        class="col-span-full justify-self-center text-center md:col-span-1 md:justify-self-start md:text-start"
      >
        <span class="text-lg font-bold text-tert"> LANGUAGES </span>
        <div class="icons flex gap-1">
          <img
            class="size-10"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
          />
          <img
            class="size-10"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          />
          <img
            class="size-10"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
          />
          <img
            class="size-10"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
          />
          <img
            class="size-10"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
          />
        </div>
      </div>
      <div
        class="col-span-full justify-self-center text-center md:col-span-1 md:justify-self-start md:text-start"
      >
        <span class="text-lg font-bold text-tert"> TOOLS </span>
        <div class="icons flex gap-1">
          <img
            class="size-10"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
          />
          <img
            class="size-10"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
          />
          <img
            class="size-10"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          />
          <img
            class="size-10"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
          />
          <img
            class="size-10"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg"
          />
        </div>
      </div>
      <div class="education col-span-3 text-center md:text-start">
        <span class="text-lg font-bold text-tert"> EDUCATION </span>
        <div class="text-md text-center text-offwhite sm:text-lg md:text-start">
          <span class="font-bold"> The University of Adelaide (2021 - 2023)<br /> </span>
          <span> Bachelor of Computer Science (Distributed Systems and Networking) </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.hero {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(#0e242da6, #0e242d 90%), url(../assets/img/hero.webp);
}
</style>

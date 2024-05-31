<script>
import GithubIcon from 'vue-material-design-icons/Github.vue'
import LinkedinIcon from 'vue-material-design-icons/Linkedin.vue'
import LanPendingIcon from 'vue-material-design-icons/LanPending.vue'
import LanguageCPPIcon from 'vue-material-design-icons/LanguageCPP.vue'
import LanguageJavascriptIcon from 'vue-material-design-icons/LanguageJavascript.vue'
import LanguagePythonIcon from 'vue-material-design-icons/LanguagePython.vue'
import LanguageHTML5Icon from 'vue-material-design-icons/LanguageHTML5.vue'
import LanguageCSS3Icon from 'vue-material-design-icons/LanguageCSS3.vue'
import GitIcon from 'vue-material-design-icons/Git.vue'
import VuejsIcon from 'vue-material-design-icons/Vuejs.vue'
import UnityIcon from 'vue-material-design-icons/Unity.vue'

export default {
  components: {
    GithubIcon,
    LinkedinIcon,
    LanPendingIcon,
    LanguageCPPIcon,
    LanguageJavascriptIcon,
    LanguagePythonIcon,
    LanguageHTML5Icon,
    LanguageCSS3Icon,
    GitIcon,
    VuejsIcon,
    UnityIcon
  }
}
</script>

<template>
  <div class="hero grid w-full grid-cols-3 gap-2 p-5 sm:px-20 md:py-16 lg:px-56 lg:py-36 xl:px-80">
    <LanPendingIcon
      fillColor="#42d957"
      size="258"
      class="col-span-3 hidden justify-self-end drop-shadow-xl lg:grid"
    />
    <span class="col-span-3 font-mono text-5xl font-bold text-accent">hello, </span>
    <span
      class="col-span-3 flex items-center text-7xl font-bold text-offwhite sm:col-span-2 md:col-span-2 2xl:col-span-1"
    >
      I'm Luke.
    </span>
    <div class="socials col-span-1 flex items-center justify-self-start">
      <LinkedinIcon
        :size="48"
        class="transition-transform duration-75 hover:scale-110 hover:cursor-pointer"
      />
      <GithubIcon
        :size="48"
        class="transition-transform duration-75 hover:scale-110 hover:cursor-pointer"
      />
    </div>
    <span class="col-span-3 text-lg">
      Welcome to my corner of the internet! I’m a recent Computer Science graduate with a strong
      interest in web development, majoring in Distributed Systems and Networking. With experience
      working in a collaborative environment under my belt, I look forward to applying and
      developing my skills!
    </span>
    <div class="spcaer col-span-3 h-5"></div>
    <div class="languages col-span-3 md:col-span-1">
      <span class="text-lg font-bold text-tert"> LANGUAGES </span>
      <div class="icons flex">
        <LanguageCPPIcon :size="40" />
        <LanguageJavascriptIcon :size="40" />
        <LanguagePythonIcon :size="40" />
        <LanguageHTML5Icon :size="40" />
        <LanguageCSS3Icon :size="40" />
      </div>
    </div>
    <div class="tools col-span-3 md:col-span-1">
      <span class="text-lg font-bold text-tert"> TOOLS </span>
      <div class="icons flex">
        <GitIcon :size="40" />
        <VuejsIcon :size="40" />
        <UnityIcon :size="40" />
      </div>
    </div>
    <div class="education col-span-3">
      <span class="text-lg font-bold text-tert"> EDUCATION </span>
      <div class="text-lg text-offwhite">
        <span class="font-bold"> The University of Adelaide (2021 - 2023)<br /> </span>
        <span> Bachelor of Computer Science (Distributed Systems and Networking) </span>
      </div>
    </div>
  </div>
</template>

<style>
.hero {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(transparent, #0e242d 90%),
    url(../assets/img/pexels-photo-574087.webp);
}
</style>

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
  <div class="hero grid w-full grid-cols-3 gap-2 lg:px-56">
    <LanPendingIcon fillColor="#42d957" size="250" class="col-span-3 justify-self-end" />
    <div class="about col-span-3">
      <span class="font-mono text-2xl font-bold text-accent">hello, </span>
      <span class="flex items-center text-5xl font-bold"
        >I'm Luke. <LinkedinIcon :size="48" /> <GithubIcon :size="48" />
      </span>
      <span class="text-lg">
        Welcome to my corner of the internet! I’m a recent Computer Science graduate with a strong
        interest in web development, majoring in Distributed Systems and Networking.With experience
        working in a collaborative environment under my belt, I look forward to applying and
        developing my skills!
      </span>
    </div>
    <div class="spcaer col-span-3 h-5"></div>
    <div class="languages col-span-3 md:col-span-1">
      <span class="text-lg font-bold text-tert"> LANGUAGES </span>
      <div class="icons flex">
        <LanguageCPPIcon />
        <LanguageJavascriptIcon />
        <LanguagePythonIcon />
        <LanguageHTML5Icon />
        <LanguageCSS3Icon />
      </div>
    </div>
    <div class="tools col-span-3 md:col-span-1">
      <span class="text-lg font-bold text-tert"> TOOLS </span>
      <div class="icons flex">
        <GitIcon />
        <VuejsIcon />
        <UnityIcon />
      </div>
    </div>
    <div class="education col-span-3">
      <span class="text-lg font-bold text-tert"> EDUCATION </span>
      <div class="text-lg text-offwhite">
        <span class="font-bold"> The University of Adelaide (2021 - 2023) <br /> </span>
        <span> Bachelor of Computer Science (Distributed Systems and Networking) </span>
      </div>
    </div>
  </div>
</template>

<style>
.hero {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(../assets/img/pexels-photo-574087.jpeg);
}
</style>

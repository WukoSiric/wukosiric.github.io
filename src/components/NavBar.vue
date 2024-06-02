<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import MenuCloseIcon from 'vue-material-design-icons/MenuClose.vue'
import TabPlusIcon from 'vue-material-design-icons/TabPlus.vue'

export default {
  components: {
    MenuIcon,
    MenuCloseIcon,
    TabPlusIcon
  },
  data() {
    return {
      expanded: false
    }
  },
  methods: {
    openMenu() {
      this.expanded = true
    },
    closeMenu() {
      this.expanded = false
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
        this.closeMenu()
      }
    }
  }
}
</script>

<template>
  <div
    class="sticky top-0 z-50 box-border flex flex-col items-center justify-between gap-4 bg-slate-dark px-5 py-3 text-offwhite sm:px-16 md:flex-row lg:px-44"
  >
    <div class="nav-header flex w-full flex-row justify-between">
      <div class="logo select-none text-2xl font-extrabold text-accent">LUKE STAINER</div>
      <MenuIcon class="hover:cursor-pointer md:hidden" v-if="!expanded" @click="openMenu" />
      <MenuCloseIcon class="hover:cursor-pointer md:hidden" v-else @click="closeMenu" />
    </div>
    <ul
      :class="expanded ? 'flex' : 'hidden'"
      class="flex-col items-center gap-1 text-lg font-bold md:flex md:flex-row md:justify-between md:space-x-4"
    >
      <li
        class="select-none hover:cursor-pointer hover:text-white"
        @click="scrollToSection('about')"
      >
        About
      </li>
      <li
        class="select-none hover:cursor-pointer hover:text-white"
        @click="scrollToSection('experience')"
      >
        Experience
      </li>
      <li
        class="select-none hover:cursor-pointer hover:text-white"
        @click="scrollToSection('projects')"
      >
        Projects
      </li>
      <li
        class="select-none hover:cursor-pointer hover:text-white"
        @click="scrollToSection('contact')"
      >
        Contact
      </li>
      <li
        class="border-r-10 select-none rounded-lg bg-accent p-1 px-2 text-slate-dark hover:cursor-pointer hover:bg-tert"
      >
        <a class="flex gap-2" href="/src/assets/resources/resume.pdf" target="_blank">
          <TabPlusIcon />
          Resume
        </a>
      </li>
    </ul>
  </div>
</template>

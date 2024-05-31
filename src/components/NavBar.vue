<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import MenuCloseIcon from 'vue-material-design-icons/MenuClose.vue'

export default {
  components: {
    MenuIcon,
    MenuCloseIcon
  },
  data() {
    return {
      expanded: false
    }
  },
  methods: {
    openMenu() {
      this.expanded = true
      console.log('opening menu')
    },
    closeMenu() {
      this.expanded = false
      console.log('closing menu')
    }
  }
}
</script>

<template>
  <div
    class="sticky top-0 box-border flex w-screen flex-col items-center justify-between bg-slate-dark py-3 text-offwhite sm:px-16 md:flex-row lg:px-44"
  >
    <div class="nav-header flex w-full flex-row justify-between">
      <div class="logo select-none text-2xl font-extrabold text-accent">LUKE STAINER</div>
      <MenuIcon class="hover:cursor-pointer md:hidden" v-if="!expanded" @click="openMenu" />
      <MenuCloseIcon class="hover:cursor-pointer md:hidden" v-else @click="closeMenu" />
    </div>
    <ul
      :class="expanded ? 'flex' : 'hidden'"
      class="items flex-col items-center text-lg font-bold md:flex md:flex-row md:justify-between md:space-x-4"
    >
      <li class="select-none hover:cursor-pointer hover:text-white">About</li>
      <li class="select-none hover:cursor-pointer hover:text-white">Experience</li>
      <li class="select-none hover:cursor-pointer hover:text-white">Projects</li>
      <li class="select-none hover:cursor-pointer hover:text-white">Contact</li>
      <li
        class="border-r-10 select-none rounded-lg bg-accent p-1 text-slate-dark hover:cursor-pointer hover:bg-tert"
      >
        Resume
      </li>
    </ul>
  </div>
</template>

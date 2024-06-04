<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    }
  }
}
</script>
<template>
  <a
    :href="href"
    target="_blank"
    class="center m-4 box-border flex w-fit select-none items-center justify-center gap-2 rounded-lg bg-offwhite p-2 px-8 shadow-lg transition-all duration-75 ease-in-out hover:scale-105 hover:cursor-pointer hover:bg-slate-300"
  >
    <img
      class="size-10"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
    />
    <a class="text-nowrap font-mono text-xl font-bold text-black hover:underline"
      >View Repository
    </a>
  </a>
</template>

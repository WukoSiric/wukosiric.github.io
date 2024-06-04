<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
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
    class="center m-2 box-border flex w-fit select-none items-center justify-center gap-2 rounded-lg bg-offwhite p-2 px-8 shadow-lg transition-all duration-75 ease-in-out hover:scale-105 hover:cursor-pointer hover:bg-slate-300 sm:m-4"
  >
    <img class="size-8 sm:size-10" :src="img" />
    <a
      v-if="$slots.default"
      class="text-nowrap font-mono text-lg font-bold text-black hover:underline sm:text-xl"
      ><slot></slot
    ></a>
  </a>
</template>

<script>
import MainTitle from './text/MainTitle.vue'
import EyebrowTitle from './text/EyebrowTitle.vue'
import ExternalButton from './buttons/ExternalButton.vue'

export default {
  components: {
    MainTitle,
    EyebrowTitle,
    ExternalButton
  }
}
</script>

<template>
  <div class="experience grid w-full grid-cols-3 px-5 py-20 pb-40 sm:px-24 md:px-52 2xl:px-80">
    <div class="gameplay absolute left-1/3 h-full w-1/2"></div>
    <h1 class="col-span-3 py-8 text-5xl font-bold md:text-7xl">Experience.</h1>
    <MainTitle class="col-span-full">PROGRAMMER.</MainTitle>
    <EyebrowTitle class="col-span-full"> Mini Mammoth Games (‘23 Jan - '23 March) </EyebrowTitle>
    <span class="col-span-3 text-lg md:text-2xl"
      >Collaborated with a designer and programmer to produce two hyper-casual mobile games released
      on the Google Play Store - each garnering 100+ downloads.</span
    >
    <ul class="col-span-3 list-disc pl-6 text-lg font-light md:col-span-2 xl:text-xl">
      <li>Responsible for programming inputs, level generation, and level transitions</li>
      <li>
        Utilised scriptable objects and abstract classes to smoothly implement powerup and economy
        systems
      </li>
      <li>Resolved merge conflicts using Fork and Git</li>
    </ul>
    <img
      src="../assets/img/minimammothgames.png"
      class="col-span-3 hidden h-auto w-72 sm:col-span-1 md:block"
    />
    <div class="games col-span-3 grid gap-3 rounded-3xl bg-slate-dark p-10 lg:grid-cols-4">
      <img
        src="../assets/img/golfmayhem.png"
        class="col-span-3 row-span-2 aspect-square h-auto w-36 justify-self-center md:col-span-1"
      />
      <h3
        class="col-span-3 flex items-center gap-4 justify-self-start text-4xl font-medium text-offwhite"
      >
        <span>Mini Golf Mayhem</span>
        <ExternalButton
          img="https://www.svgrepo.com/show/223032/playstore.svg"
          href="https://play.google.com/store/apps/details?id=com.minimammothgames.minigolfmayhem&hl=en_US"
        >
        </ExternalButton>
      </h3>
      <div class="col-span-3 text-lg">
        Mayhem meets mini golf in this simple but ridiculously chaotic game, featuring short
        courses, randomly generated through a variety of fun and wacky obstacles. Complete these
        courses to increase your multiplier and earn points, which can be used to purchase a variety
        of palettes and trails!
      </div>
      <img
        src="../assets/img/everhungry.png"
        class="col-span-3 row-span-2 flex aspect-square h-auto w-36 justify-self-center md:col-span-1"
      />
      <h3
        class="col-span-3 flex items-center gap-4 justify-self-start text-4xl font-medium text-offwhite"
      >
        <span> Ever Hungry </span>
        <ExternalButton
          img="https://www.svgrepo.com/show/223032/playstore.svg"
          href="https://play.google.com/store/apps/details?id=com.minimammothgames.everhungry&hl=en_AU&gl=US"
        >
        </ExternalButton>
      </h3>
      <div class="col-span-3 text-lg">
        Trapped within this bleak forest, only accompanied by your fragile light, fend of the
        encroaching darkness and stand in defiance of this nightmarish entity that surrounds you.
        Ever Hungry blends hypercasual and survival horror together to create a uniquely terrifying
        experience that can be enjoyed on the go!
      </div>
    </div>
  </div>
</template>

<style>
.gameplay {
  opacity: 600%;
  background-size: cover;
  background-image: linear-gradient(#0e242d, transparent), url(../assets/img/golfgame.gif);
  z-index: -1;
}

.experience {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(#0e242d, transparent);
  background-position: top;
}
</style>

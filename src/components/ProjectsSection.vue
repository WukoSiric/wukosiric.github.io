<script>
import ArrowRightDropCircleOutlineIcon from 'vue-material-design-icons/ArrowRightDropCircleOutline.vue'
import ArrowDownDropCircleOutlineIcon from 'vue-material-design-icons/ArrowDownDropCircleOutline.vue'

export default {
  components: {
    ArrowRightDropCircleOutlineIcon,
    ArrowDownDropCircleOutlineIcon
  },
  data() {
    return {
      showMazeGame: false
    }
  },
  methods: {
    toggleMazeGame() {
      this.showMazeGame = !this.showMazeGame
    }
  }
}
</script>

<template>
  <div class="projects grid grid-cols-2 bg-gray-950 px-5 pb-10 sm:px-24 md:px-52 2xl:px-80">
    <h1 class="col-span-2 py-8 text-5xl font-bold md:text-7xl">Projects.</h1>
    <!-- Chat Application -->
    <h3 class="text-md col-span-2 font-mono font-bold text-accent xl:text-3xl">
      Personal Project (Ongoing)
    </h3>
    <h2 class="col-span-2 font-mono text-3xl font-bold xl:text-5xl">CHAT APPLICATION.</h2>
    <span class="col-span-2 text-lg font-medium md:text-2xl"
      >Currently working on a full-stack chat application with MEVN in order to improve my CSS,
      along with learning Node.Js and MongoDB.</span
    >
    <ul class="col-span-2 list-disc pl-5 text-lg font-light lg:col-span-1">
      <li>Prototyped desktop and mobile views using Figma</li>
      <li>
        Established basic, global messaging with randomly picked usernames with SocketIO and NodeJS
      </li>
      <li>Connected server to Atlas DB server using .env files</li>
    </ul>
    <img class="col-span-2 w-full p-3 lg:col-span-1" src="../assets/img/chatapp.png" />
    <!-- Maze Visualizer -->
    <h3 class="text-md col-span-2 font-mono font-bold text-accent xl:text-3xl">
      Personal Project (March)
    </h3>
    <h2 class="col-span-2 font-mono text-3xl font-bold xl:text-5xl">MAZE VISUALIZER.</h2>

    <span class="col-span-2 text-lg font-medium md:text-2xl"
      >Used Vue.Js to implement maze generating and solving graphics, deployed on GitHub Pages</span
    >
    <ul class="col-span-2 list-disc pl-5 text-lg font-light lg:col-span-1">
      <li>
        Completed maze generation with recursive backtracking, along with DFS and BFS for maze
        solving
      </li>
      <li>Established communication between components using custom events</li>
      <li>
        Leveraged media queries to ensure the maze and navigation bar are responsive and viewable on
        all devices
      </li>
      <li>Organised project using GitHub tasks, issues, and a kanban</li>
    </ul>
    <img class="col-span-2 m-2 p-3 lg:col-span-1" src="../assets/img/mazesolver.png" />
    <div
      @click="toggleMazeGame"
      class="col-span-2 grid w-3/4 select-none gap-4 justify-self-center rounded-3xl border-accent bg-offwhite p-1 text-3xl font-bold text-gray-900 hover:cursor-pointer"
    >
      <div class="flex items-center gap-4">
        <ArrowRightDropCircleOutlineIcon v-if="!showMazeGame" :size="40" />
        <ArrowDownDropCircleOutlineIcon v-else :size="36" />
        Preview
      </div>

      <embed
        v-if="showMazeGame"
        class="col-span-2"
        src="https://wukosiric.github.io/vue-maze-visualizer/"
        style="width: 100%; height: 60vh"
      />
    </div>
  </div>
</template>

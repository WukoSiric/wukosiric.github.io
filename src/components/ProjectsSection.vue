<script>
import MainTitle from './text/MainTitle.vue'
import EyebrowTitle from './text/EyebrowTitle.vue'
import ExternalButton from './buttons/ExternalButton.vue'

export default {
  components: {
    MainTitle,
    EyebrowTitle,
    ExternalButton
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<template>
  <div
    class="projects grid grid-cols-2 bg-gradient-to-b from-slate-900 via-slate-900 to-gray-800 bg-fixed px-5 pb-10 sm:px-24 md:px-52 2xl:px-80"
  >
    <h1 class="col-span-2 py-8 text-5xl font-bold md:text-7xl">Projects.</h1>
    <!-- Chat Application -->
    <EyebrowTitle class="col-span-full"> Personal Project (Ongoing) </EyebrowTitle>
    <MainTitle class="col-span-full"> Chat application. </MainTitle>
    <span class="col-span-2 text-lg md:text-2xl"
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
    <img class="col-span-2 p-3 lg:col-span-1" src="../assets/img/chatapp.png" />
    <div class="col-span-full flex flex-wrap">
      <ExternalButton
        class="justify-self-center"
        href="https://github.com/WukoSiric/chat-app"
        img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
      >
        View Repository
      </ExternalButton>
      <ExternalButton
        class="justify-self-center"
        href="https://www.figma.com/design/0tZ3uic0obAbmPeEBdawzY/ChatSphere?node-id=0-1&t=gDjWgJSmT9jzRWjO-1"
        img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
        >View Design File</ExternalButton
      >
    </div>

    <!-- Maze Visualizer -->
    <EyebrowTitle class="col-span-full"> Personal Project (March) </EyebrowTitle>
    <MainTitle class="col-span-full">MAZE VISUALIZER.</MainTitle>

    <span class="col-span-2 text-lg md:text-2xl"
      >Used Vue.Js to implement maze generating and solving graphics, deployed on GitHub Pages.
    </span>
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
    <div class="col-span-full flex flex-wrap">
      <ExternalButton
        class="justify-self-center"
        href="https://github.com/WukoSiric/vue-maze-visualizer"
        img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
      >
        View Repository
      </ExternalButton>
      <ExternalButton
        class="justify-self-center"
        href="https://wukosiric.github.io/vue-maze-visualizer/"
        img="https://www.svgrepo.com/show/521261/web.svg"
      >
        Visit
      </ExternalButton>
      <ExternalButton
        class="justify-self-center"
        href="https://www.figma.com/design/xugeEnTLgb1za87gjdWdRz/Maze-Solver?node-id=0-1&t=Mb6Rs06pP6NrTIlU-1"
        img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
        >View Design File</ExternalButton
      >
    </div>
  </div>
</template>

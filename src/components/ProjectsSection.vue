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
    class="projects gap-2 bg-gradient-to-b from-slate-900 via-slate-900 to-gray-800 bg-fixed px-5 py-10 sm:px-24 md:px-52 xl:columns-2 2xl:px-80"
  >
    <h1 class="col-span-full py-8 text-5xl font-bold md:text-7xl">Projects.</h1>
    <!-- Chat Application -->
    <div
      class="col-span-full m-1 mb-4 grid break-inside-avoid-column grid-cols-2 content-start rounded-2xl bg-gradient-to-b from-slate-light to-slate-dark p-4 shadow-xl xl:col-span-1"
    >
      <EyebrowTitle class="col-span-full drop-shadow-md"> Personal Project (Ongoing) </EyebrowTitle>
      <MainTitle class="col-span-full"> Chat application. </MainTitle>
      <span class="col-span-2 text-lg md:text-xl"
        >Currently working on a full-stack chat application with MEVN in order to improve my CSS,
        along with learning Node.Js and MongoDB.</span
      >
      <ul class="col-span-2 list-disc pl-5 text-lg font-light lg:col-span-1">
        <li>Prototyped desktop and mobile views using Figma</li>
        <li>
          Established basic, global messaging with randomly picked usernames with SocketIO and
          NodeJS
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
    </div>

    <!-- Maze Visualizer -->
    <div
      class="col-span-full m-1 mb-4 grid break-inside-avoid-column grid-cols-2 content-start rounded-2xl bg-gradient-to-b from-slate-light to-slate-dark p-4 shadow-xl xl:col-span-1"
    >
      <EyebrowTitle class="col-span-full drop-shadow-md"> Personal Project (March) </EyebrowTitle>
      <MainTitle class="col-span-full">MAZE VISUALIZER.</MainTitle>

      <span class="col-span-2 text-lg md:text-xl"
        >Used Vue.Js to implement maze generating and solving graphics, deployed on GitHub Pages.
      </span>
      <ul class="col-span-2 list-disc pl-5 text-lg font-light lg:col-span-1">
        <li>
          Completed maze generation with recursive backtracking, along with DFS and BFS for maze
          solving
        </li>
        <li>Established communication between components using custom events</li>
        <li>
          Leveraged media queries to ensure the maze and navigation bar are responsive and viewable
          on all devices
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
    <!-- Weather Simulator -->
    <div
      class="col-span-full m-1 mb-4 grid break-inside-avoid-column grid-cols-2 content-start rounded-2xl bg-gradient-to-b from-slate-light to-slate-dark p-4 shadow-xl xl:col-span-1"
    >
      <EyebrowTitle class="col-span-full drop-shadow-md">
        Distributed Systems ('23 Nov)
      </EyebrowTitle>
      <MainTitle class="col-span-full">Weather Aggregation System.</MainTitle>
      <span class="col-span-2 text-lg md:text-xl"
        >Designed and implemented a weather aggregation system following a RESTful API in Java, with
        data expunging.
      </span>
      <ul class="col-span-2 list-disc pl-5 text-lg font-light">
        <li>
          Aggregates weather JSON data from multiple content servers into a main aggregation server,
          accessible by sending GET requests via browser or through an included GETClient
        </li>
        <li>
          Leveraged sockets to allow for multiple GET and PUT requests to be processed
          asynchronously
        </li>
        <li>
          Wrote Bash scripts to serve as integration testing in face of a constrained development
          environment
        </li>
      </ul>
      <div class="col-span-full flex">
        <ExternalButton
          class="justify-self-center"
          href="https://github.com/WukoSiric/weather-aggregation-system"
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
        >
          View Repository
        </ExternalButton>
      </div>
    </div>
    <!-- Event Calendar -->
    <div
      class="col-span-full m-1 mb-4 grid break-inside-avoid-column grid-cols-2 content-start rounded-2xl bg-gradient-to-b from-slate-light to-slate-dark p-4 shadow-xl xl:col-span-1"
    >
      <EyebrowTitle class="col-span-full drop-shadow-md"> Web Development ('22 July) </EyebrowTitle>
      <MainTitle class="col-span-full">Event Calendar. </MainTitle>
      <span class="col-span-2 text-lg md:text-xl"
        >Worked in a small team to create an event scheduling web application that allows users to
        plan events
      </span>
      <ul class="col-span-2 list-disc pl-5 text-lg font-light">
        <li>
          Created user and administrator dashboards, fetching backend data with appropriate MySQL
          queries
        </li>
        <li>
          Implemented user authentication system using AJAX, MySQL and Express.Js sessions
          middleware
        </li>
      </ul>
      <div class="col-span-full flex">
        <ExternalButton
          class="justify-self-center"
          href="https://github.com/wdcmasters/event-calendar"
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
        >
          View Repository
        </ExternalButton>
      </div>
    </div>
    <!-- Routing Simulation -->
    <div
      class="col-span-full m-1 mb-4 grid break-inside-avoid-column grid-cols-2 content-start rounded-2xl bg-gradient-to-b from-slate-light to-slate-dark p-4 shadow-xl xl:col-span-1"
    >
      <EyebrowTitle class="col-span-full drop-shadow-md"> Networks ('23 May) </EyebrowTitle>
      <MainTitle class="col-span-full">Routing Simulation. </MainTitle>
      <span class="col-span-2 text-lg md:text-xl"
        >Simulation showcasing the Distance-Vector routing algorithm.
      </span>
      <ul class="col-span-2 list-disc pl-5 text-lg font-light">
        <li>Implementation of the Bellman-Ford algorithm in Python for a network topology</li>
        <li>
          Traversed an undirected weighted graph to determine most efficient paths between routers
        </li>
        <li>
          Nodes independently process information from their neighbours, mirroring routing tables
        </li>
      </ul>
      <div class="col-span-full flex">
        <ExternalButton
          class="justify-self-center"
          href="https://github.com/WukoSiric/Distance-Vector-Networking"
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
        >
          View Repository
        </ExternalButton>
      </div>
    </div>
  </div>
</template>

<style>
.eventcal {
  background-image: linear-gradient(rgba(22, 32, 66, 0.548), transparent),
    linear-gradient(rgba(0, 0, 0, 0.274), rgb(0, 0, 0)), url(../assets/img/eventcal.png);
}
</style>

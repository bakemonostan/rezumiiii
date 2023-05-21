<template>
  <div class="relative flex min-h-screen space-y-1">
    <!-- sidebar -->

    <div
      class="w-64 left-0 top-0 bg-teal-900 duration-200 ease-in-out space-y-4"
      :class="isExpanded ? 'w-64' : 'w-20'"
    >
      <div v-if="!isExpanded">
        <div class="flex item-center">
          <button @click="isExpanded = !isExpanded">
            <i class="fa fa-indent text-white pl-2 mr-3"></i>
          </button>
          <img src="~/assets/logo-light.png" class="w-20 h-20 mr-3" alt="" />
        </div>
        <div class="bg-white shadow w-20 h-1 mr-4"></div>
      </div>
      <div v-else>
        <div class="flex item-center">
          <button @click="isExpanded = !isExpanded">
            <i class="fa fa-outdent text-white pl-4 mr-3"></i>
          </button>
          <img src="~/assets/logo-light.png" class="w-25 h-20" alt="" />
        </div>
        <div class="bg-white shadow w-64 h-0.5 mr-4"></div>
      </div>

      <nav class="mt-10 px-4 transition duration-200">
        <a
          href="/dashboard"
          class="flex items-center space-x-2 px-4 py-3 font-normal text-teal-100 hover:bg-teal-100 hover:text-teal-500 rounded"
        >
          <i class="fa fa-home" aria-hidden="true"></i>
          <span
            :class="isExpanded ? 'opacity-100' : 'opacity-0'"
            class="ml-3 rounded"
            >Dashboard
          </span>
        </a>

        <a
          href="/jobs"
          class="flex items-center space-x-2 px-4 py-3 font-normal text-teal-100 hover:bg-teal-100 hover:text-teal-500 rounded"
        >
          <i class="fa fa-folder" aria-hidden="true"></i>
          <span
            :class="isExpanded ? 'opacity-100' : 'opacity-0'"
            class="ml-3 text-center rounded"
            >Job
          </span>
        </a>
        <a
          href="#"
          class="flex items-center space-x-2 px-4 py-3 font-normal text-teal-100 hover:bg-teal-100 hover:text-teal-500 rounded"
        >
          <i class="fa fa-bar-chart" aria-hidden="true"></i>
          <span
            :class="isExpanded ? 'opacity-100' : 'opacity-0'"
            class="ml-3 text-center rounded"
            >Report
          </span>
        </a>
        <a
          href="#"
          class="flex items-center space-x-2 px-4 py-3 font-normal text-teal-100 hover:bg-teal-100 hover:text-teal-500 rounded"
        >
          <i class="fa fa-id-badge" aria-hidden="true"></i>
          <span
            :class="isExpanded ? 'opacity-100' : 'opacity-0'"
            class="ml-3 text-center rounded"
            >Refferal
          </span>
        </a>
      </nav>
    </div>
  </div>
</template>

<script setup>
const isExpanded = ref(true);
</script>

<template>
  <div
    class="flex flex-row px-4 py-6 justify-between lg:justify-start items-center fixed z-50 mb-56 w-full bg-white"
  >
    <div class="shrink w-4/12 lg:px-10">
     <NuxtLink to="/"> <img src="~/assets/logo.png" alt="logo" /></NuxtLink>
    </div>
    <div v-if="menu.hasMenu" class="flex flex-row justify-center"> 
      <div class="lg:flex flex-row justify-between hidden w-full">
        <div class="hidden lg:flex ml-44 mr-64">
          <ul class="flex flex-row self-center">
            <li class="mx-4 text-xl"><a href="#home">Home</a></li>
            <li class="mx-4 text-xl"><a href="#features">Features</a></li>
            <li class="mx-4 text-xl"><a href="#about">About</a></li>
            <li class="mx-4 text-xl">Blog</li>
          </ul>
        </div>
        <div class="flex flex-row justify-self-end  ml-">
          <button class="py-3 px-6 border rounded-md text-center mr-6">
            <NuxtLink to="/login">Log in</NuxtLink>
          </button>
          <button
            class="py-3 px-6 bg-bgreen text-white border rounded-md text-center"
          >
          <NuxtLink to="/signup">Get Started</NuxtLink>
          </button>
        </div>
      </div>
      <div class="lg:hidden flex flex-shrink-0" @click="isOpen = !isOpen">
        <Icon v-if="!isOpen" name="ic:round-menu" class="text-3xl" /><Icon
          v-if="isOpen"
          name="ic:round-menu-open"
          class="text-3xl"
        />
      </div>
      <div v-if="isOpen" class="relative bg-white py-6">
        <div v-if="isOpen" class="absolute top-10 right-0 bg-slate-100">
          <ul class="flex flex-col self-center px-16 uppercase font-semibold">
            <li class="my-10 text-xl"><a href="#home">Home</a></li>
            <li class="my-10 text-xl"><a href="#features">Features</a></li>
            <li class="my-10 text-xl"><a href="#about">About</a></li>
            <li class="my-10 text-xl">Blog</li>
          </ul>
          <div class="flex flex-col mx-2 py-6">
            <button
              class="py-3 px-2 border text-sm rounded-md text-center mb-3"
            >
              <NuxtLink to="/login">Log in</NuxtLink>
            </button>
            <button
              class="py-3 px-2 bg-bgreen text-sm text-white border rounded-md text-center"
            >
            <NuxtLink to="/signup">Get Started</NuxtLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const isOpen = ref(false);
const menu = defineProps({
  hasMenu: Boolean,
});
console.log(menu.hasMenu);
const hasMenu = ref(false);
</script>

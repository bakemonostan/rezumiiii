<template>
  <div class="py-12 mt-10">
    <h3 class="text-3xl mx-2 font-bold">Profile</h3>
    <div class="flex flex-row">
      <div class="flex flex-col bg-white my-3 py-4 w-8/12">
        <div class="py-2 px-4">
          <div class="flex flex-row justify-between">
            <div class="flex flex-row">
              <div class="">
                <Icon name="heroicons:user-solid" class="h-24 w-24" />
              </div>
              <div class="flex flex-col self-center">
                <h3 class="font-semibold text-2xl">John Doe</h3>
                <p class="text-gray-400 text-sm">
                  Lagos Nigeria | UI/UX Design
                </p>
              </div>
            </div>

            <div>
              <button class="rounded-xl border border-teal-400 py-2 px-4">
                Edit
              </button>
            </div>
          </div>
        </div>
        <div class="h-px w-11/12 mx-auto bg-gray-400"></div>
        <div class="px-12 py-4">
          <h3 class="text-2xl font-semibold">About</h3>
          <p class="text-gray-400 py-3 text-sm text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            iusto nobis quaerat, eveniet, sit repellendus at atque explicabo
            cupiditate quidem molestiae? Fugit autem nulla illo pariatur in,
            sint dignissimos porro.
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col bg-white my-3 py-4 w-full">
      <div class="py-2 px-4">
        <div class="flex flex-row justify-between px-12">
          <div class="flex flex-row">
            <div class="flex flex-col self-center">
              <h3 class="font-semibold text-2xl">Contact Information</h3>
            </div>
          </div>

          <div>
            <button class="rounded-xl border border-teal-400 py-2 px-4">
              Edit
            </button>
          </div>
        </div>
      </div>
      <div class="h-px w-11/12 mx-auto bg-gray-400"></div>
      <div class="flex flex-row px-12 py-4">
        <div class="w-1/3"> 
          <h3 class="font-semibold text-lg my-3">Email</h3>
          <p class="text-gray-400 text-sm">Johndoe@gmail.com</p>
        </div>
        <div class="w-1/3">
          <h3 class="font-semibold text-lg my-3">Phone Number</h3>
          <p class="text-gray-400 text-sm">081244453678</p>
        </div>
        <div class="w-1/3">
          <h3 class="font-semibold text-lg my-3">Links</h3>
          <div class="inline-flex list-none text-blue-400 underline text-sm space-x-2">
            <li><a href="">Linkedin</a></li>
            <li><a href="">Twitter</a></li>
            <li><a href="">Facebook</a></li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "dashapplicant",
});
</script>

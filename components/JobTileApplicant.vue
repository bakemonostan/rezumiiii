<template>
    <div class="flex flex-col justify-between px-2 h-64 bg-white shadow-md">
      <div>
        <div class="flex flex-row justify-between py-2">
          <div v-if="isNew">
            <span class="text-white bg-red-600 py-1 px-2 text-xs uppercase"
              >new</span
            >
          </div>
          <div>
            <span v-if="isOnsite" class="bg-[#EDE3FE] text-xs my-auto self-start"
              >onsite</span
            ><span
              v-else-if="isRemote"
              class="bg-[#D0F0FD] text-xs my-auto self-start"
              >remote</span
            ><span
              v-else-if="isHybrid"
              class="bg-[#e3fef5] text-xs my-auto self-start"
              >hybrid</span
            >
          </div>
        </div>
        <div>
          <div class="flex flex-col">
            <div class="flex flex-row">
              <a :href="`/job-applicant/${id}`"
                ><h3 class="text-xl mr-2 font-semibold">{{ title }}</h3></a
              >
            </div>
            <div class="text-gray-400 uppercase text-xs mt-1">
              {{ category }} | {{ duration }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between px-4 py-4 border-t border-gray-200">
        <button
          class="py-2 px-8 text-center text-teal-600 border-teal-600 border font-semibold rounded-sm"
          @click="$emit('shareOpen', id)"
        >
          Share
        </button>
        <a :href="`/job-applicant/${id}`">
          <button
            class="py-2 px-8 text-center text-white bg-teal-600 font-semibold rounded-sm"
          >
            Apply
          </button>
        </a>
      </div>
    </div>
  </template>
  
  <script setup>

  defineProps({
    id: String,
    title: String,
    isOnsite: Boolean,
    isRemote: Boolean,
    isHybrid: Boolean,
    isNew: Boolean,
    category: String,
    duration: String,
  });
  </script>
  
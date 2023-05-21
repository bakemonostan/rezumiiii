<template>
  <div
    class="flex flex-row justify-between bg-white mb-1 py-4 px-6 rounded-lg shadow-lg"
  >
    <div class="flex flex-col">
      <div class="flex flex-row">
        <h3 class="text-xl mr-2 font-semibold">{{ title }}</h3>
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
      <div class="text-gray-400 uppercase text-xs mt-1">
        {{ category }} | {{ duration }}
      </div>
    </div>
    <div class="flex space-x-2 flex-row my-auto">
      <div v-if="isNew">
        <span
          class="text-white bg-red-600 py-1 px-2 text-[0.5rem] uppercase font-semibold rounded-[3px]"
          >new</span
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

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

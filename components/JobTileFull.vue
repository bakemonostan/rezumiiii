<template>
  <div
    class="flex flex-row justify-between bg-white mb-1 py-4 px-6 rounded-lg shadow-lg"
  >
    <div class="flex flex-col">
      <div class="flex flex-row">
        <a :href="`/jobs/${id}`"
          ><h3 class="text-xl mr-2 font-semibold">{{ title }}</h3></a
        >
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
        {{ category }} {{ duration }}
      </div>
    </div>
    <div class="flex space-x-2 flex-row my-auto">
      <div v-if="isNew">
        <span
          class="text-white bg-red-600 py-1 px-2 text-[0.5rem] uppercase font-semibold rounded-[3px]"
          >new</span
        >
      </div>
      <Menu>
        <MenuButton
          ><Icon name="heroicons:ellipsis-vertical-solid"
        /></MenuButton>
        <MenuItems
          class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <a
                :href="`/jobs/${id}`"
                ref="jobID"
                :class="[
                  active ? 'bg-teal-700 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                <Icon
                  name="line-md:search"
                  class="mr-2 h-5 w-5 text-teal-400 hover:text-white"
                  aria-hidden="true"
                />
                View
              </a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                :name="`${id}`"
                :class="[
                  active ? 'bg-teal-700 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm cursor-pointer',
                ]"
                @click="$emit('editOpen', id)"
              >
                <Icon
                  name="line-md:edit"
                  class="mr-2 h-5 w-5 text-teal-400 hover:text-white"
                  aria-hidden="true"
                />
                Edit
              </a>
            </MenuItem>
          </div>
          <!-- 
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                <Icon
                  name="line-md:search"
                  class="mr-2 h-5 w-5 text-teal-400 hover:text-white"
                  aria-hidden="true"
                />
                Delete
              </button>
            </MenuItem>
          </div> -->
        </MenuItems>
      </Menu>
    </div>
  </div>
</template>
<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { useModal } from "~~/stores/modal";
import { useEditModal } from "~~/stores/modal";

import { editData } from "~~/stores/editData";
const jobID = ref(null);
onMounted(() => {
  // console.log({ jobpath: jobID });
});

const showEdit = (jobId) => {
  console.log({ jobId });
  editData.value.id = jobId;
  useModal.value = true;
};
defineExpose({
  jobID,
});
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

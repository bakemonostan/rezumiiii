<template>
  <div class="py-12">
    <div
      v-if="useToast"
      class="flex border-solid border-2 border-green-500 text-green-700 rounded relative mb-4 bg-green-200 w-96 h-14 fade z-50"
    >
      <span class="p-2 mt-2">
      </span>
      <span class="mt-4"> Job succesfully Created </span>
      <button
        class="absolute bg-transparent text-4xl leading-none right-0 top-0 mt-2 mr-6 outline-none focus:outline-none"
        v-on:click=""
      >
        <span>×</span>
      </button>
    </div>
    <div
      v-if="useToastEdit"
      class="flex border-solid border-2 border-green-500 text-green-700 rounded relative mb-4 bg-green-200 w-96 h-14 fade z-50"
    >
      <span class="p-2 mt-2">
      </span>
      <span class="mt-4"> Job succesfully Edited </span>
      <button
        class="absolute bg-transparent text-4xl leading-none right-0 top-0 mt-2 mr-6 outline-none focus:outline-none"
        v-on:click=""
      >
        <span>×</span>
      </button>
    </div>
    <div class="flex flex-row justify-between">
      <h3 class="font-bold text-3xl py-8">Jobs</h3>
      <button
        class="bg-bgreen text-white font-semibold self-center px-6 py-2"
        @click="openModal"
      >
        Create Job
      </button>
    </div>

    <ClientOnly>
      <TransitionRoot appear :show="useCreateModal" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div class="fixed inset-0 overflow-y-auto">
            <div class="flex min-h-full items-center justify-end mt-24 p-4">
              <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
              >
                <DialogPanel
                  class="w-5/6 mr-16 mt-36 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                >
                  <div><CreateJob /></div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    </ClientOnly>

    <div><JobPanel /></div>
  </div>
</template>
<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";
import { useCreateModal } from "~~/stores/modal";

import { useToast,useToastEdit } from "~~/stores/toast";

definePageMeta({
  layout: "dash",
});
const popup = ref(true);

const isOpen = ref(false);
function closeModal() {
  useCreateModal.value = false;
}
function openModal() {
  useCreateModal.value = true;
}
</script>

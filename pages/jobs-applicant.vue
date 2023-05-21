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

      </div>
      <div><JobPanelApplicant /></div>
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
    layout: "dashapplicant",
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
  
<template>
  <div
    :class="['h-full fixed top-0 left-0 z-50  overflow-x-hidden hidden md:block bg-teal-800']"
  >
    <div class="flex flex-row text-xl py-6 font-bold w-full bg-teal-800 border-b border-gray-100">
      <Icon
        name="line-md:menu-fold-left"
        class="text-2xl mx-4 text-white self-center"
        v-if="!expanded"
        @click="expanded = !expanded"
      />
      <Icon
        name="line-md:menu-fold-right"
        class="text-2xl mx-4 text-white self-center"
        v-if="expanded"
        @click="expanded = !expanded"
      />
      <div class="self-center">
        <img
          v-if="!expanded"
          src="~/assets/logo-light.png"
          class="h-10"
          alt=""
        />
        <img v-else src="~/assets/logo-sm.png" class="h-8" alt="" />
      </div>
    </div>
    <div class="mx-auto my-4 flex flex-col justify-center pl-3 pr-6 mt-24 space-y-3">
      <ul class="flex flex-col space-y-3 justify-self-center">
        <li
          :class="[
            ispage.isdash ? curpage : 'text-teal-100',
            'hover:text-teal-700 hover:bg-teal-100 px-6 py-3 rounded-lg flex flex-row items-center text-center hover',
          ]"
        >
          <Icon name="line-md:home" class="mr-4" /><span>
            <NuxtLink to="/dashboard-applicant" :class="{ hidden: expanded }">
              Dashboard
            </NuxtLink></span
          >
        </li>
        <li
          :class="[
            ispage.isjob ? curpage : 'text-teal-100',
            'hover:text-teal-700 hover:bg-teal-100 px-6 py-3 rounded-lg flex flex-row items-center text-center hover',
          ]"
        >
          <Icon name="line-md:clipboard-list" class="mr-4" /><span
            ><NuxtLink to="/jobs-applicant" :class="{ hidden: expanded }">
              Jobs
            </NuxtLink></span
          >
        </li>

      </ul>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const methodThatForcesUpdate = () => {
  // ...
  const instance = getCurrentInstance();
  instance.proxy.$forceUpdate()
  // ...
};
const route = useRoute();
console.log({path:route.path,name:route.name})
const routename = ref(route.name);

const curpage = ref("text-teal-700 bg-teal-100");
const ispage = ref({
  isjob: route.name == "jobs",
  isdash: route.name == "dashboard",
  isrefer: route.name == "refferal",
});
const isjob = ref(routename == "jobs");
const isdash = ref(routename == "dashboard");
const isrefer = ref(routename == "refferal");

watch(ispage, (newispage) => {
  routename.value = newispage;
},{ immediate: true });
console.log(route.name == "jobs");
// methodThatForcesUpdate()
const expanded = ref(false);
//   import { ArrowDownIcon } from "@heroicons/vue/24/solid/esm/index.js";
//   import {
//     Listbox,
//     ListboxButton,
//     ListboxOptions,
//     ListboxOption,
//   } from "@headlessui/vue";
//   const people = [
//     { id: 1, name: "Durward Reynolds", unavailable: false },
//     { id: 2, name: "Kenton Towne", unavailable: false },
//     { id: 3, name: "Therese Wunsch", unavailable: false },
//   ];
//   const selectedPerson = ref(people[0]);
</script>

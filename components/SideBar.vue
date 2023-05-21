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
            <NuxtLink to="/dashboard" :class="{ hidden: expanded }">
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
            ><NuxtLink to="/job" :class="{ hidden: expanded }">
              Jobs
            </NuxtLink></span
          >
        </li>
        <li
        :class="[
            ispage.isreport ? curpage : 'text-teal-100',
            'hover:text-teal-700 hover:bg-teal-100 px-6 py-3 rounded-lg flex flex-row items-center text-center hover',
          ]"        >
          <Icon name="line-md:document-report" class="mr-4" /><span
            ><NuxtLink to="/report" :class="{ hidden: expanded }">
              Report
            </NuxtLink></span
          >
        </li>
        <li
        :class="[
            ispage.isrefer ? curpage : 'text-teal-100',
            'hover:text-teal-700 hover:bg-teal-100 px-6 py-3 rounded-lg flex flex-row items-center text-center hover',
          ]"        >
          <Icon name="line-md:check-list-3-filled" class="mr-4" /><span
            ><NuxtLink href="/refferals" :class="{ hidden: expanded }">
              Refferal
            </NuxtLink></span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>

const route = useRoute();
console.log({path:route.path,name:route.name})
const routename = ref(route.name);

const curpage = ref("text-teal-700 bg-teal-100");
const ispage = ref({
  isjob: route.name == "job",
  isdash: route.name == "dashboard",
  isrefer: route.name == "refferals",
  isreport: route.name == "report",
});
const isjob = ref(routename == "jobs");
const isdash = ref(routename == "dashboard");
const isrefer = ref(routename == "refferals");
const isreport = ref(routename == "report")
watch(ispage, (newispage) => {
  routename.value = newispage;
},{ immediate: true });
console.log(route.name == "jobs");
// methodThatForcesUpdate()
const expanded = ref(false);

</script>

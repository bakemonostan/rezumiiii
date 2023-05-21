<template>
  <div class="w-full px-2 bg-white shadow-lg sm:px-0">
    <TabGroup>
      <TabList
        class="flex flex-row px-4 justify-between space-x-1 focus:ring-0 focus:ring-offset-0 p-1"
      >
        <Tab>
          <div
            class="px-4 py-4 uppercase text-xl font-semibold leading-5 text-gray-200 ui-selected:text-gray-700 ring-0 ui-selected:ring-0 ui-selected:border-b-4 ui-selected:border-teal-600 focus:ring-0 focus:ring-offset-0"
          >
            New Jobs
          </div>
        </Tab>
        <Tab>
          <div
            class="px-4 py-4 uppercase text-xl font-semibold leading-5 text-gray-200 ui-selected:text-gray-700 ring-0 ui-selected:ring-0 ui-selected:border-b-4 ui-selected:border-teal-600 focus:ring-0 focus:ring-offset-0"
          >
            Closed Jobs
          </div>
        </Tab>
      </TabList>

      <TabPanels class="mt-2">
        <TabPanel class="flex flex-col justify-center">
          <div v-if="pendingNewJobs" class="mx-auto flex justify-center">
        <Icon class="text-7xl self-center" name="line-md:loading-alt-loop" />
      </div>
          <div v-else v-for="job in openJobs">
            <div class="flex flex-col px-4 py-3 w-full">
              <div>
                <h3 class="text-xl font-semibold">{{ job.tittle }}</h3>
              </div>
              <div class="flex flex-row justify-between py-2">
                <span class="text-gray-400 text-sm"
                  >{{ job.department }}</span
                >
                <span class="text-gray-400 text-sm">{{
                  format(new Date(job.validityTo), "MMMM/dd/yyyy")
                }}</span>
              </div>
            </div>
          </div>

          <div class="mx-auto my-3">
            <button
              class="bg-bgreen px-8 py-4 text-sm text-gray-100 text-center mx-auto rounded-md font-semibold"
            >
              See more
            </button>
          </div>
        </TabPanel>
        <TabPanel class="flex flex-col justify-center">
          <div v-for="job in cJobs">
            <div class="flex flex-col px-4 py-3 w-full">
              <div>
                <h3 class="text-xl font-semibold">{{ job.tittle }}</h3>
              </div>
              <div class="flex flex-row justify-between py-2">
                <span class="text-gray-400 text-sm"
                  >{{ job.department }} </span
                >
                <span class="text-gray-400 text-sm">{{
                  format(new Date(job.validityTo), "MMMM/dd/yyyy")
                }}</span>
              </div>
            </div>
          </div>
          <div class="mx-auto">
            <button
              class="bg-bgreen px-8 py-4 text-sm text-gray-100 text-center mx-auto rounded-md font-semibold"
            >
              See more
            </button>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { format } from "date-fns";
const openJobs = ref([]);
const cJobs = ref([]);
const { pendingClosedJobs, closedJobs, pendingNewJobs, newJobs } =
  useAnalytics();

watch([newJobs, pendingNewJobs, closedJobs,pendingClosedJobs], ([UnewJobs, pnj, UclosedJobs,pcj]) => {
  newJobs.value = UnewJobs;
  closedJobs.value = UclosedJobs;
  pendingNewJobs.value = pnj;
  pendingClosedJobs.value = pcj;
  openJobs.value = newJobs.value.data;
  cJobs.value = closedJobs.value.data;

});
</script>

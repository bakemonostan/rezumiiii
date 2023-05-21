<template>
  <div class="flex flex-col px-3 py-4 bg-white shadow-lg">
    <div class="bg-white rounded-md">
      <div class="flex justify-between px-2 py-4">
        <h4 class="uppercase font-semibold tracking-wide text-xl">REFFERALS</h4>
        <NuxtLink to="refferals"
          ><p class="text-teal-700">See more</p></NuxtLink
        >
      </div>
      <div v-if="pending" class="mx-auto flex justify-center">
        <Icon class="text-7xl self-center" name="line-md:loading-alt-loop" />
      </div>
      <div v-else v-for="job in data.data" :key="job.id">
        <div class="flex flex-row px-2">
          <div class="flex self-center -space-x-2">
            <span class="left-7 z-20 w-8"
              ><img src="~/assets/profile1.png" alt=""
            /></span>
            <span class="left-14 z-10 w-8"
              ><img src="~/assets/profile2.png" alt=""
            /></span>
            <span class="left-16 w-8"
              ><img src="~/assets/profile3.png" alt=""
            /></span>
          </div>
          <div class="flex flex-col px-4 py-3 w-full">
            <div>
              <h3 class="text-xl font-semibold">{{ job.jobTittle }}</h3>
            </div>
            <div class="flex flex-row justify-between py-2">
              <span class="text-gray-400 text-sm">{{ job.department }}</span>
              <span class="text-gray-400 text-sm">{{format(new Date(job.refferalDate),'MMMM/dd/yyyy')}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="bg-white w-80 h-auto rounded-md mr-3"></div>
    <div class="bg-white w-80 h-auto rounded-md mr-3"></div> -->
  </div>
</template>

<script setup>
import { useUser } from "~~/stores/user";
import { format } from "date-fns";
const fDate = (date) => {
  format(new Date(`date`),'MMMM/dd/yyyy')
};

const { pending, data } = useLazyFetch(
  "/api/AnalyticsAndReport/get-recent-referal-job",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    params: {},
    baseURL: "https://rezumii-jobmanagement.azurewebsites.net",
    onRequest({ request, options }) {
      // Set the request headers
      console.log({ options });
    },
    onResponse({ request, response, options, error }) {},
  }
);

watch([data, pending], ([ndata, npending]) => {
  data.value = ndata;
  pending.value = npending;
});
</script>

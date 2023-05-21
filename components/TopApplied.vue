<template>
  <div class="py-6 px-4 shadow-lg bg-white">
    <h1 class="uppercase font-semibold tracking-wide text-xl">
      top applied jobs
    </h1>
    <div class="flex flex-col my-10 space-y-3">
        <div v-if="!Tapplied.length" class="flex justify-center flex-col"><img src="~/assets/noData.png" class="mt-10 h-48 w-48 self-center" alt=""><p class="text-2xl font-semibold mt-4 text-center">No Applied Jobs</p></div>
      <div v-else v-for="job in Tapplied">
        <ProgressBar
          :title="job.tittle"
          class="w-[80%] bg-teal-700"
          volume="80%"
          height="h-4"
        />
      </div>
      <!-- <ProgressBar
        title="Product management"
        class="w-[70%] bg-teal-700"
        volume="70%"
        height="h-4"
      />
      <ProgressBar
        title="Cyber security"
        class="w-[60%] bg-teal-700"
        volume="60%"
        height="h-4"
      />
      <ProgressBar
        title="Devops"
        class="w-[55%] bg-teal-700"
        volume="55%"
        height="h-4"
      />
      <ProgressBar
        title="Backend development"
        class="w-[50%] bg-teal-700"
        volume="50%"
        height="h-4"
      />
      <ProgressBar
        title="Frontend development"
        class="w-[80%] bg-teal-700"
        volume="80%"
        height="h-4"
      />
      <ProgressBar
        title="HTML/CSS"
        class="w-[80%] bg-teal-700"
        volume="80%"
        height="h-4"
      /> -->
    </div>
  </div>
</template>

<script setup>
const Tapplied = ref([])
const { pendingTopApplied, topApplied } = useAnalytics();
watch([pendingTopApplied, topApplied], ([pend, UtopApplied]) => {
  topApplied.value = UtopApplied;
  Tapplied.value = topApplied.value.data
  console.log({topApplied})
});
</script>

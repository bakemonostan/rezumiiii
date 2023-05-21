<template>
  <div class="relative flex space-y-1 px-10">
    <div class="flex-1">
      <div class="bg-sky-50 max-h-full">
        <h1 class="font-bold text-3xl px-10 py-10 mb-5">Referral</h1>
        <!-- first row -->
        <div v-if="pendingReffered">
          <Icon class="text-7xl self-center" name="line-md:loading-alt-loop" />
        </div>
        <div v-else class="w-full">
          <div>
            <div class="grid grid-cols-3 gap-6">
              <div
                v-for="item in job"
                :key="item.id"
                class="bg-white py-2 ml-10 mb-8 rounded-lg"
              >
                <div class="flex justify-end p-3">
                  <span
                    v-if="item.jobType == 2"
                    class="bg-[#EDE3FE] text-xs my-auto self-start"
                    >onsite</span
                  ><span
                    mt-6
                    v-else-if="item.jobType == 1"
                    class="bg-[#D0F0FD] text-xs my-auto self-start"
                    >remote</span
                  ><span
                    v-else-if="item.jobType == 3"
                    class="bg-[#e3fef5] text-xs my-auto self-start"
                    >hybrid</span
                  >
                </div>
                <div class="px-3">
                  <h3 class="font-semibold text-xl capitalize">
                    {{ item.tittle }}
                  </h3>
                  <h5 class="text-gray-400 mb-12 text-sm uppercase">
                    {{ item.department }}
                  </h5>
                </div>
                <div class="flex relative justify-between">
                  <!-- <div class="flex -space-x-2 mb-4">
                  <span class="z-40 w-8"
                    ><img src="@/assets/HR/Ellipse656.png" alt=""
                  /></span>
                  <span class="left-7 z-20 w-8"
                    ><img src="@/assets/HR/Ellipse6551.png" alt=""
                  /></span>
                  <span class="left-14 z-10 w-8"
                    ><img src="@/assets/HR/Ellipse654.png" alt=""
                  /></span>
                  <span class="left-16 w-8"
                    ><img src="@/assets/HR/Frame1447.png" alt=""
                  /></span>
                </div> -->
                  <!-- <div class="mr-2">
                  <p class="text-xs text-gray-400">Referral for this job</p>
                </div> -->
                </div>
                <div class="bg-gray-200 shadow-sm w-full h-px mr-4 mb-2"></div>
                <div class="flex justify-end my-3 py-3">
                  <button>
                    <a
                      :href="`/refferedJobs/${item.id}`"
                      class="bg-bgreen text-white py-3 rounded-sm px-6 mr-3"
                    >
                      view
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const job = ref([]);
const loading =ref(true)
const route = useRoute();

const { pendingReffered, reffered } = useJobs();
watch([reffered,pendingReffered], ([newreffered,newP]) => {
  reffered.value = newreffered;
  job.value = reffered.value.data;
  loading.value = false
  console.log({ pendingg: pendingReffered });
  console.log({ reffered });
});
</script>

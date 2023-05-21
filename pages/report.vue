<template>
  <div class="w-full mt-16">
    <h2 class="text-2xl font-semibold mb-4">Report</h2>
    <div class="px-4 p-3 bg-white flex flex-row justify-between mb-4">
      <p class="text-teal-600 text-xl font-semibold">Per Opening</p>
      <div
        class="flex flex-row justify-between border border-teal-500 px-8 py-3 text-teal-500"
      >
        <Icon name="heroicons:arrow-down-tray" class="mr-4 self-center" />
        <p>Download</p>
      </div>
    </div>
    <div class="flex flex-row space-x-4 my-4">
      <div class="w-2/3">
        <div class="flex flex-row space-x-3 mb-3">
          <div class="flex flex-row w-1/2 bg-white rounded-lg px-3 py-10">
            <div>
              <img
                src="~/assets/Frame 1442.png"
                alt=""
                class="w-auto h-auto mr-6"
              />
            </div>

            <div class="self-center">
              <h3 class="uppercase text-xs text-gray-400">Total Application</h3>
              <p class="text-4xl font-black">0</p>
            </div>
          </div>
          <div class="flex flex-row w-1/2 bg-white rounded-lg px-3 py-10">
            <div>
              <img
                src="~/assets/socials/linkedin.png"
                alt=""
                class="w-auto h-auto mr-6"
              />
            </div>

            <div class="self-center">
              <h3 class="uppercase text-xs text-gray-400">Total Linkedin</h3>
              <p class="text-4xl font-black">{{ totalLinkedin.data }}</p>
            </div>
          </div>
        </div>
        <div class="flex flex-row space-x-3 mb-3">
          <div class="flex flex-row w-1/2 bg-white rounded-lg px-3 py-10">
            <div>
              <img
                src="~/assets/socials/twitter.png"
                alt=""
                class="w-auto h-auto mr-6"
              />
            </div>

            <div class="self-center">
              <h3 class="uppercase text-xs text-gray-400">Total Twitter</h3>
              <p class="text-4xl font-black">{{ totalTwitter.data }}</p>
            </div>
          </div>
          <div class="flex flex-row w-1/2 bg-white rounded-lg px-3 py-10">
            <div>
              <img
                src="~/assets/socials/facebook.png"
                alt=""
                class="w-auto h-auto mr-6"
              />
            </div>

            <div class="self-center">
              <h3 class="uppercase text-xs text-gray-400">Total Facebook</h3>
              <p class="text-4xl font-black">{{ totalFacebook.data }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-1/3 rounded-lg bg-white text-xs p-3">
        <p class="text-gray-400 uppercase">Application Statistics</p>
        <div class="h-56 mx-auto">
          <div v-if="pendingSocialChart" class="mx-auto flex justify-center">
            <Icon
              class="text-7xl self-center"
              name="line-md:loading-alt-loop"
            />
          </div>
          <Pie v-else :data="pieD" />
        </div>
      </div>
    </div>
    <div class="px-4 p-3 bg-white flex flex-row justify-between mb-4">
      <p class="text-teal-600 text-xl font-semibold">Per Company</p>
      <div
        class="flex flex-row justify-between border border-teal-500 px-8 py-3 text-teal-500"
      >
        <Icon name="heroicons:arrow-down-tray" class="mr-4 self-center" />
        <p>Download</p>
      </div>
    </div>
    <div class="flex flex-row space-x-4">
      <div
        class="flex flex-col w-1/3 bg-white rounded-lg border border-white p-3"
      >
        <p class="uppercase text-xs text-gray-400">total job posted</p>
        <h3 class="font-black text-4xl">{{ totalJobPosted.data }}</h3>
      </div>
      <div
        class="flex flex-col w-1/3 bg-white rounded-lg border border-white p-3"
      >
        <p class="uppercase text-xs text-gray-400">TOTAL APPLICATION JOB</p>
        <h3 class="font-black text-4xl">{{ totalApplication.data }}</h3>
      </div>
      <div
        class="flex flex-col w-1/3 bg-white rounded-lg border border-white p-3"
      >
        <p class="uppercase text-xs text-gray-400">TOTAL APPLICATION</p>
        <h3 class="font-black text-4xl">{{ totalCompanyApplication.data }}</h3>
      </div>
    </div>
    <div class="flex flex-col w-full bg-white rounded-lg mt-6 p-4">
      <h3 class="uppercase text-gray-400 text-sm">Application statistics</h3>
      <div class="h-[25rem] mx-auto"><Pie :data="data" /></div>
    </div>
  </div>
</template>

<script setup>
import { Pie } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PieController,
  ArcElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  ArcElement,
  PieController,
  LinearScale
);
definePageMeta({
  layout: "dash",
});
const {
  pendingTotalJobPosted,
  totalJobPosted,
  pendingTotalApplication,
  totalApplication,
  totalCompanyApplication,
  totalLinkedin,
  totalFacebook,
  totalTwitter,
  socialChart,
  pendingSocialChart,
} = useAnalytics();
console.log({ socialChart });
watch(socialChart, (nSC) => {
  socialChart.value = nSC;
  pieD.value = socialChart.value.data;
  pieD.value["datasets"] = pieD.value["dataset"];
  pieD.value.harr = []
  pieD.value.harr[0] = pieD.value.datasets
  pieD.value["datasets"] = pieD.value["harr"];

  delete pieD.value["dataset"];
  delete pieD.value["harr"];
  pieD.value.datasets['0'].backgroundColor = ["#4267B2", "#0077B5", "#1DA1F2"];
  console.log(pieD.value)
  console.log(pieD.value.datasets['0'])
});
const pieD = ref({});
const data = ref({
  labels: ["Facebook", "Twitter", "Linkedin"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: ["#4267B2", "#0077B5", "#1DA1F2"],
      hoverOffset: 4,
    },
  ],
});
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="mt-16">
      <p class="text-4xl font-bold">Welcome, {{ name || "mello" }}!</p>
    </div>
    <div class="flex flex-row mb-6 w-full justify-end">
      <div class="px-3 py-2 border border-gray-700">
        Location <Icon name="heroicons:chevron-down-20-solid" />
      </div>
    </div>
    <div
      class="w-full flex flex-row py-2 px-3 border bg-white border-gray-400 rounded-md text-gray-400 mb-4"
    >
      <Icon name="heroicons:magnifying-glass" class="text-xl self-center" />
      <input
        type="text"
        name="search"
        class="border-none w-full focus:outline-none focus:border-0 ml-3"
        placeholder="Search Job Location"
        id=""
      />
    </div>

    <div class="flex flex-row bg-teal-800 rounded-md">
      <div class="min-h-full w-2 rounded-md bg-[#97CDCD]"></div>
      <div class="flex flex-row py-6">
        <div class="text-white px-12">
          <h3 class="text-xl font-semibold">Complete your profile</h3>
          <p class="text-sm">
            Having a complete profile increases your chances of your profile
            being recognized by recruiters.
          </p>
          <button
            class="border px-6 py-2 mt-4 text-sm font-semibold rounded-md border-teal-100 text-teal-100"
          >
            View Profile
          </button>
        </div>
        <div class="">
          <div class="rounded-full h-32">
            <Doughnut :options="chartOptions" :data="doughData"></Doughnut>
          </div>
        </div>
      </div>
    </div>
    <div></div>
    <div class="flex flex-col">
      <div><h3 class="uppercase">Recent Job Opening</h3></div>
      <div class="flex flex-col lg:flex-row space-x-2 mt-6 py-3">
        <Refferalsm class="w-full lg:w-1/3" />
      </div>
    </div>
    <!-- <Recruitment/>  -->
  </div>
</template>
<script setup>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { useUser } from "~~/stores/user";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  DoughnutController,
  ArcElement,
} from "chart.js";
import { range } from "rambda";
import { Doughnut } from "vue-chartjs";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  ArcElement,
  DoughnutController,
  LinearScale
);
const user = useUser();
const { name } = user;
const date = ref();
onMounted(() => {
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
  date.value = [startDate, endDate];
});
definePageMeta({
  layout: "dashapplicant",
});
const chartOptions = ref({
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
});

const doughData = ref({
  labels: [],
  datasets: [
    {
      label: "Dataset 1",
      data: [25,75],
      backgroundColor: ['rgb(204, 251, 241)',"#009E9E"],
    },

  ],
});
</script>

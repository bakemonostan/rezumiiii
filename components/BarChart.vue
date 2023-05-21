<template>
  <div class="flex flex-col w-full py-6 px-8 border border-gray-200 rounded-lg">
    <div class="flex flex-row justify-between py-4">
      <h1>{{ title }}</h1>
      <div class="flex flex-row space-x-2">
        <div
          class="p-1 bg-teal-50 text-teal-700 text-xs font-semibold hover:text-teal-100 hover:bg-teal-700"
        >
          D
        </div>
        <div
          class="p-1 bg-teal-50 text-teal-700 text-xs font-semibold hover:text-teal-100 hover:bg-teal-700"
        >
          W
        </div>
        <div
          class="p-1 bg-teal-50 text-teal-700 text-xs font-semibold hover:text-teal-100 hover:bg-teal-700"
        >
          M
        </div>
        <div
          class="p-1 bg-teal-50 text-teal-700 text-xs font-semibold hover:text-teal-100 hover:bg-teal-700"
        >
          6M
        </div>
        <div
          class="p-1 bg-teal-50 text-teal-700 text-xs font-semibold hover:text-teal-100 hover:bg-teal-700"
        >
          1YR
        </div>
      </div>
    </div>
    <div class="w-full">
      <div v-if="pendingChart" class="mx-auto flex justify-center">
        <Icon class="text-7xl self-center" name="line-md:loading-alt-loop" />
      </div>
      <Bar v-else :data="barD" :options="chartOptions" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { range } from "rambda";
import { Bar } from "vue-chartjs";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,

  BarElement,
  LinearScale
);
defineProps({ title: String });
const categories = ref({
  "12 Months": [],
  "30 Days": [],
  "7 Days": [],
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
const { chart, pendingChart } = useAnalytics();
watch(chart, (newChart) => {
     chart.value = newChart;
      barD.value = chart.value.data;
     console.log({ chart });
   });
const barData = ref({
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  datasets: [
    {
      label: "Jobs Created",
      backgroundColor: "#009E9E",
      data: [],
      barThickness: 30,
    },
    {
      label: "Ongoing Jobs",
      backgroundColor: "#B87503",
      data: [],
      barThickness: 30,
    },
    {
      label: "Closed Jobs",
      backgroundColor: "#318BCC",
      data: [],
      barThickness: 30,
    },
  ],
});

const barD = ref({})
// const getData = () => {
//   console.log({ chart });
//   watch(chart, (newChart) => {
//     chart.value = newChart;
//     plot.value = chart.value.data;
//     console.log({ plot });

//     barData.value.datasets[0].data = chart.value.data.datasets[0].data;
//     barData.value.datasets[1].data = chart.value.data.datasets[1].data;
//     barData.value.datasets[2].data = chart.value.data.datasets[2].data;

//     console.log({ chart });
//   });
// };

// onMounted(() => {
//   getData();
// });
</script>

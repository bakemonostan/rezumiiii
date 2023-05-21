<template>
  <div class="flex flex-col w-full">
    <div class="mt-16">
      <p class="text-4xl font-bold">Welcome, {{ mail || "mello" }}!</p>
    </div>
    <div class="flex flex-row mb-6 w-full justify-end">
      <Datepicker v-model="date" range class="w-4/12" />
    </div>
    <BarChart /> 
    <div
      class="flex flex-col lg:flex-row space-y-2 lg:space-x-2 justify-between overflow-hidden mt-8"
    >
      <Tiles
        title="Total Job created"
        :amount="totals.total"
        class="bg-[#DFF7F7] lg:w-1/3"
        progress-volume="100%"
        pClass="bg-teal-700 w-[100%]"
      />
      <Tiles
        title="Total Ongoing jobs"
        :amount="totals.totalOngoing"
        class="bg-[#FFF2D0] lg:w-1/3"
        :progress-volume="`${Opercent} %`"
        :pClass="`bg-[#B87503] w-[${Opercent}%]`"
      />
      <Tiles
        title="Total Closed Jobs"
        :amount="totals.totalClosed"
        class="bg-[#DBF0FF] lg:w-1/3"
        :progress-volume="`${closePercent}%`"
        :pClass="`bg-blue-500 w-[${closePercent}%]`"
      />
    </div>
    <div class="flex flex-col">
      <div><h3 class="uppercase">Recent</h3></div>
      <div class="flex flex-col lg:flex-row space-x-2 mt-6 py-3">
        <Refferalsm class="w-full lg:w-1/3" /> 
        <TopApplied class="w-full lg:w-1/3" />
        <NewClosed class="w-full lg:w-1/3" />
      </div>
    </div>
    <!-- <Recruitment/>  -->
  </div>
</template>
<script setup>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { useUser } from "~~/stores/user";
const totals = ref({});
const Opercent = computed(() => {
  return Math.floor((totals.value.totalOngoing / totals.value.total) * 100);
});
const closePercent = computed(() => {
  return Math.floor( (totals.value.totalClosed / totals.value.total) * 100);
});
const user = useUser();
const { email } = user;
const mail = computed(() => {
  return email.split("@")[0];
});
const date = ref();
onMounted(() => {
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
  date.value = [startDate, endDate];
});
definePageMeta({
  layout: "dash",
});

const getData = () => {
  const { total, totalOngoing, totalClosed } = useAnalytics();
  watch(
    [total, totalOngoing, totalClosed],
    ([newTotal, newOngoing, newClosed]) => {
      total.value = newTotal;
      console.log(total);
      totals.value.total = total.value.data;
      console.log(totals);
      totalOngoing.value = newOngoing;
      totals.value.totalOngoing = totalOngoing.value.data;
      totalClosed.value = newClosed;
      totals.value.totalClosed = totalClosed.value.data;
    }
  );
};
getData();
</script>

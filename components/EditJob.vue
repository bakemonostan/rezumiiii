<template>
  <div class="bg-white px-12">
    <div class="flex flex-row justify-between py-4 px-3">
      <h3 class="font-black text-3xl">Edit Job</h3>
      <div class="flex flex-row justify-end min-w-[25rem]">
        <button
          @click="submitCreate"
          :class="[
            disabled ? ' text-gray-300' : '',
            'py-3 px-16 text-center text-white bg-bgreen rounded-sm',
          ]"
          :disabled="disabled"
        >
          <Icon v-if="disabled" name="line-md:loading-twotone-loop" />

          Edit
        </button>
      </div>
    </div>
    <div class="h-px bg-gray-300 w-full rounded-md"></div>

    <div class="px-12 py-10 mt-16">
      <FormKit
        ref="formk"
        type="form"
        id="createjob"
        @submit="send"
        @submit-invalid="showErrors"
        :actions="false"
        :incomplete-message="false"
        :value="{ ...editData }"
      >
        <ul
          class="py-3 px-4 text-center text-red-500 border border-red-500 bg-red-100"
          v-if="messages.length"
        >
          <li v-for="message in messages">{{ message }}</li>
        </ul>
        <div
          v-if="fetchErr"
          class="py-3 px-4 text-center text-red-500 border border-red-500 bg-red-100"
        >
          {{ fetchErr }}
        </div>
        <FormKit
          type="text"
          label="Job title*"
          name="tittle"
          help=""
          placeholder="Enter title"
          validation="required"
          outer-class="mb-5 w-full"
          label-class=" mb-3 font-semibold text-gray-700 text-md lg:text-lg"
          inner-class=" border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600"
          input-class="w-full h-10 px-3 py-3 lg:py-8 border-none text-base text-gray-700 placeholder-gray-400"
          help-class="text-xs text-red-500"
        />

        <FormKit
          type="textarea"
          label="Job description*"
          name="description"
          help="Minimum 700"
          placeholder="Enter description"
          validation="required"
          validation-visibility=""
          outer-class="mb-5 w-full"
          label-class=" mb-3 font-semibold text-gray-700 text-md lg:text-lg"
          inner-class=" border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600"
          input-class="w-full h-full px-3 py-3 lg:py-8 border-none text-base text-gray-700 placeholder-gray-400"
          help-class="text-xs text-gray-500 text-right"
        />
        <div class="grid grid-cols-2 gap-4">
          <FormKit
            type="text"
            label="Job department*"
            name="department"
            help=""
            placeholder="department"
            validation="required"
            validation-visibility=""
            outer-class="mb-5 w-full"
            label-class=" mb-3 font-semibold text-gray-700 text-md lg:text-lg"
            inner-class=" border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600"
            input-class="w-full h-10 px-3 py-3 lg:py-8 border-none text-base text-gray-700 placeholder-gray-400"
            help-class="text-xs text-red-500"
          />
          <FormKit
            type="select"
            name="jobType"
            label="Job Type"
            placeholder="Select option"
            :options="ro"
            outer-class="mb-5 w-full"
            label-class="mb-3 font-semibold text-gray-700 text-md lg:text-lg"
            inner-class=" border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600 w-full"
            input-class="w-full px-3 py-5 border-none text-base text-gray-700  placeholder-gray-400 "
            help-class="text-xs text-gray-500"
          />
          <FormKit
            type="text"
            label="Minimum Requirement"
            name="requirement"
            help=""
            placeholder="Min requirement"
            validation="required"
            validation-visibility=""
            outer-class="mb-5 w-full"
            label-class=" mb-3 font-semibold text-gray-700 text-md lg:text-lg"
            inner-class=" border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600"
            input-class="w-full h-10 px-3 py-3 lg:py-8 border-none text-base text-gray-700 placeholder-gray-400"
            help-class="text-xs text-red-500"
          />
          <FormKit
            type="text"
            label="Benefits"
            name="benefit"
            help=""
            placeholder="List benefits"
            validation="required"
            validation-visibility=""
            outer-class="mb-5 w-full"
            label-class=" mb-3 font-semibold text-gray-700 text-md lg:text-lg"
            inner-class=" border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600"
            input-class="w-full h-10 px-3 py-3 lg:py-8 border-none text-base text-gray-700 placeholder-gray-400"
            help-class="text-xs text-red-500"
          />
          <FormKit
            type="select"
            label="Country"
            name="country_Id"
            :options="countries"
            help=""
            placeholder="Choose country"
            validation="required"
            validation-visibility=""
            outer-class="mb-5 w-full"
            label-class=" mb-3 font-semibold text-gray-700 text-md lg:text-lg"
            inner-class=" border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600"
            input-class="w-full px-3 py-3 lg:py-5 border-none text-base text-gray-700 placeholder-gray-400"
            help-class="text-xs text-red-500"
          />
          <FormKit
            type="select"
            label="State"
            name="state_Id"
            :options="states"
            help=""
            placeholder="Choose state"
            validation="required"
            validation-visibility=""
            outer-class="mb-5 w-full"
            label-class=" mb-3 font-semibold text-gray-700 text-md lg:text-lg"
            inner-class=" border border-2 
              border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600"
            input-class="w-full px-3 py-3 lg:py-5 border-none"
            help-class="text-xs text-red-500"
          />
        </div>
        <div class="bg-gray-200 my-12 px-8 py-4 w-full">
          <h3 class="text-gray-700 font-semibold text-xl">Validity Period</h3>
        </div>
        <div class="py-2">
          <!-- <h4 class="text-gray-400 font-semibold">Select Period</h4> -->
          <div class="flex flex-row space-x-4">
            <div>
              <!-- <div
                  class="w-full flex flex-row space-x-4 py-6 border-b-2 border-gray-300"
                >
                  <div
                    class="border border-gray-300 px-8 py-3 rounded-md ui-selected:border-teal-500 ui-selected:text-gray-700 ui-not-selected:text-gray-400 mr-8"
                  >
                    <div>Daily</div>
                  </div>
                  <div
                    class="border border-gray-300 px-8 py-3 rounded-md ui-selected:border-teal-500 ui-selected:text-gray-700 ui-not-selected:text-gray-400 mr-8"
                  >
                    <div>Weekly</div>
                  </div>
                  <div
                    class="border border-gray-300 px-8 py-3 rounded-md ui-selected:border-teal-500 ui-selected:text-gray-700 ui-not-selected:text-gray-400 mr-8"
                  >
                    <div>Monthly</div>
                  </div>
                </div> -->
              <div class="flex flex-row justify-left">
                <FormKit
                  type="date"
                  value=""
                  label="From"
                  name="validityFrom"
                  validation="required"
                  validation-visibility=""
                  outer-class="mr-6"
                />
                <FormKit
                  type="date"
                  value=""
                  label="To"
                  name="validityTo"
                  validation="required"
                  validation-visibility=""
                />
                <!-- <VueDatePicker
                v-model="range"
                range
                :enable-time-picker="false"
                :preset-ranges="presetRanges"
                :min-date="new Date()"
                @update:model-value="handleDate"
              >

              </VueDatePicker> -->
              </div>
            </div>
          </div>
        </div>
      </FormKit>
    </div>
  </div>
</template>
<script setup>
import { getValidationMessages } from "@formkit/validation";
import { submitForm } from "@formkit/core";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import {
  formatISO,
  intervalToDuration,
  endOfMonth,
  startOfWeek,
  endOfWeek,
} from "date-fns";
import { editData } from "~~/stores/editData";
import { useEditModal } from "~~/stores/modal";
import { useToastEdit } from "~~/stores/toast";
const disabled = ref(false);

watch(
  editData,
  (edited) => {
    editData.value = edited;
  },
  { immediate: true }
);
const formk = ref(null);
const messages = ref([]);
const fetchErr = ref("");
const { refreshJobs } = useJobs();

const range = ref("");
const ISOdate = ref([]);
const handleDate = (modelData) => {
  range.value = modelData;
  console.log(toRaw(range.value));
  ISOdate.value = toRaw(range.value).map((x) => formatISO(x));
  console.log(toRaw(ISOdate.value));
};

function showErrors(node) {
  messages.value = [];
  const validations = getValidationMessages(node);
  validations.forEach((inputMessages) => {
    messages.value = messages.value.concat(
      inputMessages.map((message) => message.value)
    );
  });
}
const submitCreate = () => {
  submitForm("createjob");
};
const send = (values) => {
  console.log(values);

  const {
    pendingreffer,
    data: updated,
    error,
  } = useFetch("/api/JobManager/update-job", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: { ...values },
    baseURL: "https://rezumii-jobmanagement.azurewebsites.net",
    onRequest({ request, options }) {
      // Set the request headers
      disabled.value = true;
      console.log(options);
    },
    onResponse({ request, response, options }) {
      // Process the response data
      if (response._data.status) {
        disabled.value = false;
        useEditModal.value = false;
        useToastEdit.value = true;
        refreshJobs();

        setTimeout(() => {
          useToastEdit.value = false;
        }, 2000);
      }
    },
    onResponseError() {
      disabled.value = false;
    },
  });
  console.log({ updated, error });
};

const presetRanges = ref([
  { label: "Today", range: [new Date(), new Date()] },
  {
    label: "This week",
    range: [startOfWeek(new Date()), endOfWeek(new Date())],
  },
  { label: "This month", range: [new Date(), endOfMonth(new Date())] },
]);
console.log(
  intervalToDuration({
    start: new Date("2023-02-19T06:55:50.800Z"),
    end: new Date("2022-02-19T06:55:50.800Z"),
  })
);
// import { getValidationMessages } from "@formkit/validation";
const ro = ref([
  { label: "Remote", value: 1 },
  { label: "Onsite", value: 2 },
  { label: "Hybrid", value: 3 },
]);
const countries = ref([
  { label: "Nigeria", value: "1989883F-4F99-43BF-A754-239BBBFEC00E" },
]);
const states = ref([
  { label: "Lagos", value: "F4461B0F-3473-458F-B6B5-637CAAB0B1C1" },
]);
</script>
<style>
[data-invalid] .formkit-inner {
  border-color: red;
}
[data-invalid] .formkit-outer {
  color: red;
}
</style>

<template>
  <div class="flex justify-center lg:py-6 w-full px-6">
    <div class="w-11/12 border border-gray-50">
      <div>
        <h3 class="text-2xl font-semibold text-center mb-2">Refer a Friend</h3>
        <p class="text-center">
          Fill in the details below to refer a friend for <br />this job opening
        </p>
      </div>
      <div class="px-2 py-6">
        <FormKit
          type="form"
          @submit="send"
          @submit-invalid="showErrors"
          :actions="false"
          :incomplete-message="false"
          :value="{
            refferalNumber: '0813882345',
            refferalEmail: 'dd@gmail.com',
            candidateName: 'Segun',
            candidateEmail: 'Segun@gmail.com',
            candidateNumber: '0801345924',
            requiredSkills: 'none',
            refferalDate: '2023-02-18T14:56:04.800Z',
          }"
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
          <div class="flex flex-row justify-center">
            <div>
              <FormKit
                type="text"
                label="Name*"
                name="candidateName"
                help=""
                placeholder="Enter Name"
                validation="required"
                outer-class="mb-5 w-full"
                label-class=" mb-3 font-light text-md"
                inner-class="w-full border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600"
                input-class="w-full h-10 px-3 py-8 border-none text-base text-gray-700 placeholder-gray-400 shadow-sm"
                help-class="text-xs text-gray-500"
              />
              <FormKit
                type="text"
                label="Phone Number*"
                name="candidateNumber"
                help=""
                placeholder="Enter Number"
                validation="required"
                outer-class="mb-5 "
                label-class=" mb-3 font-light text-md"
                inner-class="max-w-md border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600"
                input-class="w-full h-10 px-3 py-8 border-none text-base text-gray-700 placeholder-gray-400 shadow-sm"
                help-class="text-xs text-gray-500"
              />
              <FormKit
                type="text"
                label="Email*"
                name="candidateEmail"
                help=""
                placeholder="Enter email"
                validation="required|email"
                outer-class="mb-5"
                label-class=" mb-3 font-light text-md"
                inner-class="max-w-md border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600"
                input-class="w-full h-10 px-3 py-8 border-none text-base text-gray-700 placeholder-gray-400 shadow-sm"
                help-class="text-xs text-gray-500"
              />
              <div class="flex flex-row justify-center w-full">
                <button
                  @click="submitReffer"
                  :class="[
                    disabled ? ' text-gray-300' : '',
                    'py-3 px-16 text-center text-white bg-bgreen w-full rounded-sm',
                  ]"
                  :disabled="disabled"
                >
                  <Icon v-if="disabled" name="line-md:loading-twotone-loop" />

                  Reffer Job
                </button>
              </div>
            </div>
          </div>

          <div class="container">
            <span
              class="py-5 px-4 mx-auto my-4 rounded-lg text-red-700 text-center"
              >{{ fetchErr }}</span
            >
          </div>
        </FormKit>
      </div>
    </div>
  </div>
</template>
<script setup>
import { getValidationMessages } from "@formkit/validation";
import { useRefferModal } from "~~/stores/modal";
import { useToast } from "~~/stores/toast";
import { submitForm } from "@formkit/core";
import {useUser} from "~~/stores/user";
const alertOpen = ref(false);
const route = useRoute();
const messages = ref([]);
const disabled = ref(false);
const fetchErr = ref("");
const responseMessage = ref("");
function showErrors(node) {
  messages.value = [];
  const validations = getValidationMessages(node);
  validations.forEach((inputMessages) => {
    messages.value = messages.value.concat(
      inputMessages.map((message) => message.value)
    );
  });
}
const submitReffer = () => {
  submitForm("refferForm");
};
const {name,email} = useUser()
const send = (values) => {
  values.id = route.params.id;
  values.refferalEmail = email;
  const {
    pendingreffer,
    data: reffer,
    error,
  } = useFetch("/api/JobManager/create-job-refferal", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: { ...values },
    baseURL: "https://rezumii-jobmanagement.azurewebsites.net",
    onRequest({ request, options }) {
      // Set the request headers
      disabled.value = true;
      console.log(options);
    },
    onRequestError({ request, options, error }) {
      // Handle the request errors
      console.log(request);
    },
    onResponse({ request, response, options }) {
      // Process the response data
      // alert(JSON.stringify(response._data.message));yd3wc6jsej2bnjo4se5yacmzq4ey6tzyu7odhktwcpffbtmwikeq
      responseMessage.value = response._data.message;
      useRefferModal.value = false;
      useToast.value = true;
      setTimeout(() => {
        useToast.value = false;
      }, 2000);
    },
    onResponseError({ request, response, options }) {
      // Handle the response errors
    },
  });
  console.log({ reffer, error });
};
</script>

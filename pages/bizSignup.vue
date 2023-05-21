<template>
  <NavBar />
  <div class="flex justify-center lg:py-24">
    <div class="px-6 lg:px-14 py-16 shadow-md border border-gray-50 lg:w-5/12">
      <div class="flex flex-col justify-center mx-auto">
        <div class="text-center mb-4">
          <h2 class="text-3xl font-bold mb-4">
            Be part of <span class="text-teal-600">Rezumii</span><br />
            in seconds...
          </h2>
        </div>
      </div>

      <div class="px-6">
        <FormKit
          type="form"
          id="signup"
          @submit="send"
          @submit-invalid="showErrors"
          :actions="false"
          :incomplete-message="false"
          :value="{
            businessName: 'Imran',
            email: 'hel@gmail.com',
            phoneNumber: '08148882021',
            password: 'P@ssw0rd',
            securityQuestion: 1,
            securityAnswer: 'imu',
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
          <FormKit
            type="text"
            label="Business name"
            name="businessName"
            help=""
            placeholder="Enter Business name"
            outer-class="mb-5"
            label-class=" mb-3 font-light text-lg"
            inner-class=" border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600"
            input-class="w-full h-10 px-3 py-8 border-none text-base text-gray-700 placeholder-gray-400"
            help-class="text-xs text-gray-500"
          />
          <FormKit
            type="text"
            label="Email"
            name="email"
            help=""
            placeholder="Enter email"
            validation="email"
            validation-visibility="live"
            outer-class="mb-5 w-full"
            label-class=" mb-3 font-light text-lg"
            inner-class=" border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600 w-full"
            input-class="w-full h-10 px-3 py-8 border-none text-base text-gray-700 placeholder-gray-400 shadow-sm"
            help-class="text-xs text-gray-500"
          />
          <FormKit
            type="password"
            label="Password"
            name="password"
            help=""
            placeholder="Enter Password"
            validation="required"
            outer-class="mb-5 w-full"
            label-class=" mb-3 font-light text-lg"
            inner-class=" border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600 w-full"
            input-class="w-full h-10 px-3 py-8 border-none text-base text-gray-700 placeholder-gray-400 shadow-sm"
            help-class="text-xs text-gray-500"
          />
          <FormKit
            type="text"
            label="Phone number (Optional)"
            name="phoneNumber"
            help=""
            placeholder="Enter phone number"
            outer-class="mb-5 w-full"
            label-class=" mb-3 font-light text-lg"
            inner-class=" border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600 w-full"
            input-class="w-full px-3 py-5 border-none text-base text-gray-700 bg-white placeholder-gray-400 shadow-sm"
            help-class="text-xs text-gray-500"
          />

          <FormKit
            type="select"
            label="Security Question"
            name="securityQuestion"
            placeholder="Select security question"
            validation="required"
            :options="questions"
            outer-class="mb-5 w-full"
            label-class=" mb-3 font-light text-lg"
            inner-class=" border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600 w-full"
            input-class="w-full px-3 py-5 border-none text-base text-gray-700 bg-white placeholder-gray-400 shadow-sm"
            help-class="text-xs text-gray-500"
          />

          <FormKit
            type="text"
            label="Security answer"
            name="securityAnswer"
            help=""
            placeholder="Enter security answer"
            validation="required"
            outer-class="mb-5 w-full"
            label-class=" mb-3 font-light text-lg"
            inner-class=" border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600 w-full"
            input-class="w-full h-10 px-3 py-8 border-none text-base text-gray-700 placeholder-gray-400 shadow-sm"
            help-class="text-xs text-gray-500"
          />
          <div class="flex flex-row justify-end min-w-[25rem]">
            <button
              @click="submitCreate"
              :class="[
                disabled ? ' text-gray-300' : '',
                'py-4 px-6 bg-bgreen text-white rounded-md text-xl text-center w-full mt-10 mb-6',
              ]"
              :disabled="disabled"
            >
              <Icon v-if="disabled" name="line-md:loading-twotone-loop" />
              Create Account
            </button>
          </div>
          <div class="container">
            <span
              class="py-5 px-4 mx-auto my-4 rounded-lg text-red-700 text-center"
              >{{ fetchErr }}</span
            >
          </div>
          <p class="text-center mx-auto">
            By using Reszumii, you agree to Rezumii
            <a href="#" class="text-green-700"
              >Terms<br />
              & Conditions</a
            >
            and <a href="#" class="text-green-700">Privacy Policy</a>
          </p>
        </FormKit>
      </div>
    </div>
  </div>
</template>
<script setup>
import { getValidationMessages } from "@formkit/validation";
import { submitForm } from "@formkit/core";
import { useUser } from "~~/stores/user";
const user = useUser();
const questions = ref([
  { label: "what is your favourite movie?", value: 1 },
  { label: "what is your nickname", value: 2 },
  { label: "what is your favorite movie?", value: 3 },
]);
const router = useRouter();
const messages = ref([]);
const disabled = ref(false);
const fetchErr = ref("");
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
  submitForm("signup");
};

async function send(values) {
  const { data, error } = await useFetch("/api/account/business-sign-up", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: { ...values },
    params: {},
    baseURL: "https://rezumii-account.azurewebsites.net",
    onRequest({ request, options }) {
      // Set the request headers
      disabled.value = true;
      console.log(options);
    },
    onRequestError(){
      disabled.value = false;

    },
    onResponse({ request, response, options }) {
      console.log({rawStatus:response.status})
      console.log({ status: response._data.status });
      console.log({ statusdata: response._data });
      if (response._data.status === true) {
        disabled.value = false;
        user.$patch({
          email: values.email,
        });

        setTimeout(() => {
          router.push({ path: "/thanks" });
        }, 2000);
      } else {
        fetchErr.value = response._data.message;
      }
    },
    onResponseError({ request, response, options }) {
      disabled.value = false;
      console.log(response)
      // Handle the response errors
    },
  });

  console.log(values);

  // router.push({ path: "/checkmail" });
}
</script>

<template>
  <NavBar />
  <div class="flex justify-center pt-12 lg:py-24">
    <div class="px-6 lg:px-14 py-16 shadow-md border border-gray-50 lg:w-5/12">
      <div class="flex flex-col justify-center mx-auto">
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-4">Sign Up</h2>
          <p>Find jobs that create a new experiences.</p>
        </div>
        <div class="flex flex-col mt-10">
          <div class="flex flex-row justify-center space-x-4 lg:space-x-12">
            <div
              class="border border-gray-200 px-4 py-3 lg:text-sm text-xs text-center lg:text-left"
            >
              <Icon name="logos:google-icon" class="mr-1 lg:mr-4" />Continue
              with google
            </div>
            <div
              class="border border-gray-200 px-4 py-3 lg:text-sm text-xs text-center lg:text-left"
            >
              <Icon name="logos:linkedin-icon" class="mr-4" />
              Continue with Linkedin
            </div>
          </div>
          <div
            class="flex flex-row space-x-4 lg:space-x-12 justify-center mt-6"
          >
            <div
              class="border border-gray-200 px-4 py-3 lg:text-sm text-xs text-center lg:text-left"
            >
              <Icon name="logos:twitter" class="mr-4" />
              Continue with Twitter
            </div>
            <div
              class="border border-gray-200 px-4 py-3 lg:text-sm text-xs text-center lg:text-left"
            >
              <Icon name="logos:facebook" class="mr-4" />
              Continue with Facebook
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-row justify-center mt-8">
        <div class="h-[2px] w-24 bg-gray-300 rounded-lg self-center mr-4"></div>
        <div cl><p>or</p></div>
        <div class="h-[2px] w-24 bg-gray-300 rounded-lg self-center ml-4"></div>
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
            firstName: 'Imran',
            lastName: 'Abubakar',
            email: 'as.pecq@gmail.com',
            phoneNumber: '08148882021',
            password: 'P@ssw0rd',
            securityQuestion: 1,
            securityAnswer: 'yes',
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
          <div
            class="flex flex-col lg:flex-row lg:space-x-6 justify-between mt-6"
          >
            <FormKit
              type="text"
              label="First name"
              name="firstName"
              help=""
              placeholder="Enter Firstname"
              validation="required"
              outer-class="mb-5 lg:w-6/12"
              label-class=" mb-3 font-light text-lg"
              inner-class="max-w-md border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600"
              input-class="w-full h-10 px-3 py-8 border-none text-base text-gray-700 placeholder-gray-400"
              help-class="text-xs text-gray-500"
            />
            <FormKit
              type="text"
              label="Last name"
              name="lastName"
              help=""
              placeholder="Enter Lastname"
              validation="required"
              outer-class="mb-5 lg:w-6/12"
              label-class=" mb-3 font-light text-lg"
              inner-class="max-w-md border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600"
              input-class="w-full h-10 px-3 py-8 border-none text-base text-gray-700 placeholder-gray-400 shadow-sm"
              help-class="text-xs text-gray-500"
            />
          </div>
          <FormKit
            type="text"
            label="Email"
            name="email"
            help=""
            placeholder="Enter email"
            validation="required|email"
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
            placeholder="Enter phone number"
            validation="required"
            outer-class="mb-5 w-full"
            label-class=" mb-3 font-light text-lg"
            inner-class=" border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600 w-full"
            input-class="w-full h-10 px-3 py-8 border-none text-base text-gray-700 placeholder-gray-400 shadow-sm"
            help-class="text-xs text-gray-500"
          />
          <FormKit
            type="text"
            label="Phone number"
            name="phoneNumber"
            help=""
            placeholder="Enter phone number"
            validation="required"
            outer-class="mb-5 w-full"
            label-class=" mb-3 font-light text-lg"
            inner-class=" border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600 w-full"
            input-class="w-full h-10 px-3 py-8 border-none text-base text-gray-700 placeholder-gray-400 shadow-sm"
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
          <!-- <FormKit
            type="submit"
            label="Create Account"
            :disabled="disabled"
            outer-class="bg-bgreen py-4 px-6 text-white rounded-md text-xl text-center w-full mt-10 mb-6"
          /> -->
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
          <p class="text-center mb-3">Already have an account? <NuxtLink to="login" class="text-teal-600 text-center">login</NuxtLink></p>
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
const questions = ref([
  { label: "what is your favourite movie?", value: 1 },
  { label: "what is your nickname", value: 2 },
  { label: "what is your favorite movie?", value: 3 },
]);
const user = useUser();
const router = useRouter();
const messages = ref([]);
const disabled = ref(false);
const fetchErr = ref("");
const submitCreate = () => {
  submitForm("signup");
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
async function send(values) {
  const { data, error } = await useFetch("/api/account/applicant-sign-up", {
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
      console.log({ status: response._data.status });
      console.log({ statusdata: response._data });
      if (response._data.status) {
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
      // Handle the response errors
    },
  });

  //  console.log({data,error:error.value.data})

  // dat.value = data;
  console.log(values);

  // router.push({ path: "/checkmail" });
}
</script>

<!-- :value="{
  firstName: 'Imran',
  lastName: 'Abubakar',
  email: 'hel@gmail.com',
  phoneNumber: '08148882021',
  password: 'P@ssw0rd',
  securityQuestion: 1,
  securityAnswer: 'imu',
}" -->

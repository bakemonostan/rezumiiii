<template>
  <NavBar />
  <div
    class="flex flex-col-reverse lg:flex-row justify-center lg:justify-between px-6 md:px-12 lg:px-44 lg:py-24 bg-gradient-to-r from-gray-50 to-teal-50"
  >
    <div class="flex flex-col self-center py-6 lg:py-22 w-full lg:w-1/2">
      <h2
        class="font-black lg:text-left text-center text-lg lg:text-5xl text-bgreen"
      >
        Get Started Today
      </h2>
      <p class="lg:text-left text-center texl-md lg:text-2xl mt-4">
        Make the world more equitable by<br />
        creating jobs that celebrate diversity.
      </p>
      <img class="mx-auto mx-0 w-2/3 mt-12" src="~/assets/Frame.png" alt="" />
    </div>
    <div
      class="flex flex-col justify-center bg-white my-6 shadow-sm rounded-md py-4 lg:py-16 pt-24 w-full lg:w-5/12"
    >
      <div class="text-center flex flex-col px-12">
        <div class="flex justify-center">
          <h2 class="font-black text-2xl lg:text-5xl">Welcome Back!</h2>
          <icon
            name="emojione:waving-hand-medium-skin-tone"
            class="my-auto self-center text-4xl"
          />
        </div>
        <p class="text-lg lg:text-2xl text-gray-500">Sign in to continue</p>
      </div>
      <div class="px-6 lg:px-20 py-12">
        <FormKit
          type="form"
          id="login"
          @submit="send"
          @submit-invalid="showErrors"
          :actions="false"
          :incomplete-message="false"
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
            label="Email Address"
            name="email"
            help=""
            placeholder="Enter Email"
            validation="required|email"
            validation-visibility=""
            outer-class="mb-5 w-full"
            label-class=" mb-3 font-light text-md lg:text-lg"
            inner-class=" border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600"
            input-class="w-full h-10 px-3 py-3 lg:py-8 border-none text-base text-gray-700 placeholder-gray-400"
            help-class="text-xs text-red-500"
          />

          <FormKit
            type="password"
            label="Password"
            help=""
            name="password"
            placeholder="Password"
            validation="required"
            outer-class=" w-full"
            label-class=" mb-3 font-light text-md lg:text-lg"
            inner-class="border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600"
            input-class="w-full h-10 px-3 py-3 lg:py-8 border-none text-base text-gray-700 placeholder-gray-400 shadow-sm"
            help-class="text-xs text-gray-500"
          />

          <div class="float-right">
            <p>
              <NuxtLink to="forgot" class="text-bgreen underline"
                >Forgot password?</NuxtLink
              >
            </p>
          </div>
          <div class="flex flex-row w-full">
            <button
              @click="submitCreate"
              :class="[
                disabled ? 'opacity-70' : '',
                'py-4 px-6 bg-bgreen text-white rounded-md text-xl text-center w-full mt-10 mb-6',
              ]"
              :disabled="disabled"
            >
              <Icon
                v-if="disabled"
                name="line-md:loading-twotone-loop"
                class="mr-2"
              />
              Login
            </button>
          </div>
        </FormKit>
        <p class="text-center mx-auto"></p>
        <p class="text-center mx-auto">
          Need a rezumii account?
          <NuxtLink to="signup" class="text-green-700">Sign Up</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { getValidationMessages } from "@formkit/validation";
import { useUser } from "~~/stores/user";
import { submitForm } from "@formkit/core";

const user = useUser();
const router = useRouter();
const messages = ref([]);
const disabled = ref(false);
const fetchErr = ref("");
const submitCreate = () => {
  submitForm("login");
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
  console.log({values})
  messages.value = [];
  const { data, error } = await useFetch("/api/account/login", {
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
    onRequestError({ request, error }) {
      console.log(error.message);
      fetchErr.value = error.message;
      disabled.value = false;
    },
    onResponse({ request, response, options, error }) {
      if (!response._data.status) {
        console.log({ status: response._data });
        console.log({ statusMessage: response._data.message });

        fetchErr.value = response._data.message;
      } else {
        console.log(response)
        user.$patch({
          name: response._data.data.fullName.split(" ")[0],
          userType: response._data.data.userType,
          email:response._data.data.email,
          token:response._data.data.token,
          isLoggedIn: true,
          profileId:response._data.data.profileId
        });
        setTimeout(() => {
          if(response._data.data.userType == "1"){
            router.push({ path: "dashboard-applicant" });
          }
          else{
            router.push({ path: "dashboard" });

          }
        }, 500);
      }
    },
    onResponseError({ request, response, options, error }) {
      console.log({ error });
      disabled.value = false;
      // Handle the response errors
    },
  });
  // if (error.value === null) {
  //   user.$patch({
  //     email: values.email,
  //   });
  // } else {
  //   fetchErr.value = error.value.data;
  // }
}
</script>
<style>
[data-invalid] .formkit-inner {
  border-color: red;
}
</style>

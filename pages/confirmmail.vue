<template>
  <NavBar />
  <div class="relative w-full">
    <div
      v-if="useToastEmailConfirmed"
      class="flex border-solid border-2 right-0 top-32 border-green-500 text-green-700 rounded absolute mb-4 bg-green-200 w-96 h-14 fade z-50"
    >
      <span class="p-2 mt-2"> </span>
      <span class="mt-4"> Email confirmation Sucessful </span>
      <button
        class="absolute bg-transparent text-4xl leading-none right-0 top-0 mt-2 mr-6 outline-none focus:outline-none"
        v-on:click=""
      >
        <span>×</span>
      </button>
    </div>
  </div>

  <div class="flex flex-col container py-32 mx-auto text-center">
    <h1 class="text-3xl font-medium mb-20">
      Thank you for signing up for <span class="text-teal-600">Rezumii</span>
    </h1>
    <div class="mx-auto"><img src="~/assets/rafiki.png" alt="" /></div>
    <div
      v-if="err"
      class="text-red-500 bg-red-200 py-3 px-4 border border-red-500 rounded-md"
    >
      <p>{{ err }}</p>
    </div>
    <!-- <button
      class="bg-bgreen py-4 px-24 text-white rounded-md text-xl max-w-lg mx-auto text-center mt-16 mb-6"
      @click="send"
    >
      Confirm Email
    </button> -->
    <div class="flex flex-row justify-end min-w-[25rem]">
      <button
        @click="send"
        :class="[
          disabled ? ' text-gray-300' : '',
          'bg-bgreen py-4 px-24 text-white rounded-md text-xl max-w-lg mx-auto text-center mt-16 mb-6',
        ]"
        :disabled="disabled"
      >
        <Icon v-if="disabled" name="line-md:loading-twotone-loop" />

        Confirm Email
      </button>
    </div>
  </div>
</template>
<script setup>
import { useToastEmailConfirmed } from "~~/stores/toast";
const route = useRoute();
const router = useRouter();
const err = ref("");
const disabled = ref(false);
const userId = route.query.userId;
const token = route.query.token;
console.log({ profileId, token });
const send = () => {
  const { pendingreffer, data, error } = useFetch(
    "/api/Account/confirm-email",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { profileId, token },
      baseURL: "https://rezumii-account.azurewebsites.net",
      onRequest({ request, options }) {
        // Set the request headers
        disabled.value = true;
        console.log(options);
      },
      onRequestError() {
        disabled.value = false;
      },
      onResponse({ request, response, options }) {
        console.log({ status: response._data.status });

        if (response._data.status) {
          useToastEmailConfirmed.value = true;
          disabled.value = false;
          setTimeout(() => {
            useToastEmailConfirmed.value = false;
            router.push({ path: "login" });
          }, 2000);
        } else {
          err.value = "An error occured";
        }
      },
      onResponseError() {
        disabled.value = false;
      },
    }
  );
  console.log({ data, error });
};
</script>

<template>
  <div class="flex flex-col container py-20 mx-auto text-center">
    <h1 class="text-3xl font-medium mb-20">
      Thank you for signing up for <span class="text-teal-600">Rezumii</span>
    </h1>
    <div class="mx-auto"><img src="~/assets/rafiki.png" alt="" /></div>
    <p class="text-xl mt-16">
      We have sent an email to <b> {{ email }} </b> check your inbox<br />and
      please confirm your registration
    </p>
    <NuxtLink to="login"
      ><button
        class="bg-bgreen py-4 px-24 text-white rounded-md text-xl text-center mt-10 mb-6"
      >
        Done
      </button></NuxtLink
    >
  </div>
</template>
<script>
import { useUser } from "~~/stores/user";
const mail = ref("");
const user = useUser();
const { email } = user;
console.log({email})
</script>

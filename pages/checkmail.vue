<template>
  <NavBar />
  <div class="flex justify-center lg:py-24">
    <div class="px-6 lg:px-14 py-16 shadow-md border border-gray-50 lg:w-4/12 mt-24">
      <div class="flex flex-col justify-center mx-auto">
        <div class="container justify-self-center text-center">
          <div class="">
            <img src="~/assets/mail.png" class="mx-auto mb-2" alt="" />
          </div>
          <h2 class="text-3xl font-bold mb-2">Check your mail</h2>
          <p>We have sent a password rest link to <br />{{ email }}</p>
        </div>
      </div>

      <div class="px-6 mt-10">
        <div class="py-8 text-center">
          <p>
            Didn’t receive the mail?
            <span class="text-teal-600">Click resend</span>
          </p>
        </div>

        <div class="flex justify-center mx-auto">
          <NuxtLink to="login"
            ><Icon
              name="heroicons:arrow-left-solid"
              class="self-center mr-2 text-2xl font-bold"
            /><span>Back to Login</span></NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { useUser } from '~~/stores/user';
  const user = useUser()
  const {email} = user
  console.log(email)
</script>
<style>
[data-invalid] .formkit-inner {
  border-color: red;
}
</style>

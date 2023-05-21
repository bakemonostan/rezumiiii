<template>
  <NavBar />
  <div class="flex justify-center lg:py-24">
    <div class="px-6 lg:px-14 py-16 shadow-md border border-gray-50 lg:w-5/12 lg:mt-10 mt-24">
      <div class="flex flex-col justify-center mx-auto">
        <div class="container justify-self-center text-center">
          <div class="">
            <img src="~/assets/key.png" class="mx-auto mb-2" alt="" />
          </div>
          <h2 class="text-3xl font-bold mb-2">Reset Password</h2>
          <p>We have sent a password rest link to <br />segun@gmail.com</p>
        </div>
      </div>

      <div class="mt-10">
        <FormKit
        v-model="password"
          type="password"
          label="New Password"
          name="npassword"
          help=""
          placeholder="Enter new password"
          validation="required"
          outer-class="mb-5 w-full"
          label-class=" mb-3 font-light text-lg"
          inner-class=" border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600 w-full"
          input-class="w-full h-10 px-3 py-8 border-none text-base text-gray-700 placeholder-gray-400 shadow-sm"
          help-class="text-xs text-red-500"
        />
        <FormKit
          type="password"
          label="Confirm Password"
          name="cpassword"
          help=""
          validation="required|matches:{{pass}}"
          placeholder="Confirm new password"
          outer-class="mb-5 w-full"
          label-class=" mb-3 font-light text-lg"
          inner-class=" border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600 w-full"
          input-class="w-full h-10 px-3 py-8 border-none text-base text-gray-700 placeholder-gray-400 shadow-sm"
          help-class="text-xs text-red-500"
        />

        <NuxtLink
            to="resetconfirmed"
          ><button
            class="bg-bgreen py-4 px-6 text-white rounded-md text-xl text-center w-full mt-10 mb-6"
          >
            Reset Password
          </button></NuxtLink
        >
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
  const pass = ref('')
</script>
<style>
[data-invalid] .formkit-inner {
  border-color: red;
}
</style>

<template>
  <NavBar />
  <div class="flex justify-center lg:py-24">
    <div class="px-6 lg:px-14 py-16 shadow-md border border-gray-50 lg:w-5/12">
      <div class="flex flex-col justify-center mx-auto">
        <div class="container justify-self-center text-center">
          <div class="">
            <img src="~/assets/lock.png" class="mx-auto mb-2" alt="" />
          </div>
          <h2 class="text-3xl font-bold mb-4">Forgot Password?</h2>
        </div>
      </div>

      <div class="px-6 mt-10">
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
          type="select"
          label="Security Question"
          name="question"
          placeholder="Select security question"
          :options="[
            'what is your favourite movie?',
            'what is your nickname',
            'wh?at is your favorite movie?',
          ]"
          outer-class="mb-5 w-full"
          label-class=" mb-3 font-light text-lg"
          inner-class=" border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600 w-full"
          input-class="w-full h-10 px-3 py-8 border-none text-base text-gray-700 bg-white placeholder-gray-400 shadow-sm"
          help-class="text-xs text-gray-500"
        />

        <FormKit
          type="text"
          label="Security answer"
          name="answer"
          help=""
          placeholder="Enter security answer"
          outer-class="mb-5 w-full"
          label-class=" mb-3 font-light text-lg"
          inner-class=" border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600 w-full"
          input-class="w-full h-10 px-3 py-8 border-none text-base text-gray-700 placeholder-gray-400 shadow-sm"
          help-class="text-xs text-gray-500"
        />
        <NuxtLink to="checkmail">
          <button
          class="bg-bgreen py-4 px-6 text-white rounded-md text-xl text-center w-full mt-10 mb-6"
        >
          Reset Password
        </button>
        </NuxtLink>

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
<style>
[data-invalid] .formkit-inner {
  border-color: red;
}
</style>

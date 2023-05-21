<template>
  <NavBar />
  <div class="flex justify-center lg:py-24">
    <div class="px-6 lg:px-14 py-16 shadow-md border border-gray-50 lg:w-4/12 mt-24">
      <div class="flex flex-col justify-center mx-auto">
        <div class="container justify-self-center text-center">
          <div class="">
            <img src="~/assets/verified.png" class="mx-auto mb-2" alt="" />
          </div>
          <h2 class="text-3xl font-bold mb-2">Password Reset</h2>
          <p>
            Your password has been successfully reset <br />click below to login
          </p>
        </div>
      </div>

      <div class="flex justify-center mt-10">
        <NuxtLink
          to="login"
          class="bg-bgreen py-4 px-6 text-white rounded-md text-xl text-center w-10/12 mx-auto mt-10 mb-6"
        >
          Login
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<style>
[data-invalid] .formkit-inner {
  border-color: red;
}
</style>

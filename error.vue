<template>
  <div class="flex mt-24">
    <div class="flex flex-col self-center px-24 shadow-md py-36 mx-auto">
      <h1 class="text-3xl uppercase font-bold text-teal-700 text-center">
        {{ error.statusCode }}
      </h1>
      <p class="text-center text-lg">{{ error.message }}</p>
    </div>
  </div>
</template>
<script setup>
defineProps(["error"]);
</script>
<!-- 
<template>
  <div>Try Refreshing</div>
</template> -->
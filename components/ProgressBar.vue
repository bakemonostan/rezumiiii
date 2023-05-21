<template>
  <div class="flex flex-row justify-between">
    <h1 class="font-semibold text-[16px]">{{ title }}</h1>
  </div>
  <div class="flex flex-row">
    <div
      class="flex flex-row rounded-xl w-96 overflow-hidden bg-gray-200 z-0"
      :class="height"
    >
      <div class="z-20 " :class="$attrs.class"></div>
    </div>
    <div class="font-[500] text-sm my-auto self-center place-self-center ml-3"><span class="my-auto">{{ volume }}</span></div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  volume: String,
  height:String
});
</script>

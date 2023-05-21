<template>
  <div class="flex flex-col py-4 px-3 rounded-lg">
    <div>
      <span class="text-sm uppercase font-medium tracking-wide">{{ title }}</span>
    </div>
    <div class="text-3xl font-black my-2">{{ amount }}</div>
    <div>
      <ProgressBar
        :title="progressTitle"
        :volume="progressVolume"
        :class="pClass"
        height="h-2"
      />
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: String,
  amount: Number,
  progressTitle: String,
  progressVolume: String,
  pClass:String
});
</script>

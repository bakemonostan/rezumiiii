<template>
  <!-- <JobPanel /> -->
  <div><CreateJob /></div>
  <!-- <Refertable/> -->
</template>

<script setup>
const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
</script>

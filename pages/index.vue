<template>
    <NavBar has-menu/>
    <Hero/>
    <Services/>
    <About/>
    <Testimonial/>
    <Client/>
    <Footer/>
</template>
<script setup>
  import { useToast } from "vue-toastification";
  import {useUser} from "~~/stores/user"
  import {
  formatISO,
  intervalToDuration,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  format
} from "date-fns";
  const toast = useToast()
  // toast.success("My toast content", {
  //       timeout: 2000
  //     });
  console.log(format(new Date(`2023-03-14T04:07:10.9702533+00:00`),'MMMM/dd/yyyy'))
</script>
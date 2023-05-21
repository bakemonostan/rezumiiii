<template>
  <div class="flex flex-col space-y-8 bg-white py-3 px-4">
    <div>
      <h3 class="font-bold text-2xl">Recruitment</h3>
      <table class="table-auto border-spacing-4">
        <thead class="">
          <tr class="text-gray-400 text-left">
            <th class="py-4">Job</th>
            <th class="py-4 px-6">Tot.No Applicant</th>
            <th class="py-4 px-6">Date Created</th>
            <th class="py-4 px-6">Status</th>
          </tr>
        </thead>
        <tbody class="mt-10">
          <div></div>
          <tr class="">
            <td>Product Design</td>
            <td class="text-center">30</td>
            <td class="text-center">20/08/2022</td>
            <td>
              <button class="bg-teal-500 text-white py-2 px-3 text-sm w-24">
                ongoing
              </button>
            </td>
          </tr>
          <tr>
            <td>Backend Development</td>
            <td class="text-center">8</td>
            <td class="text-center">20/08/2022</td>
            <td>
              <button class="bg-yellow-500 text-white py-2 px-3 text-sm w-24">
                closed
              </button>
            </td>
          </tr>
          <tr>
            <td>Frontend Development</td>
            <td class="text-center">100</td>
            <td class="text-center">20/08/2022</td>
            <td>
              <button class="bg-yellow-500 text-white py-2 px-3 text-sm w-24">
                closed
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
const {pendinglistApplicant,listApplicant,} = useAnalytics();
console.log({listApplicant})
</script>

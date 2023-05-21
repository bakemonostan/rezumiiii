<template>
  <div class="bg-white w-auto m-20 rounded-sm">
    <ul
      class="flex justify-between bg-teal-500 border-collapse text-color rounded text-white h-10 p-3 mb-2 mr"
    >
      <li>Referrer</li>
      <li class="mr-42">Candidate</li>
      <li class="mr-28">Email</li>
      <li class="mr-10">Action</li>
    </ul>
    <ul
      v-for="(item, index) in job.data"

      class="flex justify-between p-3 mb-2 border-b-2"
    >
      <li class="ml-3">{{ item.refferalEmail }}</li>
      <li class="ml-6">{{ item.candidateName }}</li>
      <li>{{ item.refferalEmail }}</li>
      <li>
        <button
          @click="populateModal(item.id)"
          class="bg-teal-500 text-white font-bold py-2 px-4 rounded"
        >
          View Details
        </button>
      </li>
    </ul>
  </div>

  <!-- modal -->
  <ClientOnly>
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-2xl mr-16 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <div>
                  <div class="relative mx-auto">
                    <div class="bg-white rounded-lg py-14 px-10">
                      <button
                        @click="closeModal"
                        class="absolute bg-transparent text-5xl leading-none right-0 top-0 mt-2 mr-6 text-gray-400 outline-none focus:outline-none"
                      >
                        <div class="absolute inset-0 z-40"></div>
                        <span>×</span>
                      </button>

                      <h5 class="mb-3 font-semibold text-2xl">
                        Refferrer Details
                      </h5>
                      <div class="flex justify-between py-6 border-b-2">
                        <!-- <div class="block ml-2 mb-10">
                          <label for="" class="text-gray-300 ml-2">Name</label>
                          <h6 class="font-bold px-2">Temi</h6>
                        </div> -->
                        <div class="block ml-4">
                          <label for="" class="text-gray-400 text-sm ml-2"
                            >Phone number</label
                          >
                          <h6 class="font-semi-bold px-2">
                            {{ popJob.refferalNumber }}
                          </h6>
                        </div>
                        <div class="block ml-3 mr-4">
                          <label for="" class="text-gray-400 text-sm ml-2"
                            >Email</label
                          >
                          <h6 class="font-semi-bold px-2">
                            {{ popJob.refferalEmail }}
                          </h6>
                        </div>
                      </div>
                      <div class="py-6">
                        <h5 class="mb-3 font-semibold text-2xl">
                          Candidate Details
                        </h5>
                        <div class="flex justify-between mt-6">
                          <div class="block ml-2 mb-10">
                            <label for="" class="text-gray-400 text-sm ml-2"
                              >Name</label
                            >
                            <h6 class="font-semi-bold px-2">
                              {{ popJob.candidateName }}
                            </h6>
                          </div>
                          <div class="block ml-4">
                            <label for="" class="text-gray-400 text-sm px-2"
                              >Phone number</label
                            >
                            <h6 class="font-medium px-2">
                              {{ popJob.candidateNumber }}
                            </h6>
                          </div>
                          <div class="block ml-3 mr-4">
                            <label for="" class="text-gray-400 text-sm px-2"
                              >Email</label
                            >
                            <h6 class="font-medium px-2">
                              {{ popJob.candidateEmail }}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </ClientOnly>
</template>

<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";
definePageMeta({
  layout: "dash",
});
defineProps({
  id: String,
  email: String,
  refferer: String,
  candidate: String,
  data: Array,
});
const route = useRoute();
const isOpen = ref(false);
const popJob = ref({});
const closeModal = () => {
  isOpen.value = false;
};
const populateModal = (id) => {
  const modalJob = job.value.data.find((job) => job.id == id);
  popJob.value = modalJob;
  isOpen.value = true;
};
const { pendingGetOne, job, error } = useRefferedJob(route.params.id);
console.log({ job });
watch([job, error], (newjobs) => {
  job.value = newjobs;
  console.log({ error });
  console.log({ refjob: job });
});
</script>

<style scoped>
.container-body {
  background-color: #fff;
  width: 10rem;
  margin-left: 50px;
}

.card-body-o {
  width: 10rem;
}

p {
  font-size: 0.8em;
  font-weight: 300;
  margin-top: 5px;
  letter-spacing: 1px;
  color: rgb(82, 82, 82);
}

.loader-wrapper {
  text-align: center;
}

.loader {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.loader div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #6916a0;
  border-radius: 50%;
  animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #6916a0 transparent transparent transparent;
}

.loader div:nth-child(1) {
  animation-delay: -0.45s;
}

.loader div:nth-child(2) {
  animation-delay: -0.3s;
}

.loader div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>

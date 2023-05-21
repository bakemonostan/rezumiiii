<template>
  <div class="mt-24">
    <div class="bg-sky-50 h-full">
      <div class="flex justify-between mb-8">
        <a href="/job" class="text-2xl"
          ><Icon name="heroicons:chevron-left" /> Jobs</a
        >
        <div
          v-if="useToast"
          class="flex border-solid border-2 border-green-500 text-green-700 rounded relative mb-4 bg-green-200 w-96 h-14 fade z-50"
        >
          <span class="p-2 mt-2"> </span>
          <span class="mt-4"> Job succesfully Reffered </span>
          <button
            class="absolute bg-transparent text-4xl leading-none right-0 top-0 mt-2 mr-6 outline-none focus:outline-none"
            v-on:click="closeAlert()"
          >
            <span>×</span>
          </button>
        </div>
        <div
          v-if="useToastClose"
          class="flex border-solid border-2 border-green-500 text-green-700 rounded relative mb-4 bg-green-200 w-96 h-14 fade z-50"
        >
          <span class="p-2 mt-2"> </span>
          <span class="mt-4"> Job succesfully Closed </span>
          <button
            class="absolute bg-transparent text-4xl leading-none right-0 top-0 mt-2 mr-6 outline-none focus:outline-none"
            v-on:click=""
          >
            <span>×</span>
          </button>
        </div>
        <div
          v-if="useToastDelete"
          class="flex border-solid border-2 border-green-500 text-green-700 rounded relative mb-4 bg-green-200 w-96 h-14 fade z-50"
        >
          <span class="p-2 mt-2"> </span>
          <span class="mt-4"> Job succesfully Deleted </span>
          <button
            class="absolute bg-transparent text-4xl leading-none right-0 top-0 mt-2 mr-6 outline-none focus:outline-none"
            v-on:click=""
          >
            <span>×</span>
          </button>
        </div>
      </div>

      <div class="flex justify-between px-10">
        <div class="">
          <h1 class="font-extrabold text-4xl mb-1">{{ job.data.tittle }}</h1>
          <h5 class="text-gray-400 px-2 mb-6">{{ job.data.department }}</h5>
        </div>

        <div class="flex">
          <button
            @click="useRefferModal = true"
            class="border border-teal-500 rounded text-bgreen h-14 text-lg py-2 px-6 mr-8"
          >
            Refer
          </button>

          <button
            @click="useDeleteModal = true"
            class="border border-teal-500 rounded text-bgreen h-14 text-lg py-2 px-6 mr-8"
          >
            Discard
          </button>
          <div class="flex flex-row h-14">
            <button
              @click="useCloseModal = true"
              class="bg-bgreen rounded-l-sm text-xl text-white px-8 py-3 hover:bg-teal-600"
            >
              Close
            </button>
            <!-- 
            <div class="relative">
              <button
                @click="toggleVisibility"
                class="relative bg-teal-600 rounded-r text-2xl text-white py-3 px- h-full hover:bg-teal-700 flex"
              >
                <Icon
                  name="heroicons:chevron-down-20-solid"
                  class="self-center my-auto"
                />
              </button>
              <div
                v-if="isVisible"
                @click="toggleVisibility"
                class="fixed inset-0 w-full h-full z-10"
              ></div>
              <div
                v-if="isVisible"
                class="w-0 h-0 border-l-[4px] border-l-transparent border-b-[6px] border-white border-r-[4px] border-r-transparent ml-5"
              ></div>
              <div
                v-if="isVisible"
                class="absolute w-72 bg-white rounded-md shadow-xl z-20 right-0"
              >
                <p class="block px-4 py-2 text-xs text-gray-400">
                  REASON FOR CLOSING THE JOB
                </p>
                <button
                  @click="toggleModal = !toggleModal"
                  class="block text-start w-72 px-4 py-2 text-xs text-gray-400 hover:bg-sky-50"
                >
                  The position has been filled
                </button>
                <button
                  @click="toggleModal = !toggleModal"
                  class="block text-start w-72 px-4 py-2 text-xs text-gray-400 hover:bg-sky-50"
                >
                  Applicants were not qualified
                </button>
                <button
                  @click="toggleModal = !toggleModal"
                  class="block text-start w-72 px-4 py-2 text-xs text-gray-400 hover:bg-sky-50"
                >
                  I didn't get enough applicants for this job
                </button>
                <button
                  @click="toggleModal = !toggleModal"
                  class="block text-start w-72 px-4 py-2 text-xs text-gray-400 hover:bg-sky-50"
                >
                  Surplus applicants for this job
                </button>

                <button
                  @click="toggleVisibility2"
                  class="flex justify-between w-72 px-4 py-2 text-xs text-gray-400 hover:bg-sky-50"
                >
                  <p>Others</p>
                  <i class="fa fa-angle-up text-gray-500 mt-1 mr-8"></i>
                </button>
                <div v-if="isVisible2" class="absolute w-72 h-8 bg-white">
                  <span
                    class="bg-white border-solid border-2 border-gray-300 rounded text-gray-400 ml-10 px-3 py-2 text-xs"
                    ><input
                      class="outline-none"
                      type="text"
                      placeholder="Type Reason"
                    />
                    <button @click="toggleModal = !toggleModal">
                      <i
                        class="fa fa-paper-plane w-8 h-8 text-gray-400 rotate-45"
                      ></i>
                    </button>
                  </span>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
      <div
        v-if="useCloseModal"
        class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
      >
        <div class="relative mx-auto w-auto max-w-2xl">
          <div class="bg-white max-w-2xl h-72 rounded-lg p-20">
            <div class="flex justify-center text-xl">
              <span> Are you sure you want to close this job?</span>
            </div>
            <div class="flex justify-between mt-24">
              <button
                @click="modalOpen()"
                class="border-solid border-2 border-teal-600 rounded p-4 w-56 h-14 text-teal-600 text-sm mr-8"
              >
                Cancel
              </button>
              <button
                v-on:click="closeAlert()"
                class="bg-red-600 rounded text-sm text-white p-4 w-56 h-14"
              >
                Yes, Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="useDeleteModal"
        class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
      >
        <div class="relative mx-auto w-auto max-w-2xl">
          <div class="bg-white max-w-2xl h-72 rounded-lg p-20">
            <div class="flex justify-center text-xl">
              <span> Are you sure you want to Delete this job?</span>
            </div>
            <div class="flex justify-between mt-24">
              <button
                @click="useDeleteModal = false"
                class="border-solid border-2 border-teal-600 rounded p-4 w-56 h-14 text-teal-600 text-sm mr-8"
              >
                Cancel
              </button>
              <button
                v-on:click="sendDelete()"
                class="bg-red-600 rounded text-sm text-white p-4 w-56 h-14"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-200 shadow ml-2 h-0.5 mr-5 mb-4 px-10"></div>
      <div class="flex space-x-7 mb-16 px-10">
        <Icon
          name="heroicons:share-solid"
          class="text-teal-600 text-xl self-center"
        />
        <p class="text-teal-500 mt-2">Share this job |</p>
        <img src="~/assets/socials/facebook.png" class="w-10 h-10" alt="" />
        <img src="~/assets/socials/linkedin.png" class="w-10 h-10" alt="" />
        <img src="~/assets/socials/instagram.png" class="w-10 h-10" alt="" />
        <a
          :href="`https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Flocalhost%3A3000%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Eshare%7Ctwgr%5E&url=http%3A%2F%2Flocalhost%3A3000${route.path}`"
          target="_blank"
        >
          <div>
            <img src="~/assets/socials/twitter.png" />
          </div>
        </a>
      </div>

      <h5 class="text-gray-500 mb-8 px-10">JOB DESCRIPTION</h5>

      <div class="px-10">
        <p class="mb-4 text-sm">{{ job.data.description }}.</p>
      </div>
    </div>
    <ClientOnly>
      <TransitionRoot appear :show="useRefferModal" as="template">
        <Dialog as="div" @close="()=>{useRefferModal = false}" class="relative z-10 w-96">
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
            <div class="flex min-h-full items-center justify-center mt-24 p-4">
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
                  class="w-4/6 ml-44 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                >
                  <div><ReferForm /></div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    </ClientOnly>
  </div>
</template>

<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";
import { useModal, useCloseModal, useDeleteModal, useRefferModal } from "~~/stores/modal";
import { useToast, useToastClose, useToastDelete } from "~~/stores/toast";

useHead({
  script: [{ src: "https://platform.twitter.com/widgets.js", async: "true" }],
});


const toggleModal = ref(false);
const toggleModal2 = ref(false);
const alertOpen = ref(true);
const route = useRoute();

function closeModal(
) {}
function openModal() {
  useCloseModal.value = true;
}
console.log(route.path);

const { job, error } = useJob(route.params.id);
console.log({ job });
watch([job, error], (newjobs) => {
  job.value = newjobs;
  console.log({ error });
  console.log({ job });
});

function modalOpen() {
  useCloseModal.value = false;
}

function closeAlert() {
  const { pendingClose, closed } = useClosejob(route.params.id);
  useModal.value = false;
  alertOpen.value = false;
}
function sendDelete() {
  const { pendingDelete, deleted } = useDeleteJob(route.params.id);
}
definePageMeta({
  layout: "dash",
});
</script>

<style scoped>
.setwidth {
  width: 1070px;
}
.fade {
  animation: fadeout 8s;
}
.twitter-share-button {
  @apply bg-teal-600;
}
@keyframes fadeout {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>

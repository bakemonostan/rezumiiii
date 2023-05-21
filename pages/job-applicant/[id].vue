<template>
  <div class="mt-24">
    <div class="h-full">
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
            class="border hover:border-teal-500 rounded hover:text-bgreen text-white hover:bg-transparent bg-teal-600 h-14 text-lg py-2 px-6 mr-8"
          >
            Refer
          </button>
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

      <div class="bg-gray-200 shadow ml-2 h-0.5 mr-5 mb-4 px-10"></div>

      <h5 class="text-gray-500 mb-8 px-10">JOB DESCRIPTION</h5>

      <div class="px-10">
        <p class="mb-4 text-sm">{{ job.data.description }}.</p>
      </div>
      <div class="px-10 py-6">
        <h3 class="font-bold text-2xl">Apply for this Job</h3>
      </div>
      <div class="flex mx-auto justify-center"><DropZone /></div>

      <form>
        <input
          type="text"
          hidden
          name="jobID"
          id="jobID"
          :value="route.params.id"
        />
      </form>
      <!-- <div class="px-10">
        <p>Resume / CV</p>
        <div
          class="flex flex-col justify-center w-full z-50 py-16 px-6 mt-6 rounded-md border border-dashed border-black"
        >
          <div class="flex flex-col">
            <Icon
              name="heroicons:document-plus"
              class="self-center text-4xl mb-3"
            />
            <div class="text-center">
              <h2 class="font-semibold text-xl">Resume or cover letter</h2>
              <div class="text-gray-400 text-sm">
                <p>Upload or drag and drop</p>
                <p>PDF,DOCX,DOC up to 1MB</p>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <div class="lg:px-10 py-12">
        <FormKit
          type="form"
          id="apply"
          @submit="send"
          @submit-invalid="showErrors"
          :actions="false"
          :incomplete-message="false"
        >
          <ul
            class="py-3 px-4 text-center text-red-500 border border-red-500 bg-red-100"
            v-if="messages.length"
          >
            <li v-for="message in messages">{{ message }}</li>
          </ul>
          <div
            v-if="fetchErr"
            class="py-3 px-4 text-center text-red-500 border border-red-500 bg-red-100"
          >
            {{ fetchErr }}
          </div>
          <div class="flex flex-row space-x-4">
            <FormKit
              type="text"
              label="Firstname"
              name="firstName"
              help=""
              placeholder="Enter first name"
              validation="required|email"
              validation-visibility=""
              outer-class="w-1/2"
              label-class=" mb-3 font-light text-md lg:text-lg"
              inner-class=" border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600"
              input-class="w-full h-10 px-3 py-3 lg:py-8 border-none text-base text-gray-700 placeholder-gray-400"
              help-class="text-xs text-red-500"
            />

            <FormKit
              type="text"
              label="Lastname"
              help=""
              name="lastName"
              placeholder="Enter last name"
              validation="required"
              outer-class=" w-1/2"
              label-class=" mb-3 font-light text-md lg:text-lg"
              inner-class="border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600"
              input-class="w-full h-10 px-3 py-3 lg:py-8 border-none text-base text-gray-700 placeholder-gray-400 shadow-sm"
              help-class="text-xs text-gray-500"
            />
          </div>
          <div class="flex flex-row space-x-4">
            <FormKit
              type="text"
              label="Email Address"
              name="email"
              help=""
              placeholder="Enter Email"
              validation="required|email"
              validation-visibility=""
              outer-class="w-1/2"
              label-class=" mb-3 font-light text-md lg:text-lg"
              inner-class=" border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600"
              input-class="w-full h-10 px-3 py-3 lg:py-8 border-none text-base text-gray-700 placeholder-gray-400"
              help-class="text-xs text-red-500"
            />

            <FormKit
              type="text"
              label="Phone Number"
              help=""
              name="phoneNumber"
              placeholder="08154213421"
              validation="required"
              outer-class=" w-1/2"
              label-class=" mb-3 font-light text-md lg:text-lg"
              inner-class="border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600"
              input-class="w-full h-10 px-3 py-3 lg:py-8 border-none text-base text-gray-700 placeholder-gray-400 shadow-sm"
              help-class="text-xs text-gray-500"
            />
          </div>
          <div class="flex flex-row space-x-4">
            <FormKit
              type="select"
              label="Country"
              name="country_Id"
              :options="countries"
              help=""
              placeholder="Choose country"
              validation="required"
              validation-visibility=""
              outer-class="mb-5 w-full"
              label-class=" mb-3 font-semibold text-gray-700 text-md lg:text-lg"
              inner-class=" border border-2 border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600"
              input-class="w-full px-3 py-3 lg:py-5 border-none text-base text-gray-700 placeholder-gray-400"
              help-class="text-xs text-red-500"
            />
            <FormKit
              type="select"
              label="State"
              name="state_Id"
              :options="states"
              help=""
              placeholder="Choose state"
              validation="required"
              validation-visibility=""
              outer-class="mb-5 w-full"
              label-class=" mb-3 font-semibold text-gray-700 text-md lg:text-lg"
              inner-class=" border border-2 
            border-gray-200 rounded-md mb-1 mt-2 overflow-hidden focus:border-green-600"
              input-class="w-full px-3 py-3 lg:py-5 border-none"
              help-class="text-xs text-red-500"
            />
          </div>

          <div class="flex flex-row justify-end w-full">
            <button
              @click="submitApplication"
              :class="[
                disabled ? 'opacity-70' : '',
                'py-4 px-6 bg-bgreen text-white rounded-md text-xl text-center w-48 mt-10 mb-6',
              ]"
              :disabled="disabled"
            >
              <Icon
                v-if="disabled"
                name="line-md:loading-twotone-loop"
                class="mr-2"
              />
              Apply
            </button>
          </div>
        </FormKit>
      </div>
    </div>
    <ClientOnly>
      <TransitionRoot appear :show="useRefferModal" as="template">
        <Dialog
          as="div"
          @close="
            () => {
              useRefferModal = false;
            }
          "
          class="relative z-10 w-96"
        >
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
                  class="w-2/6 ml-44 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
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
import {
  useModal,
  useCloseModal,
  useDeleteModal,
  useRefferModal,
} from "~~/stores/modal";
import { useToast, useToastClose, useToastDelete } from "~~/stores/toast";
import { getValidationMessages } from "@formkit/validation";
import { submitForm } from "@formkit/core";
import { useUser } from "~~/stores/user";
useHead({
  script: [{ src: "https://platform.twitter.com/widgets.js", async: "true" }],
});
const user = useUser();
onMounted(() => {
  // console.log(route.query);
  // console.log(route.params);
  if (route.query.uref) {
    console.log(route.query);
    console.log(route.params);
    setTimeout(() => {
      const { data, error } = useFetch("/api/JobManager/share-job", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: {
          id: route.params.id,
          name: user.email || "guest",
          sharedBy: route.query.uref,
          socialMedialName: route.query.sm,
          url: route.fullPath,
        },
        params: {},
        baseURL: "https://rezumii-jobmanagement.azurewebsites.net",
        onRequest({ request, options }) {
          console.log({ options });
        },
        onResponse({ request, response, options }) {
          // Process the response data
          console.log({ response });
        },
        onRequestError({ request, options, error }) {
          console.log({ error });
        },
        onResponseError({ request, response, options }) {
          console.log({ response });
        },
      });
      console.log({ error, data });
    }, 3000);
  } else {
    console.log("no data");
  }
});

const messages = ref([]);
const disabled = ref(false);
const fetchErr = ref("");
const submitApplication = () => {
  submitForm("apply");
};
function showErrors(node) {
  messages.value = [];
  const validations = getValidationMessages(node);
  validations.forEach((inputMessages) => {
    messages.value = messages.value.concat(
      inputMessages.map((message) => message.value)
    );
  });
}
const countries = ref([
  { label: "Nigeria", value: "1989883F-4F99-43BF-A754-239BBBFEC00E" },
]);
const states = ref([
  { label: "Lagos", value: "F4461B0F-3473-458F-B6B5-637CAAB0B1C1" },
]);
const toggleModal = ref(false);
const toggleModal2 = ref(false);
const alertOpen = ref(true);
const route = useRoute();
function closeModal() {}
function openModal() {
  useCloseModal.value = true;
}
console.log(route.path);

const { job, error } = useJob(route.params.id);
console.log({ job });
watch([job, error], (newjobs) => {
  job.value = newjobs;
});
console.log({ job: job.data });
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
  layout: "dashapplicant",
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

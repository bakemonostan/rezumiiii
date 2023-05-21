<template>
  <div>
    <div v-if="false"><NoJobs /></div>

    <div class="flex flex-row space-x-3 justify-end mt-4">
      <div
        :class="[
          isFull ? 'border-bgreen text-bgreen' : 'border-gray-300',
          'flex px-2 py-2 rounded-md border-2 text-gray-500  hover:border-bgreen bg-white hover:bg-teal-100',
        ]"
        @click="isFull = true"
      >
        <Icon name="heroicons:list-bullet-solid" class="text-xl self-center" />
      </div>
      <div
        :class="[
          !isFull ? 'border-bgreen text-bgreen' : 'border-gray-300',
          'flex px-2 rounded-md border-2 text-gray-500  hover:border-bgreen bg-white hover:bg-teal-100',
        ]"
        @click="isFull = false"
      >
        <Icon name="heroicons:squares-2x2" class="text-xl self-center" />
      </div>
      <Listbox v-model="selectedSortOption">
        <div class="relative mt-1">
          <ListboxButton>
            <div
              class="flex text-gray-500 flex-row self-center px-3 py-1 border border-gray-300 rounded-sm min-w-[2rem]"
            >
              <p>
                {{ selectedSortOption.name
                }}<Icon name="heroicons:arrows-up-down" class="self-center" />
              </p>
            </div>
          </ListboxButton>

          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              <ListboxOption
                v-slot="{ active, selected }"
                v-for="option in sortOptions"
                :key="option.name"
                :value="option"
                as="template"
              >
                <li
                  :class="[
                    active ? 'bg-teal-100 text-teal-900' : 'text-gray-900',
                    'relative cursor-default select-none py-2 pl-2 pr-2',
                  ]"
                >
                  <span
                    :class="[
                      selected ? 'font-medium' : 'font-normal',
                      'block truncate',
                    ]"
                    >{{ option.name }}</span
                  >
                  <span
                    v-if="selected"
                    class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                  >
                    <CheckIcon class="h-5 w-5" aria-hidden="true" />
                  </span>
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
    </div>

    <Transition
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="loading"
        class="flex justify-center mx-auto h-full w-full py-24"
      >
        <Icon class="text-7xl self-center" name="line-md:loading-alt-loop" />
      </div>
      <div v-else class="py-12">
        <div>
          <div class="grid grid-cols-3 gap-6">
            <JobTileApplicant
              v-for="(job, index) in filteredJoblist"
              @share-open="showShare"
              :key="job.id"
              :title="job.tittle"
              :id="job.id"
              :category="job.department"
              duration=""
              :is-onsite="job.jobType == 2"
              :is-remote="job.jobType == 1"
              :is-hybrid="job.jobType == 3"
            />
          </div>
        </div>
      </div>
    </Transition>

    <ClientOnly>
      <TransitionRoot appear :show="useShareModal" as="template">
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
            <div class="flex items-center justify-end mt-24 p-4">
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
                  class="w-2/6 mx-auto transform overflow-hidden rounded-2xl bg-white p-6 mt-24 text-left align-middle shadow-xl transition-all"
                >
                  <div>
                    <div v-if="isSharing" class="flex mx-auto justify-center">
                      <Icon
                        name="line-md:loading-twotone-loop"
                        class="text-xl"
                      />
                    </div>
                    <div v-else class="flex flex-col px-8 py-8">
                      <h2
                        class="text-center text-2xl font-semibold text-gray-700"
                      >
                        Share this job
                      </h2>
                      <div class="flex flex-row space-x-4 justify-center mt-4">
                        <img
                          src="~/assets/socials/facebook.png"
                          @click="shareTo('facebook')"
                          class="w-10 h-10 cursor-pointer"
                          alt=""
                        />
                        <img
                          src="~/assets/socials/linkedin.png"
                          @click="shareTo('linkedin')"
                          class="w-10 h-10 cursor-pointer"
                          alt=""
                        />

                        <a @click="shareTo('twitter')" target="_blank">
                          <div>
                            <img
                              src="~/assets/socials/twitter.png"
                              class="h-10 w-10 cursor-pointer"
                            />
                          </div>
                        </a>
                      </div>
                      <div class="text-center my-3">or copy link</div>
                      <div class="flex flex-row mx-auto">
                        <div
                          class="px-2 py-2 w-[32rem] h-8 break-normal  bg-gray-100 overflow-hidden"
                        >
                          <!-- {{`${window.location}/${shareUrl}`}} -->
                          https://rezumii.netlify.app{{ shareUrl }}?ref={{ user.profileId }}
                        </div>
                        <div class="self-center"><Icon name="heroicons:document-duplicate" class="cursor-pointer" @click="ctc"/></div>
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
  </div>
</template>
<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

import { useToast } from "vue-toastification";
import { sortBy } from "rambda";
import { useShareModal } from "~~/stores/modal";
import { useUser } from "~~/stores/user";
const user = useUser();
const toast = useToast();
const ctc = ()=>{
  navigator.clipboard.writeText(`https://rezumii.netlify.app${shareUrl.value}?ref=${user.profileId}`);
}
const shareTo = async (name) => {
  switch (name) {
          case "twitter":
            window.open(
              `https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Flocalhost%3A3000%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Eshare%7Ctwgr%5E&url=${window.location.host}${shareUrl.value}?uref=${user.profileId}%26sm=twitter`,
              "_blank"
            );
            break;
          case "facebook":
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u=${window.location.host}/${shareUrl.value}?ref=${user.profileId}%26sm=facebook`,
              "_blank"
            );
            break;
          case "linkedin":
            window.open(
              `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.host}/${shareUrl.value}?ref=${user.profileId}%26sm=linkedin`,
              "_blank"
            );
            break;
          default:
            break;
        }
  // const { data, error } = await useFetch("/api/JobManager/share-job", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: {
  //     id: shareUrl.value.split("/")[2],
  //     name: user.email,
  //     sharedBy: user.profileId,
  //     SocialMedialName: name,
  //     url: `${window.location.host}/${shareUrl.value}`,
  //   },
  //   params: {},
  //   baseURL: "https://rezumii-jobmanagement.azurewebsites.net",
  //   onRequest({ request, options }) {
  //     // Set the request headers
  //     isSharing.value = true;
  //     console.log(options);
  //   },
  //   onRequestError({ request, error }) {
  //     console.log(error.message);
  //     isSharing.value = false;
  //     toast.error("Could not share", {
  //       timeout: 2000,
  //     });
  //   },
  //   onResponse({ request, response, options, error }) {
  //     if (!response._data.status) {
  //       console.log({ error });
  //       console.log({ response });

  //       isSharing.value = false;
  //     } else {
  //       console.log(response);
  //       isSharing.value = false;

  //     }
  //   },
  //   onResponseError({ request, response, options, error }) {
  //     console.log(error.message);
  //     isSharing.value = false;
  //     toast.error("Could not share", {
  //       timeout: 2000,
  //     });
  //   },
  // });
};
const isSharing = ref(false);
const joblist = ref([]);
const filteredJoblist = computed(() => {
  if (!selectedSortOption || selectedSortOption.value.id == 0) {
    loading.value = false;
    return joblist.value;
  } else {
    loading.value = false;
    return joblist.value.filter(
      (job) => job.jobType == selectedSortOption.value.id
    );
  }
});
const pendingJoblist = ref(true);
const isFull = ref(true);
const loading = ref(true);
const shareUrl = ref("");

const sortOptions = [
  { name: "A-Z", id: 0 },
  { name: "Remote", id: 1 },
  { name: "Hybrid", id: 3 },
  { name: "onSite", id: 2 },
];
const filterById = (id) => {
  filteredJoblist.value = joblist.value;
  if (id == 0) {
  } else {
    filteredJoblist.value = joblist.value.filter((job) => job.jobType == id);
  }
};
const selectedSortOption = ref(sortOptions[0]);

watch([joblist, pendingJoblist, loading], ([newJoblist, newPendingJoblist]) => {
  joblist.value = newJoblist;
  loading.value = false;
  pendingJoblist.value = newPendingJoblist;
});
const showShare = (jobId) => {
  console.log({ jobId });

  shareUrl.value = `/job-applicant/${jobId}`;
  useShareModal.value = true;
};
const route = useRoute();
const closeModal = () => {
  useShareModal.value = false;
};

const getData = () => {
  const { pendingGet, jobs } = useJobs();
  console.log({ pendingone: pendingGet });
  watch([jobs, pendingJoblist], ([newjobs, Npending]) => {
    console.log({ pendingtwo: pendingGet });
    jobs.value = newjobs;
    joblist.value = jobs.value.data;
    console.log({ joblist });
    joblist.value = sortBy((x) => x.tittle, joblist.value);
    pendingJoblist.value = false;
    loading.value = false;
  });
};
onBeforeMount(() => {
  getData();
});
</script>

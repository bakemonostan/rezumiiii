<template>
  <div>
    <TabGroup>
      <TabList class="w-full border-b-2 border-gray-300">
        <Tab
          class="ui-selected:border-b-2 ui-selected:border-teal-500 ui-selected:text-gray-700 ui-not-selected:text-gray-400 mr-8"
        >
          <div>ongoing Jobs(50)</div>
        </Tab>
        <Tab
          class="ui-selected:border-b-2 ui-selected:border-teal-500 ui-selected:text-gray-700 ui-not-selected:text-gray-400"
        >
          <div>Closed Jobs</div>
        </Tab>
      </TabList>
      <div v-if="false"><NoJobs /></div>

      <TabPanels v-else>
        <div class="flex flex-row space-x-3 justify-end mt-4">
          <div
            :class="[
              isFull ? 'border-bgreen text-bgreen' : 'border-gray-300',
              'flex px-2 py-2 rounded-md border-2 text-gray-500  hover:border-bgreen bg-white hover:bg-teal-100',
            ]"
            @click="isFull = true"
          >
            <Icon
              name="heroicons:list-bullet-solid"
              class="text-xl self-center"
            />
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
                    }}<Icon
                      name="heroicons:arrows-up-down"
                      class="self-center"
                    />
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

        <TabPanel>
          <Transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div
              v-if="loading"
              class="flex justify-center mx-auto h-full w-full py-24"
            >
              <Icon
                class="text-7xl self-center"
                name="line-md:loading-alt-loop"
              />
            </div>
            <div v-else class="py-12">
              <div v-if="isFull">
                <JobTileFull
                  v-for="(job, index) in filteredJoblist"
                  @edit-open="showEdit"
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
              <div v-else>
                <div class="grid grid-cols-3 gap-6">
                  <JobTileSquare
                    v-for="(job, index) in filteredJoblist"
                    @edit-open="showEdit"
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
        </TabPanel>

        <TabPanel>
          <div class="py-12">
            <ClosedTileFull
              v-for="(closed, index) in joblistClosed"
              :title="closed.tittle"
              :id="closed.id"
              :category="closed.department"
              duration=""
              :is-onsite="closed.jobType == 2"
              :is-remote="closed.jobType == 1"
              :is-hybrid="closed.jobType == 3"
            />
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
    <ClientOnly>
      <TransitionRoot appear :show="useEditModal" as="template">
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
            <div class="flex min-h-full items-center justify-end mt-24 p-4">
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
                  class="w-5/6 mr-16 transform overflow-hidden rounded-2xl bg-white p-6 mt-36 text-left align-middle shadow-xl transition-all"
                >
                  <div><EditJob /></div>
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
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
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

import { useModal } from "~~/stores/modal";
import { sortBy } from "rambda";
import { editData } from "~~/stores/editData";
import { useEditModal } from "~~/stores/modal";
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
const joblistClosed = ref([]);
const pendingJoblist = ref(true);
const isFull = ref(true);
const loading = ref(true);
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
// watch(selectedSortOption, (cSelectedSortOption) => {
//   if (selectedSortOption.value.id == 0) {
//   } else {
//     joblist.value = joblist.value.filter(
//       (job) => job.jobType == selectedSortOption.value.id
//     );
//   }
// });
watch(
  [joblist, joblistClosed, pendingJoblist, loading],
  ([newJoblist, newJoblistClosed, newPendingJoblist]) => {
    joblist.value = newJoblist;
    joblistClosed.value = newJoblistClosed;
    loading.value = false;
    pendingJoblist.value = newPendingJoblist;
  }
);
const showEdit = (jobId) => {
  console.log({ jobId });

  const { pendingGetOne, job } = useJob(jobId);
  watch([job, editData], ([newJob, edited]) => {
    job.value = newJob;
    editData.value = job.value.data;
    useEditModal.value = true;
  });
};
const route = useRoute();
const closeModal = () => {
  useEditModal.value = false;
};

const getData = () => {
  const { pendingGet, jobs, pendingClosed, closed } = useJobs();
  console.log({ pendingone: pendingGet });
  watch([jobs, closed, pendingJoblist], ([newjobs, newclosed]) => {
    console.log({ pendingtwo: pendingGet });
    jobs.value = newjobs;
    joblist.value = jobs.value.data;
    console.log({ joblist });
    closed.value = newclosed;
    joblistClosed.value = closed.value.data;
    console.log({ pendingg: pendingGet });
    joblist.value = sortBy((x) => x.tittle, joblist.value);
    pendingJoblist.value = false;
    loading.value = false;
  });
};
onBeforeMount(() => {
  getData();
});
</script>

<template>
  <div class="">
    <div class="bg-sky-50 h-full">
      <div class="flex justify-between mb-8">
        <a href="/jobs" class="text-2xl -space-x-3"
          ><Icon name="heroicons:chevron-left" /> Jobs</a
        >
        <div
          v-if="!alertOpen"
          class="flex border-solid border-2 border-green-500 text-green-700 rounded relative mb-4 bg-green-200 w-96 h-14 fade z-50"
        >
          <span class="p-2 mt-2">
            <img src="../assets/TickSquare.png" alt="" />
          </span>
          <span class="mt-4"> Job succesfully closed </span>
          <button
            class="absolute bg-transparent text-4xl leading-none right-0 top-0 mt-2 mr-6 outline-none focus:outline-none"
            v-on:click="closeAlert()"
          >
            <span>×</span>
          </button>
        </div>
      </div>

      <div class="flex justify-between px-10">
        <div class="">
          <h1 class="font-extrabold text-4xl mb-1">Product Design</h1>
          <h5 class="text-gray-300 px-2 mb-6">Design | 1 Month</h5>
        </div>

        <div class="flex">
          <button
            @click="toggleModal2 = !toggleModal2"
            class="border border-teal-500 rounded text-bgreen h-14 text-lg py-2 px-6 mr-8"
          >
            Refer
          </button>
          <a href="/ongoingjobs">
            <button
              class="border border-teal-500 rounded text-bgreen h-14 text-lg py-2 px-6 mr-8"
            >
              Discard
            </button></a
          >
          <div class="flex flex-row h-14">
            <button
              @click="toggleVisibility"
              class="bg-bgreen rounded-l-sm text-xl text-white px-8 py-3 hover:bg-teal-600"
            >
              Close
            </button>

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
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="toggleModal"
        class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
      >
        <div class="relative mx-auto w-auto max-w-2xl">
          <div class="bg-white max-w-2xl h-72 rounded-lg p-20">
            <div class="flex justify-center text-xl">
              <span> Are you sure you want to close this job?</span>
            </div>
            <div class="flex justify-between mt-24">
              <a href="/view"
                ><button
                  class="border-solid border-2 border-teal-600 rounded p-4 w-56 h-14 text-teal-600 text-sm mr-8"
                >
                  Cancel
                </button></a
              >
              <a href="/ongoingjobs"
                ><button
                  v-on:click="closeAlert()"
                  class="bg-red-600 rounded text-sm text-white p-4 w-56 h-14"
                >
                  Yes, Close
                </button></a
              >
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="toggleModal2"
        class="absolute inset-0 z-40 opacity-25 bg-black"
      ></div>

      <div
        v-if="toggleModal2"
        class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
      >
        <div class="relative mx-auto max-w-2xl setwidth">
          <div class="bg-white max-w-3xl rounded-lg py-10">
            <a href="/view"
              ><button
                class="absolute bg-transparent text-5xl leading-none right-0 top-0 mt-2 mr-6 text-gray-400 outline-none focus:outline-none"
              >
                <span>×</span>
              </button>
            </a>
            <div class="flex justify-center text-xl mt-5 mb-2">
              <span> Refer a friend</span>
            </div>
            <p class="text-gray-400 text-xs text-center mb-8">
              Fill in the details below to refer a friend for this job opening
            </p>

            <h5 class="mb-3 text-center font-bold">Refferal</h5>
            <div class="flex">
              <div class="block ml-2">
                <label for="" class="ml-2">Name</label>
                <input
                  class="border-solid border-2 border-gray-300 rounded p-4 w-52 h-10 text-gray-400 text-xs ml-2 mb-6"
                  type="text"
                  placeholder="Enter name"
                />
              </div>
              <div class="block ml-2">
                <label for="">Phone number</label>
                <input
                  class="border-solid border-2 border-gray-300 rounded p-4 w-52 h-10 text-gray-400 text-xs mb-6"
                  type="text"
                  placeholder="Enter phone number"
                />
              </div>
              <div class="block ml-2">
                <label for="">Email</label>
                <input
                  class="border-solid border-2 border-gray-300 rounded p-4 w-52 h-10 text-gray-400 text-xs mr-6 mb-9"
                  type="text"
                  placeholder="yourmail@example.com"
                />
              </div>
            </div>

            <h5 class="mb-3 text-center font-bold">Candidate</h5>
            <div class="flex">
              <div class="block ml-2">
                <label for="" class="ml-2">Name</label>
                <input
                  class="border-solid border-2 border-gray-300 rounded p-4 w-52 h-10 text-gray-400 text-xs ml-2 mb-6"
                  type="text"
                  placeholder="Enter name"
                />
              </div>
              <div class="block ml-2">
                <label for="">Phone number</label>
                <input
                  class="border-solid border-2 border-gray-300 rounded p-4 w-52 h-10 text-gray-400 text-xs mb-6"
                  type="text"
                  placeholder="Enter phone number"
                />
              </div>
              <div class="block ml-2">
                <label for="">Email</label>
                <input
                  class="border-solid border-2 border-gray-300 rounded p-4 w-52 h-10 text-gray-400 text-xs mr-6 mb-9"
                  type="text"
                  placeholder="yourmail@example.com"
                />
              </div>
            </div>

            <div class="flex justify-center">
              <a href=""
                ><button
                  class="bg-teal-600 rounded w-64 h-9 text-white text-sm"
                >
                  Submit
                </button></a
              >
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="toggleModal2"
        class="absolute inset-0 z-40 opacity-25 bg-black"
      ></div>

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
        <img src="~/assets/socials/twitter.png" class="w-10 h-10" alt="" />
      </div>

      <h5 class="text-gray-500 mb-8 px-10">JOB DESCRIPTION</h5>

      <div class="px-10">
        <p class="mb-4 text-sm">
          Epic Games is on the lookout for smart, dynamic interns to join our
          dev teams. When you join Epic you'll join a team that's pushing the
          limits of gaming and interactive. From Unreal Engine and Fortnite, to
          TwinMotion and the Epic Games Store, you'll contribute to the
          unrelenting focus on innovation, quality and community that defines
          us.
        </p>
        <p class="mb-4 text-sm">
          Epic Games Online Dev Team is looking for a smart, creative QA
          Engineering Intern to join them for summer 2023. Our Interns are given
          challenging projects over the work term, and are provided with a
          meaningful experience with high expectations for performance. If you
          want to build something Epic, this is the opportunity for you!
        </p>
        <p class="mb-4 text-sm">
          The Epic Online Services QA team is responsible for the automation and
          testing of the EOS SDK which is a complex software development kit
          designed to work across multiple platforms and integrate games with
          the Epic Online Services ecosystem. The team works closely with
          developers to ensure that we are able to deliver a continuous update
          and user experience for both our development teams and external
          developers.
        </p>
        <p class="mb-4 text-sm">
          In this role, you will <br />Identify and find elegant and novel
          solutions for assisting in testing via automation, scripting, and
          overall test health. Working with developers and QA to come up with
          ideas along with working on those ideas to help with the overall
          software development cycle.
        </p>
        <p class="mb-4 text-sm">
          Working with Senior SDETS and QE to understand the technical
          complexities and test debt around the EOS product line and finding
          ways to assist in the day to day work load for manual testers.
        </p>
        <p class="text-sm">
          Work with a variety or programming languages such as C++, C#,
          Javascript, and Python to assist in tool and automation Work with
          existing build systems to extend automation, working with both
          internal solutions and team city.
        </p>
        <p class="text-sm mb-4">
          Develop and design a product to be used within Epics QA department and
          beyond for internal testing and productivity enhancements.
        </p>
        <P class="text-sm"> What we're looking for</P>
        <p class="text-sm">Evidence of C++, C# projects required</p>
        <p class="text-sm">
          Understanding of QA process, test methodologies, including automation,
          functional, qualitative, and performance against consistently
          iterative development
        </p>
        <p class="text-sm">
          Experience with Unreal Engine is a plus Passionate about Epic Games
          and specifically Fortnite This is an internship for 2023 with a
          flexible start date. Recruitment will be ongoing until teams find an
          ideal match.
        </p>
        <p class="text-sm">
          For more information about Epic's Early Career Program, visit
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewJob",

  data() {
    return {
      toggleModal: false,
      toggleModal2: false,
      isVisible: false,
      isVisible2: false,
      alertOpen: true,
    };
  },

  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    toggleVisibility2() {
      this.isVisible2 = !this.isVisible2;
    },
    closeAlert: function () {
      this.alertOpen = false;
    },
  },
};
</script>

<style scoped>
.setwidth {
  width: 1070px;
}
.fade {
  animation: fadeout 8s;
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

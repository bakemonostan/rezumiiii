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
      v-for="(item, index) in data"
      class="flex justify-between p-3 mb-2 border-b-2"
    >
      <li class="ml-3">{{ item }}</li>
      <li class="ml-6">{{}}</li>
      <li>Azodo@gmail.com</li>
      <li>
        <button
          @click="toggleModal2 = !toggleModal2"
          class="bg-teal-500 text-white font-bold py-2 px-4 rounded"
        >
          View Details
        </button>
      </li>
    </ul>

    <ul class="flex justify-between p-3 mb-2 border-b-2">
      <li class="ml-3">Funke</li>
      <li class="ml-5">Toheeb</li>
      <li>Toheeb@gmail.com</li>
      <li>
        <button class="bg-teal-500 text-white font-bold py-2 px-4 rounded">
          View Details
        </button>
      </li>
    </ul>

    <ul class="flex justify-between p-3 mb-2 border-b-2">
      <li class="ml-3">Afolayan</li>
      <li>Ifeanyi</li>
      <li>Ifeanyi@gmail.com</li>
      <li>
        <button class="bg-teal-500 text-white font-bold py-2 px-4 rounded">
          View Details
        </button>
      </li>
    </ul>

    <ul class="flex justify-between p-3 mb-2 border-b-2">
      <li class="ml-3">Jerry</li>
      <li class="ml-6">Daniel</li>
      <li>Daniel@gmail.com</li>
      <li>
        <button class="bg-teal-500 text-white font-bold py-2 px-4 rounded">
          View Details
        </button>
      </li>
    </ul>
    <ul class="flex justify-between p-3 mb-2 border-b-2">
      <li class="ml-3">Temi</li>
      <li class="ml-6">Azodo</li>
      <li>Azodo@gmail.com</li>
      <li>
        <button class="bg-teal-500 text-white font-bold py-2 px-4 rounded">
          View Details
        </button>
      </li>
    </ul>
    <ul class="flex justify-between p-3 mb-2 border-b-2">
      <li class="ml-3">Temi</li>
      <li class="ml-6">Azodo</li>
      <li>Azodo@gmail.com</li>
      <li>
        <button class="bg-teal-500 text-white font-bold py-2 px-4 rounded">
          View Details
        </button>
      </li>
    </ul>
  </div>

  <!-- modal -->

  <div
    v-if="toggleModal2"
    class="absolute inset-0 z-40 opacity-25 bg-black"
  ></div>

  <div
    v-if="toggleModal2"
    class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
  >
    <div class="relative mx-auto max-w-2xl setwidth">
      <div class="bg-white max-w-3xl rounded-lg py-14 px-10">
        <a href=""
          ><button
            class="absolute bg-transparent text-5xl leading-none right-0 top-0 mt-2 mr-6 text-gray-400 outline-none focus:outline-none"
          >
            <span>×</span>
          </button>
        </a>

        <h5 class="mb-3 font-bold">Refferrer Details</h5>
        <div class="flex justify-between border-b-2">
          <div class="block ml-2 mb-10">
            <label for="" class="text-gray-300 ml-2">Name</label>
            <h6 class="font-bold px-2">Temi</h6>
          </div>
          <div class="block ml-4">
            <label for="" class="text-gray-300 text-xs px-2"
              >Phone number</label
            >
            <h6 class="font-bold px-2">+23481234098</h6>
          </div>
          <div class="block ml-3 mr-4">
            <label for="" class="text-gray-300 text-xs px-2">Email</label>
            <h6 class="font-bold px-2">temiaraba@gmail.com</h6>
          </div>
        </div>

        <h5 class="mb-3 font-bold mt-10">Candidate Details</h5>
        <div class="flex justify-between">
          <div class="block ml-2 mb-10">
            <label for="" class="text-gray-300 ml-2">Name</label>
            <h6 class="font-bold px-2">Azodo</h6>
          </div>
          <div class="block ml-4">
            <label for="" class="text-gray-300 text-xs px-2"
              >Phone number</label
            >
            <h6 class="font-bold px-2">+23481234098</h6>
          </div>
          <div class="block ml-3 mr-4">
            <label for="" class="text-gray-300 text-xs px-2">Email</label>
            <h6 class="font-bold px-2">Azodo@gmail.com</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="toggleModal2"
    class="absolute inset-0 z-40 opacity-25 bg-black"
  ></div>
</template>

<script setup>
defineProps({
  id: String,
  email: String,
  refferer: String,
  candidate: String,
  data:Array
});
</script>

<style scoped>
.container-body {
  background-color: #fff;
  width: 10rem;
  margin-left: 50px;
}

.setwidth {
  width: 1070px;
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

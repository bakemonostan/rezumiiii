<template>
  <header class="bg-deepgreen relative lg:min-h-auto py-12 pb-56 lg:py-24" id="home">
    <div class="flex flex-wrap">
      <div class="absolute overflow-hidden left-0 top-0 z-30">
        <svg  class="h-[400px] w-[400px] lg:h-[400] lg:w-[400]">
          <circle
            cx="50"
            cy="100"
            r="300"
            stroke=""
            stroke-width="0"
            fill="#028d8d"
            class="bg-green-700 text-green-500 "
          />
          Sorry, your browser does not support inline SVG.
        </svg>
      </div>
      <div class="container px-3 pt-80 lg:pt-48 lg:py-36 mx-auto z-40">
        <div class="relative items-center lg:flex z-40 flex-wrap">
          <div class="w-full lg:mt-12 lg:w-1/3 align-middle self-center">
            <div class="text-center lg:text-left lg:max-w-lg">
              <h1
                class="text-xl font-extrabold text-green-50 lg:text-[40px] z-50 mt-12 mb-8"
              >
                Get Started Today
              </h1>

              <p
                class="mt-4 text-xs lg:text-[25px] text-green-100 z-50 mb-2 lg:mb-6 lg:tracking-wide lg:leading-9"
              >
                Make the world more equitable by<br />
                creating jobs that celebrate diversity.
              </p>

              <button
                class="w-1/4 lg:px-24 py-4 mt-6 font-semibold text-sm text-white transition-colors duration-300 transform bg-bgreen hover:bg-teal-700 rounded-md lg:w-auto focus:outline-none focus:bg-teal-500"
              >
              <NuxtLink to="/signup">Get Started</NuxtLink>
              </button>
            </div>
          </div>

          <div
            class="flex flex-wrap items-center absolute px-0 justify-center w-full lg:-mt-6 lg:w-7/12 -top-[17rem]  right-[0rem] lg:-top-[40px]  lg:-right-[12.3rem]"
          >
            <div class="bg-slate-100 rounded-lg px-4 py-4">
              <img
                class="lg:w-full h-[12rem] lg:h-[38rem] lg:max-w-5xl"
                src="~/assets/Dashboard.png"
                alt="Catalogue-pana.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>


</script>

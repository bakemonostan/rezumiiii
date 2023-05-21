<template>
  <div
    class="flex flex-col w-full justify-center justify-items-center mt-20"
    id="testimonial"
  >
    <div class="flex-col justify-center justify-self-center">
      <h2 class="text-center text-gray-700 font-extrabold text-3xl mb-10">
        Testimonial and Trusted By
      </h2>
    </div>
  </div>
  <div class="flex relative justify-center px-4 lg:px-20 py-24 mx-auto z-0">
    <div class="absolute swiper-background w-full top-0 h-full"></div>
    <div class="absolute bottom-5 left-16"><img src="~/assets/dots.png" alt=""></div>
    <div class="absolute top-5 rights-16"><img src="~/assets/dots.png" alt=""></div>
    <swiper
      :slides-per-view="1"
      :space-between="50"
      :modules="modules"
      navigation
      :pagination="{
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
      }"
      :breakpoints="{ 500:{ slidesPerView:2 } }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="z-20"
    >
      <swiper-slide>
        <div class="flex flex-wrap justify-center">
          <div class="p-4 w-full">
            <div class="h-full p-8 rounded">
              <a class="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="https://dummyimage.com/150x150"
                  class="w-20 h-20 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span class="flex-grow flex flex-col pl-4">
                  <span class="title-font font-semibold text-2xl text-gray-700"
                    >Nnamdi Azodo</span
                  >
                  <div class="inline-flex spacing-x-2 text-gray-100 text-2xl">
                    <icon name="openmoji:star" /><icon
                      name="openmoji:star"
                    /><icon name="openmoji:star" /><icon
                      name="openmoji:star"
                    /><icon name="openmoji:star" />
                  </div>
                </span>
              </a>

              <p
                class="leading-relaxed mb-6 text-gray-700 font-semibold text-2xl"
              >
                Synth chartreuse iPhone lomo cray raw denim brunch everyday
                carry neutra before they sold out fixie 90's microdosing. Tacos
                pinterest fanny pack venmo, post-ironic heirloom try-hard pabst
                authentic iceland.
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex flex-wrap justify-center">
          <div class="p-4 w-full">
            <div class="h-full p-8 rounded">
              <a class="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="https://dummyimage.com/150x150"
                  class="w-20 h-20 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span class="flex-grow flex flex-col pl-4">
                  <span class="title-font font-semibold text-2xl text-gray-700"
                    >Nnamdi Azodo</span
                  >
                  <div class="inline-flex spacing-x-2 text-gray-100 text-2xl">
                    <icon name="openmoji:star" /><icon
                      name="openmoji:star"
                    /><icon name="openmoji:star" /><icon
                      name="openmoji:star"
                    /><icon name="openmoji:star" />
                  </div>
                </span>
              </a>

              <p
                class="leading-relaxed mb-6 text-gray-700 font-semibold text-2xl"
              >
                Synth chartreuse iPhone lomo cray raw denim brunch everyday
                carry neutra before they sold out fixie 90's microdosing. Tacos
                pinterest fanny pack venmo, post-ironic heirloom try-hard pabst
                authentic iceland.
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex flex-wrap justify-center">
          <div class="p-4 w-full">
            <div class="h-full p-8 rounded">
              <a class="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="https://dummyimage.com/150x150"
                  class="w-20 h-20 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span class="flex-grow flex flex-col pl-4">
                  <span class="title-font font-semibold text-2xl text-gray-700"
                    >Nnamdi Azodo</span
                  >
                  <div class="inline-flex spacing-x-2 text-gray-100 text-2xl">
                    <icon name="openmoji:star" /><icon
                      name="openmoji:star"
                    /><icon name="openmoji:star" /><icon
                      name="openmoji:star"
                    /><icon name="openmoji:star" />
                  </div>
                </span>
              </a>

              <p
                class="leading-relaxed mb-6 text-gray-700 font-semibold text-2xl"
              >
                Synth chartreuse iPhone lomo cray raw denim brunch everyday
                carry neutra before they sold out fixie 90's microdosing. Tacos
                pinterest fanny pack venmo, post-ironic heirloom try-hard pabst
                authentic iceland.
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};

const modules = [Navigation, Pagination, Scrollbar, A11y];
</script>

<style>
:root {
  --swiper-navigation-color: green;
  --swiper-navigation-size: 24px;
}
.swiper-pagination {
  margin-top: 60px;
  position: absolute;

  bottom: -50px;
}
.swiper-background {
  background: linear-gradient(
    181.63deg,
    rgba(239, 255, 255, 0) 38.9%,
    rgba(232, 253, 253, 0.474578) 48.96%,
    rgba(229, 252, 252, 0.0609) 60.5%,
    rgba(1, 75, 75, 0.1305) 98.7%
  );
  background-blend-mode: multiply;
  opacity: 0.6;
}
.swiper-pagination-bullet {
  @apply h-4 w-4 rounded-full bg-gray-200;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  color: #000;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  color: #fff;
  @apply bg-black;
}
</style>

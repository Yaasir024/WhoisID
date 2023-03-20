<script setup>
import { ref, computed } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue";

import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

// Import Swiper styles
import "swiper/css";

// GET SWIPER
let swipfunc = null;
const onSwiper = (swiper) => {
  swipfunc = swiper;
};
const onSlideChange = () => {};

const nextSlide = () => {
  if (swipfunc.activeIndex < swipfunc.slides.length - 1) {
    swipfunc.slideNext();
  }
};
const prevSlide = () => {
  if (swipfunc.activeIndex > 0) {
    swipfunc.slidePrev();
  }
};
</script>

<template>
  <section
    class="bg-white pl-[112px] pt-[48px] pb-[112px] flex xl:items-center overflow-hidden flex-col xl:flex-row"
  >
    <div class="max-w-[640px] pr-[152px] shrink-0">
      <h1 class="text-id-dark-1 text-[38px] leading-[53px] tracking-[-0.02em]">
        Streamline your KYC/AML compliance with accurate
        <span class="text-id-yellow">Who and Where</span> verification
      </h1>
      <h3 class="text-[20px] leading-[30px] mt-[16px]">
        Protect your business from fraud and comply with regulations using
        accurate identity and location data from your customers.
      </h3>
    </div>
    <div class="">
      <div class="xl:w-[670px]">
        <Splide
          :options="{ rewind: true, perPage: 2.2, arrows: false }"
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <div class="">
              <div
                class="card w-[294px] h-[370px] p-[40px] bg-id-gray-4 border border-[#DADFE8] rounded-xl flex flex-col justify-between"
              >
                <div class="w-full text-center">
                  <img
                    src="/images/Home/slider-facial-auth.svg"
                    alt=""
                    class="h-[140px]"
                  />
                </div>
                <div class="">
                  <span class="text-[14px] leading-[30px] font-medium"
                    >BIOMETRICS</span
                  >
                  <h2 class="text-[28px] leading-[42px] font-semibold mt-[8px]">
                    Facial Authentication
                  </h2>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="">
              <div
                class="card w-[294px] h-[370px] p-[40px] bg-id-gray-4 border border-[#DADFE8] rounded-xl flex flex-col justify-between"
              >
                <div class="w-full text-center">
                  <img
                    src="/images/Home/slider-facial-auth.svg"
                    alt=""
                    class="h-[140px]"
                  />
                </div>
                <div class="">
                  <span class="text-[14px] leading-[30px] font-medium"
                    >BIOMETRICS</span
                  >
                  <h2 class="text-[28px] leading-[42px] font-semibold mt-[8px]">
                    Facial Authentication
                  </h2>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="">
              <div
                class="card w-[294px] h-[370px] p-[40px] bg-id-gray-4 border border-[#DADFE8] rounded-xl flex flex-col justify-between"
              >
                <div class="w-full text-center">
                  <img
                    src="/images/Home/slider-facial-auth.svg"
                    alt=""
                    class="h-[140px]"
                  />
                </div>
                <div class="">
                  <span class="text-[14px] leading-[30px] font-medium"
                    >BIOMETRICS</span
                  >
                  <h2 class="text-[28px] leading-[42px] font-semibold mt-[8px]">
                    Facial Authentication
                  </h2>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="px-[40px]">
              <div
                class="card w-[294px] h-[370px] p-[40px] bg-id-gray-4 border border-[#DADFE8] rounded-xl flex flex-col justify-between"
              >
                <div class="w-full text-center">
                  <img
                    src="/images/Home/slider-facial-auth.svg"
                    alt=""
                    class="h-[140px]"
                  />
                </div>
                <div class="">
                  <span class="text-[14px] leading-[30px] font-medium"
                    >BIOMETRICS</span
                  >
                  <h2 class="text-[28px] leading-[42px] font-semibold mt-[8px]">
                    Facial Authentication
                  </h2>
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
        <div class="splide__arrows">
          <button class="splide__arrow splide__arrow--prev">Prev</button>
          <button class="splide__arrow splide__arrow--next">Next</button>
        </div>
      </div>
      <div class="overflow-hidden w-[670px]" v-if="false">
        <!-- 
          :space-between="57" -->
        <!-- :breakpoints="{
            
            // when window width is >= 640px
            1120: {
              slidesPerView: 1.4,
              spaceBetween: 57,
            },
          }"
          :autoWidth="true" -->
        <swiper
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :breakpoints="{
            // 480: {
            //   slidesPerView: 4,
            //   spaceBetween: 30,
            // },
            680: {
              slidesPerView: 2.2,
              spaceBetween: 24,
            },
            // when window width is >= 640px
            1120: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
          }"
          :autoWidth="true"
        >
          <swiper-slide>
            <div class="px-[40px]">
              <div
                class="card w-[294px] h-[370px] p-[40px] bg-id-gray-4 border border-[#DADFE8] rounded-xl flex flex-col justify-between"
              >
                <div class="w-full text-center">
                  <img
                    src="/images/Home/slider-facial-auth.svg"
                    alt=""
                    class="h-[140px]"
                  />
                </div>
                <div class="">
                  <span class="text-[14px] leading-[30px] font-medium"
                    >BIOMETRICS</span
                  >
                  <h2 class="text-[28px] leading-[42px] font-semibold mt-[8px]">
                    Facial Authentication
                  </h2>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="px-[40px]">
              <div
                class="card w-[294px] h-[370px] p-[40px] bg-id-gray-4 border border-[#DADFE8] rounded-xl flex flex-col justify-between"
              >
                <div class="w-full text-center">
                  <img
                    src="/images/Home/slider-facial-auth.svg"
                    alt=""
                    class="h-[140px]"
                  />
                </div>
                <div class="">
                  <span class="text-[14px] leading-[30px] font-medium"
                    >BIOMETRICS</span
                  >
                  <h2 class="text-[28px] leading-[42px] font-semibold mt-[8px]">
                    Facial Authentication
                  </h2>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="">
              <div
                class="card w-[294px] h-[370px] p-[40px] bg-id-gray-4 border border-[#DADFE8] rounded-xl flex flex-col justify-between"
              >
                <div class="w-full text-center">
                  <img
                    src="/images/Home/slider-facial-auth.svg"
                    alt=""
                    class="h-[140px]"
                  />
                </div>
                <div class="">
                  <span class="text-[14px] leading-[30px] font-medium"
                    >BIOMETRICS</span
                  >
                  <h2 class="text-[28px] leading-[42px] font-semibold mt-[8px]">
                    Facial Authentication
                  </h2>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<!-- :breakpoints="{
            480: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            680: {
              slidesPerView: 1,
              spaceBetween: 60,
            },
            // when window width is >= 640px
            1120: {
              slidesPerView: 1.4,
              spaceBetween: 57,
            },
          }" -->

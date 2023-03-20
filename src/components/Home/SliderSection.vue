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
  <section class="bg-white">
    <div
      class="pl-[40px] lg:pl-[80px] xl:pl-[112px] pt-[48px] pb-[112px] flex xl:items-center overflow-hidden flex-col xl:flex-row"
    >
      <div class="lg:max-w-[640px] pr-[35px] sm:pr-[80px] 2xl:pr-[152px] order-2 xl:order-1">
        <h1
          class="text-id-dark-1 text-[28px] sm:text-[38px] leading-[36px] sm:leading-[53px] tracking-[-0.02em] font-millik"
        >
          Streamline your KYC/AML compliance with accurate
          <span class="text-id-yellow">Who and Where</span> verification
        </h1>
        <h3 class="text-[20px] leading-[30px] mt-[16px]">
          Protect your business from fraud and comply with regulations using
          accurate identity and location data from your customers.
        </h3>
      </div>
      <div class="ml-auto order-1 xl:order-2 mb-10 xl:mb-0">
        <div
          class="max-w-[610px] sm:max-w-[620px] md:max-w-[700px] w-full mx-auto sm:mx-0"
        >
          <swiper
            :space-between="50"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :breakpoints="{
              480: {
                slidesPerView: 1,
                // spaceBetween: 10,
              },
              600: {
                slidesPerView: 1.8,
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 2,
              },
              // when window width is >= 640px
              1120: {
                slidesPerView: 2.4,
              },
            }"
            :autoWidth="true"
          >
            <swiper-slide class="">
              <div class="px-[10px]">
                <div
                  class="card w-[270px] h-[370px] p-[40px] bg-id-gray-4 border border-[#DADFE8] rounded-xl flex flex-col justify-between"
                >
                  <div class="w-full text-center">
                    <img
                      src="@/assets/images/Home/slider-facial-auth.svg"
                      alt=""
                      class="h-[140px]"
                    />
                  </div>
                  <div class="">
                    <span class="text-[14px] leading-[30px] font-medium font-commons"
                      >BIOMETRICS</span
                    >
                    <h2
                      class="text-[28px] leading-[42px] font-semibold mt-[8px]"
                    >
                      Facial Authentication
                    </h2>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="pl-[75px] xs:pl-[40px] px-[10px]">
                <div
                  class="card w-[270px] h-[370px] p-[40px] bg-id-gray-4 border border-[#DADFE8] rounded-xl flex flex-col justify-between"
                >
                  <div class="w-full text-center">
                    <img
                      src="@/assets/images/Home/slider-address.svg"
                      alt=""
                      class="h-[140px]"
                    />
                  </div>
                  <div class="">
                    <span class="text-[14px] leading-[30px] font-medium font-commons"
                      >GEOLOCATION</span
                    >
                    <h2
                      class="text-[28px] leading-[42px] font-semibold mt-[8px]"
                    >
                      Address Verification
                    </h2>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="pl-[75px] xs:pl-[40px] pr-[40px]">
                <div
                  class="card w-[270px] h-[370px] p-[40px] bg-id-gray-4 border border-[#DADFE8] rounded-xl flex flex-col justify-between"
                >
                  <div class="w-full text-center">
                    <img
                      src="@/assets/images/Home/slider-proof.svg"
                      alt=""
                      class="h-[140px]"
                    />
                  </div>
                  <div class="">
                    <span class="text-[14px] leading-[30px] font-medium font-commons"
                      >AUTHENTICATION</span
                    >
                    <h2
                      class="text-[28px] leading-[42px] font-semibold mt-[8px]"
                    >
                      Proof of Address
                    </h2>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>

          <div class="mt-[24px]">
            <div class="flex items-center">
              <button
                class="h-[54px] w-[54px] rounded-full flex items-center justify-center bg-[#F9FAFB] border border-black mr-[32px]"
                @click="prevSlide()"
              >
                <img src="@/assets/icons/arrow-left.svg" alt="" />
              </button>
              <button
                class="h-[54px] w-[54px] rounded-full flex items-center justify-center bg-[#F9FAFB] border border-black mr-[32px]"
                @click="nextSlide()"
              >
                <img src="@/assets/icons/arrow-right.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

</script>

<template>
  <section class="bg-gray-100 border-b">
    <div
      class="px-[40px] lg:px-[80px] xl:px-[112px] 2xl:pr-0 pt-[48px] pb-[112px] flex xl:items-center overflow-hidden flex-col 2xl:flex-row"
    >
      <div
        class="xl:max-w-[640px] pr-[35px] sm:pr-[80px] 2xl:pr-[100px] order-2 2xl:order-1"
      >
        <h1
          class="text-id-dark-1 text-[24px] xs:text-[28px] sm:text-[38px] leading-[32px] xs:leading-[36px] sm:leading-[53px] tracking-[-0.02em] font-millik"
        >
          Streamline your KYC/AML compliance with accurate
          <span class="text-id-yellow">Who and Where</span> verification
        </h1>
        <h3 class="text-[18px] sm:text-[20px] leading-[26px] sm:leading-[30px] mt-[16px]">
          Protect your business from fraud and comply with regulations using
          accurate identity and location data from your customers.
        </h3>
      </div>
      <div class="order-1 2xl:order-2">
        <div class="flex flex-wrap 2xl:flex-nowrap items-center justify-center">
          <div class="px-[10px] mb-10 2xl:mb-0">
            <div
              class="card w-[270px] h-[370px] p-[40px] bg-id-gray-4 border border-[#DADFE8] rounded-xl flex flex-col justify-between shadow-lg"
            >
              <div class="w-full text-center">
                <img
                  src="@/assets/images/Home/facial-auth.svg"
                  alt=""
                  class="h-[100px]"
                />
              </div>
              <div class="">
                <span
                  class="text-[14px] leading-[30px] font-medium font-commons"
                  >BIOMETRICS</span
                >
                <h2 class="text-[28px] leading-[42px] font-semibold mt-[8px]">
                  Facial Authentication
                </h2>
              </div>
            </div>
          </div>
          <div class="px-[10px] mb-10 2xl:mb-0">
            <div
              class="card w-[270px] h-[370px] p-[40px] bg-id-gray-4 border border-[#DADFE8] rounded-xl flex flex-col justify-between shadow-lg"
            >
              <div class="w-full text-center">
                <img
                  src="@/assets/images/Home/address-verification.svg"
                  alt=""
                  class="h-[100px]"
                />
              </div>
              <div class="">
                <span
                  class="text-[14px] leading-[30px] font-medium font-commons"
                  >GEOLOCATION</span
                >
                <h2 class="text-[28px] leading-[42px] font-semibold mt-[8px]">
                  Address Verification
                </h2>
              </div>
            </div>
          </div>
          <div class="px-[10px] mb-10 2xl:mb-0">
            <div
              class="card w-[270px] h-[370px] p-[40px] bg-id-gray-4 border border-[#DADFE8] rounded-xl flex flex-col justify-between shadow-lg"
            >
              <div class="w-full text-center">
                <img
                  src="@/assets/images/Home/proof.svg"
                  alt=""
                  class="h-[100px]"
                />
              </div>
              <div class="">
                <span
                  class="text-[14px] leading-[30px] font-medium font-commons"
                  >AUTHENTICATION</span
                >
                <h2 class="text-[28px] leading-[42px] font-semibold mt-[8px]">
                  Proof of Address
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

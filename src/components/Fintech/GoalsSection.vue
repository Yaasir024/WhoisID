<script setup>
import Hero from "@/components/Bank/Hero.vue";
import Goals from "@/components/Goals.vue";
</script>

<template>
  <section class="px-[20px] sm:px-[30px] md:px-[65px] lg:px-[80px] md::px-[112px] pt-[40px] pb-[50px]">
    <div class="flex flex-col items-center justify-center">
      <h3 class="text-[18px] leading-[27px] font-medium text-id-yellow mb-[24px]">
        Business goals
      </h3>
      <h3
        class="text-[28px] sm:text-[48px] leading-[36px] sm:leading-[58px] tracking-[-0.02em] text-center font-commons font-medium text-id-dark-1 max-w-[840px] mb-[64px]"
      >
        Customize verification steps to fit your KYC requirements
      </h3>
    </div>
    <div class="mt-[32px] mb-[20px]">
      <img src="/images/integration-chart.png" alt="">
    </div>
    <Goals />
    <div class="mt-[32px] flex flex-wrap" v-if="false">
      <div class="flex-full lg:flex-50% md:px-[16px] mb-10">
        <div
          class="px-[32px] pt-[91px] pb-[60px] bg-id-gray-5 rounded-3xl h-[710px] flex flex-col items-center"
        >
          <div class="">
            <h1
              class="text-id-dark-1 text-[28px] sm:text-[40px] leading-[36px] sm:leading-[48px] tracking-[-0.02em] text-center font-semibold max-w-[528px]"
            >
              Conduct due diligence on high risk customers quickly and
              efficiently
            </h1>
            <p
              class="text-id-dark-1 text-[18px] sm:text-[20px] leading-[22px] sm:leading-[30px] text-center max-w-[528px] mt-[20px]"
            >
              Identify discrepancies and reduce risk of financial fraud and
              reputational damage by conducting enhanced due diligence on high
              risk customers.
            </p>
          </div>
        </div>
      </div>
      <div class="flex-full lg:flex-50% md:px-[16px] mb-10">
        <div
          class="px-[32px] pt-[91px] pb-[60px] bg-id-gray-5 rounded-3xl h-[710px] flex flex-col items-center"
        >
          <div class="">
            <h1
              class="text-id-dark-1 text-[28px] sm:text-[40px] leading-[36px] sm:leading-[48px] tracking-[-0.02em] text-center font-semibold max-w-[528px]"
            >
              One-time installation and optimum performance
            </h1>
            <p
              class="text-id-dark-1 text-[18px] sm:text-[20px] leading-[22px] sm:leading-[30px] text-center max-w-[528px] mt-[20px]"
            >
              Our address verification solution easily integrates with your
              existing system, providing a quick and hassle-free installation
              process.
            </p>
          </div>
          <img src="/images/Industry/integration.svg" alt="" class="mt-auto" v-if="false"/>
        </div>
      </div>
    </div>
  </section>
</template>

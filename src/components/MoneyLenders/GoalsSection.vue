<script setup>
import Hero from "@/components/Bank/Hero.vue";
import Goals from "@/components/Goals.vue";
</script>

<template>
  <section
    class="px-[20px] sm:px-[30px] md:px-[65px] lg:px-[80px] md::px-[112px] pt-[40px] pb-[50px]"
  >
    <div class="flex flex-col items-center justify-center">
      <h3 class="text-[18px] leading-[27px] font-medium text-black mb-[24px]">
        Business goals
      </h3>
      <h3
        class="text-[28px] sm:text-[48px] leading-[36px] sm:leading-[58px] tracking-[-0.02em] text-center font-commons font-medium text-id-dark-1 max-w-[840px] mb-[64px]"
      >
        Customize verification steps to fit your KYC requirements
      </h3>
    </div>
    <div class="mt-[32px] mb-[20px]">
      <img src="@/assets/images/integration-chart.png" alt="" />
    </div>
    <Goals />
  </section>
</template>

<script setup>
import Hero from "@/components/MoneyLenders/Hero.vue";
import GoalsSection from "@/components/MoneyLenders/GoalsSection.vue";
</script>

<template>
  <main class="pt-[80px]">
    <Hero />
    <div class="py-[80px] px-[] lg:px-[40px] xl:px-[100px] 2xl:px-[194px]">
      <div class="flex flex-wrap items-center justify-center">
        <div class="flex-full lg:flex-33.33% px-[12px] max-w-[400px] mb-6">
          <div
            class="white-cards p-[20px] md:p-[40px] h-[375px] flex flex-col items-center"
          >
            <img
              src="@/assets/images/Industry/MoneyLenders/risk.svg"
              alt=""
              class=""
            />
            <h1
              class="mt-[32px] text-[24px] leading-[30px] font-semibold text-center max-w-[260px]"
            >
              Reduce Financial Risk
            </h1>
            <h1
              class="mt-[8px] text-[16px] leading-[24px] text-center max-w-[260px]"
            >
              Effectively carry out due diligence on customers identity and
              address boosting recovery process.
            </h1>
          </div>
        </div>
        <div class="flex-full lg:flex-33.33% px-[12px] max-w-[400px] mb-6">
          <div
            class="white-cards p-[20px] md:p-[40px] h-[375px] flex flex-col items-center"
          >
            <img
              src="@/assets/images/Industry/MoneyLenders/onboarding.svg"
              alt=""
              class=""
            />
            <h1
              class="mt-[32px] text-[24px] leading-[30px] font-semibold text-center max-w-[260px]"
            >
              Seamless Onboarding
            </h1>
            <h1
              class="mt-[8px] text-[16px] leading-[24px] text-center max-w-[260px]"
            >
              Onboard customers with liveness selfie authentication eradicating
              identity discrepancy.
            </h1>
          </div>
        </div>
        <div class="flex-full lg:flex-33.33% px-[12px] max-w-[400px] mb-6">
          <div
            class="white-cards p-[20px] md:p-[40px] h-[375px] flex flex-col items-center"
          >
            <img
              src="@/assets/images/Industry/MoneyLenders/defaulters.svg"
              alt=""
              class=""
            />
            <h1
              class="mt-[32px] text-[24px] leading-[30px] font-semibold text-center max-w-[260px]"
            >
              Restrict Loan Defaulters
            </h1>
            <h1
              class="mt-[8px] text-[16px] leading-[24px] text-center max-w-[260px]"
            >
              Ensure identifiable customers are onboarded.
            </h1>
          </div>
        </div>
      </div>
    </div>
    <GoalsSection />
  </main>
</template>

<style scoped>
.white-cards {
  background: #ffffff;
  border: 1px solid #eaecf0;
  box-shadow: 0px 2px 8px rgba(146, 146, 146, 0.08);
  border-radius: 12px;
}
</style>

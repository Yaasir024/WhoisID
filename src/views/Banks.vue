<script setup>
import Hero from "@/components/Bank/Hero.vue";
import GoalsSection from "@/components/Bank/GoalsSection.vue";
</script>

<template>
  <main class="pt-[80px]">
    <Hero />
    <div class="py-[80px] px-[] lg:px-[40px] xl:px-[100px] 2xl:px-[194px]">
      <div class="flex flex-wrap items-center justify-center">
        <div class="flex-full lg:flex-33.33% px-[12px] max-w-[400px] mb-6">
          <div class="white-cards p-[20px] md:p-[40px] h-[375px] flex flex-col items-center">
            <img src="/images/Industry/Banks/exp.svg" alt="" class="" />
            <h1
              class="mt-[32px] text-[24px] leading-[30px] font-semibold text-center max-w-[260px]"
            >
              Customer Experience and Satisfaction
            </h1>
            <h1
              class="mt-[8px] text-[16px] leading-[24px] text-center max-w-[260px]"
            >
              Build effective customer retention with identifiable details and
              scale up onboarding process.
            </h1>
          </div>
        </div>
        <div class="flex-full lg:flex-33.33% px-[12px] max-w-[400px] mb-6">
          <div class="white-cards p-[20px] md:p-[40px] h-[375px] flex flex-col items-center">
            <img src="/images/Industry/Banks/trust.svg" alt="" class="" />
            <h1
              class="mt-[32px] text-[24px] leading-[30px] font-semibold text-center max-w-[260px]"
            >
              Enhance Trust and Prevent Fraud
            </h1>
            <h1
              class="mt-[8px] text-[16px] leading-[24px] text-center max-w-[260px]"
            >
              Our AI algorithm resolves emerging forms of identity and address
              fraud thereby enhancing trust in customers.
            </h1>
          </div>
        </div>
        <div class="flex-full lg:flex-33.33% px-[12px] max-w-[400px] mb-6">
          <div class="white-cards p-[20px] md:p-[40px] h-[375px] flex flex-col items-center">
            <img src="/images/Industry/Banks/aml.svg" alt="" class="" />
            <h1
              class="mt-[32px] text-[24px] leading-[30px] font-semibold text-center max-w-[260px]"
            >
              AML and Compliance Policy
            </h1>
            <h1
              class="mt-[8px] text-[16px] leading-[24px] text-center max-w-[260px]"
            >
              Stay compliant with regulatory bodies while expanding market reach
              and eradicating AML deficiencies.
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

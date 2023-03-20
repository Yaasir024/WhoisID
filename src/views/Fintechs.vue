<script setup>
import Hero from "@/components/Fintech/Hero.vue";
import GoalsSection from "@/components/Fintech/GoalsSection.vue";
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
              src="@/assets/images/Industry/Fintech/customer.svg"
              alt=""
              class=""
            />
            <h1
              class="mt-[32px] text-[24px] leading-[30px] font-semibold text-center max-w-[260px]"
            >
              Know Your Customers
            </h1>
            <h1
              class="mt-[8px] text-[16px] leading-[24px] text-center max-w-[260px]"
            >
              Stay ahead of evolving KYC requirements with our flexible system
              tailored to meet the needs of Fintech companies.
            </h1>
          </div>
        </div>
        <div class="flex-full lg:flex-33.33% px-[12px] max-w-[400px] mb-6">
          <div
            class="white-cards p-[20px] md:p-[40px] h-[375px] flex flex-col items-center"
          >
            <img
              src="@/assets/images/Industry/Fintech/complaint.svg"
              alt=""
              class=""
            />
            <h1
              class="mt-[32px] text-[24px] leading-[30px] font-semibold text-center max-w-[260px]"
            >
              Stay compliant with regulatory bodies
            </h1>
            <h1
              class="mt-[8px] text-[16px] leading-[24px] text-center max-w-[260px]"
            >
              Expand into new markets while maintaining regulatory compliance
              where you operate.
            </h1>
          </div>
        </div>
        <div class="flex-full lg:flex-33.33% px-[12px] max-w-[400px] mb-6">
          <div
            class="white-cards p-[20px] md:p-[40px] h-[375px] flex flex-col items-center"
          >
            <img
              src="@/assets/images/Industry/Fintech/conversion.svg"
              alt=""
              class=""
            />
            <h1
              class="mt-[32px] text-[24px] leading-[30px] font-semibold text-center max-w-[260px]"
            >
              Maximize customers conversion
            </h1>
            <h1
              class="mt-[8px] text-[16px] leading-[24px] text-center max-w-[260px]"
            >
              Accelerate customer acquisition process and convert new customers
              quickly, with minimal friction.
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

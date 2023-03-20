<script setup>
import Fintech from "@/assets/images/Nav/fintech.svg";
import Banks from "@/assets/images/Nav/banks.svg";
import Money from "@/assets/images/Nav/money.svg";
const emits = defineEmits(["close"]);
</script>

<template>
  <div
    class="dropdown p-[32px] absolute top-[35px] left-[-20px] z-40 w-[336px]"
  >
    <ul class="">
      <li class="mb-[26px]">
        <RouterLink to="/banks" @click="$emit('close')" class="link">
          <div class="flex items-center">
            <img :src="Banks" alt="" class="" />
            <div class="ml-[16px]">
              <h2
                class="link-head text-[16px] leading-[24px] font-medium text-id-dark-1"
              >
                Banks
              </h2>
              <h2 class="link-body text-[14px] leading-[20px] text-[#667085]">
                Seamless integration with banking systems.
              </h2>
            </div>
          </div>
        </RouterLink>
      </li>
      <li class="mb-[26px]">
        <RouterLink to="/fintechs" @click="$emit('close')" class="link">
          <div class="flex items-center">
            <img :src="Fintech" alt="" class="" />
            <div class="ml-[16px]">
              <h2
                class="link-head text-[16px] leading-[24px] font-medium text-id-dark-1"
              >
                Fintechs
              </h2>
              <h2 class="link-body text-[14px] leading-[20px] text-[#667085]">
                Empower fintechs with secure digital verification.
              </h2>
            </div>
          </div>
        </RouterLink>
      </li>
      <li class="">
        <RouterLink to="/money-lenders" @click="$emit('close')" class="link">
          <div class="flex items-center">
            <img :src="Money" alt="" class="" />
            <div class="ml-[16px]">
              <h2
                class="link-head text-[16px] leading-[24px] font-medium text-id-dark-1"
              >
                Money Lenders
              </h2>
              <h2 class="link-body text-[14px] leading-[20px] text-[#667085]">
                Efficiently verify lenders’ information and make more accurate
                loan decisions.
              </h2>
            </div>
          </div>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.link-head,
.link-body {
  transition: all 0.3s ease-in-out;
}
.link:hover .link-head {
  color: #0f595c;
}
.link:hover .link-body {
  color: #0f595c;
}
.dropdown {
  background: #ffffff;
  box-shadow: 0px 44px 116px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
}
</style>

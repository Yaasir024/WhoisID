<script setup>
const emits = defineEmits(["close"]);
</script>

<template>
  <div
    class="dropdown p-[32px] absolute top-[35px] left-[-20px] z-40 w-[336px]"
  >
    <ul class="">
      <li class="mb-[26px]">
        <RouterLink to="/banks" @click="$emit('close')">
          <div class="flex items-center">
            <!-- <img src="@/assets/icons/nav/invoicing.svg" alt="" class="" /> -->
            <div class="ml-[16px]">
              <h2 class="text-[16px] leading-[24px] font-medium text-id-dark-1">
                Banks
              </h2>
              <h2 class="text-[14px] leading-[20px] text-id-gray-2">
                Proin interdum mauris non ligula pellentesque ultrices.
              </h2>
            </div>
          </div>
        </RouterLink>
      </li>
      <li class="mb-[26px]">
        <RouterLink to="/fintechs" @click="$emit('close')">
          <div class="flex items-center">
            <!-- <img src="@/assets/icons/nav/accounting.svg" alt="" class="" /> -->
            <div class="ml-[16px]">
              <h2 class="text-[16px] leading-[24px] font-medium text-id-dark-1">
                Fintechs
              </h2>
              <h2 class="text-[14px] leading-[20px] text-id-gray-2">
                Proin interdum mauris non ligula pellentesque ultrices.
              </h2>
            </div>
          </div>
        </RouterLink>
      </li>
      <li class="">
        <RouterLink to="/money-lenders" @click="$emit('close')">
          <div class="flex items-center">
            <!-- <img src="@/assets/icons/nav/book.svg" alt="" class="" /> -->
            <div class="ml-[16px]">
              <h2 class="text-[16px] leading-[24px] font-medium text-id-dark-1">
                Money Lenders
              </h2>
              <h2 class="text-[14px] leading-[20px] text-id-gray-2">
                Proin interdum mauris non ligula pellentesque ultrices.
              </h2>
            </div>
          </div>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.dropdown {
  background: #ffffff;
  box-shadow: 0px 44px 116px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
}
</style>

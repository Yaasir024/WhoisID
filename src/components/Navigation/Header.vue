<script setup>
import { ref } from "vue";

import { useClickOutside } from "@/composables/useClickOutside";

import IndustryMenu from "@/components/Navigation/IndustryMenu.vue";
import MobileNav from "@/components/Navigation/MobileNav.vue";

const showMobileNav = ref(false);

const industryMenu = ref(null);
const showIndustryMenu = ref(false);
useClickOutside(industryMenu, () => {
  showIndustryMenu.value = false;
});

const country = ref("africa");
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 bg-id-green-1 h-[80px] px-[40px] lg:px-[60px] xl:px-[112px] flex items-center justify-between border-b border-[#F2F4F71A] z-30"
  >
    <div class="logo">
      <img src="/images/logo.svg" alt="" class="" />
    </div>
    <nav class="hidden md:block">
      <ul class="text-white flex items-center">
        <li class="relative mr-[32px]" ref="industryMenu">
          <div
            class="flex cursor-pointer"
            @click="showIndustryMenu = !showIndustryMenu"
          >
            <span class="text-[16px] leading-[24px] mr-[8px]">Industries</span>
            <img src="@/assets/icons/chevron-down.svg" alt="" class="" />
          </div>
          <transition name="menu">
            <IndustryMenu
              v-if="showIndustryMenu"
              @close="showIndustryMenu = false"
            />
          </transition>
        </li>
        <li class="mr-[32px]">
          <RouterLink to="/use-cases">
            <span class="text-[16px] leading-[24px]">Use cases</span>
          </RouterLink>
        </li>
        <li class="">
          <RouterLink to="/">
            <span class="text-[16px] leading-[24px]">Resources</span>
          </RouterLink>
        </li>
      </ul>
    </nav>
    <div class="hidden md:block">
      <button
        class="flex items-center justify-between px-[16px] py-[11px] border border-white rounded-lg"
      >
        <img src="@/assets/icons/globe.svg" alt="" class="" />
        <div class="h-[20px] border-l mx-[8px] border-white"></div>
        <span
          class="text-white capitalize text-[14px] leading-[20px] font-medium mr-[8px]"
          >{{ country }}</span
        >
        <img src="@/assets/icons/chevron-down.svg" alt="" class="" />
      </button>
    </div>
    <div class="block md:hidden">
      <button class="text-white" @click="showMobileNav = true">
        <svg
          width="24"
          height="24"
          fill="currentColor"
          clip-rule="evenodd"
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m22 15.25c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-6.5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z"
            fill-rule="nonzero"
          />
        </svg>
      </button>
      <transition name="nav">
        <MobileNav @close="showMobileNav = false" v-if="showMobileNav" />
      </transition>
    </div>
  </header>
</template>

<style scoped>
/* Nav Animation */
.nav-enter-active,
.nav-leave-active {
  transition: all 0.4s ease;
}
.nav-enter-from,
.nav-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

/* Menu Animation */
.menu-enter-active,
.menu-leave-active {
  transition: transform 0.3s ease;
  transform-origin: top left;
}

.menu-enter-from,
.menu-leave-to {
  transform: scale(0);
}
</style>

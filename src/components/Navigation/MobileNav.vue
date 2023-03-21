<script setup>
import { ref, onMounted } from "vue";
const emit = defineEmits(["close"]);

const activeMenu = ref("");
const toggleMenu = (val) => {
  if (activeMenu.value == "" || val != activeMenu.value) {
    activeMenu.value = val;
  } else {
    activeMenu.value = "";
  }
};
</script>

<template>
  <div
    class="font-sharp fixed top-0 left-0 h-screen w-screen bg-white text-black z-50"
  >
    <div class="h-[64px] border-b px-10 flex items-center justify-between">
      <RouterLink to="/" @click="$emit('close')">
        <img src="@/assets/images/Logo/black.svg" alt="" class="" />
      </RouterLink>
      <button @click="$emit('close')">
        <svg
          clip-rule="evenodd"
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
          fill="currentColor"
        >
          <path
            d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"
          />
        </svg>
      </button>
    </div>
    <ul class="flex flex-col px-10 pt-[24px]">
      <li class="link h-[50px] border-b flex items-center">
        <RouterLink to="/" @click="$emit('close')">
          <span class="">Home</span>
        </RouterLink>
      </li>
      <li class="link-lg border-b">
        <div
          class="flex items-center justify-between cursor-pointer h-[50px]"
          @click="toggleMenu('features')"
        >
          <span class="mr-[13px]">Industries</span>
          <img
            src="@/assets/icons/chevron-down-black.svg"
            alt=""
            class="h-[16px] w-[16px]"
            :class="activeMenu == 'features' ? 'rotate-180' : ''"
          />
        </div>
        <div
          class="overflow-hidden transition-all duration-200 ease-in"
          :class="
            activeMenu == 'features' ? 'max-h-[200px] pb-[24px]' : 'max-h-0'
          "
        >
          <ul class="pl-4">
            <li class="link mb-[12px]">
              <RouterLink to="/banks" @click="$emit('close')">
                <div class="flex items-center">
                  <img src="@/assets/images/Nav/banks.svg" alt="" class="w-[25px] h-[25px] mr-2" />

                  <span class="text-black">Banks</span>
                </div>
              </RouterLink>
            </li>
            <li class="link mb-[12px]">
              <RouterLink to="/fintechs" @click="$emit('close')">
                <div class="flex items-center">
                  <img src="@/assets/images/Nav/fintech.svg" alt="" class="w-[25px] h-[25px] mr-2" />
                  <span class="text-black">Fintechs</span>
                </div>
              </RouterLink>
            </li>
            <li class="link mb-[12px]">
              <RouterLink to="/money-lenders" @click="$emit('close')">
                <div class="flex items-center">
                  <img src="@/assets/images/Nav/money.svg" alt="" class="w-[25px] h-[25px] mr-2" />
                  <span class="text-black">Money Lenders</span>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </li>
      <li class="link h-[50px] border-b flex items-center">
        <RouterLink to="/use-cases" @click="$emit('close')">
          <span class="">Use cases</span>
        </RouterLink>
      </li>
      <li class="link h-[50px] border-b flex items-center">
        <RouterLink to="/" @click="$emit('close')">
          <span class="">Resources</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.link-lg,
.link span {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  color: #667085;
  transition: all 0.3s ease;
}
.link-lg img {
  transition: all 0.3s ease;
}

.link:hover span {
  color: #0F595C;
}
</style>

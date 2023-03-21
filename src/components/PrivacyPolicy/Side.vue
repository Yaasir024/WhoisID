<script setup>
import { ref, onMounted } from "vue";
import { scrollTo } from "@/composables/useScrollToSection";

import { useClickOutside } from "@/composables/useClickOutside";

import { privacyStore } from "@/stores/privacy";

const usePrivacyStore = privacyStore();

const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.pageYOffset > 240;
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

const contentMenu = ref(null);
const showContentMenu = ref(false);
useClickOutside(contentMenu, () => {
  showContentMenu.value = false;
});

const goToSection = (section) => {
  showContentMenu.value = false;
  scrollTo(section);
};
</script>

<template>
  <aside class="w-[30px] md:w-[40px] lg:w-[320px]">
    <div
      class="z-20"
      :class="isScrolled ? 'fixed top-[100px] left-[30px] md:left-[40px]' : ''"
    >
      <div class="relative block lg:hidden pt-[10px]" ref="contentMenu">
        <button
          class="h-[35px] w-[35px] rounded-full flex items-center justify-center"
          @click="showContentMenu = !showContentMenu"
          :class="isScrolled ? 'bg-white shadow-2xl border' : ''"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z"
            />
          </svg>
        </button>
        <transition name="menu">
          <div
            class="absolute dropdown top-[50px] left-[0px] w-[320px] px-[20px] py-[10px] bg-white border rounded-md shadow-md max-h-[410px] overflow-y-auto z-20"
            v-if="showContentMenu"
          >
            <div
              class="item"
              :class="{ active: usePrivacyStore.currentSection === 'intro' }"
              @click="goToSection('intro')"
            >
              Introduction
            </div>
            <ol class="" type="1">
              <li
                class="item"
                :class="{
                  active: usePrivacyStore.currentSection === 'section-1',
                }"
                @click="goToSection('section-1')"
              >
                Our Privacy Notice in a nutshell
              </li>
              <li
                class="item"
                :class="{
                  active: usePrivacyStore.currentSection === 'section-2',
                }"
                @click="goToSection('section-2')"
              >
                Definitions
              </li>
              <li
                class="item"
                :class="{
                  active: usePrivacyStore.currentSection === 'section-3',
                }"
                @click="goToSection('section-3')"
              >
                Our main privacy principles
              </li>
              <li
                class="item"
                :class="{
                  active: usePrivacyStore.currentSection === 'section-4',
                }"
                @click="goToSection('section-4')"
              >
                The content of personal data we process
              </li>
              <li
                class="item"
                :class="{
                  active: usePrivacyStore.currentSection === 'section-5',
                }"
                @click="goToSection('section-5')"
              >
                Legal grounds and purposes of processing
              </li>
              <li
                class="item"
                :class="{
                  active: usePrivacyStore.currentSection === 'section-6',
                }"
                @click="goToSection('section-6')"
              >
                Technological aspects of our Service provision and development
              </li>
              <li
                class="item"
                :class="{
                  active: usePrivacyStore.currentSection === 'section-7',
                }"
                @click="goToSection('section-7')"
              >
                Data subject’s right in relation to personal data
              </li>
              <li
                class="item"
                :class="{
                  active: usePrivacyStore.currentSection === 'section-8',
                }"
                @click="goToSection('section-8')"
              >
                Disclosure and transfer of Personal Data
              </li>
              <li
                class="item"
                :class="{
                  active: usePrivacyStore.currentSection === 'section-9',
                }"
                @click="goToSection('section-9')"
              >
                Security of Personal Data
              </li>
              <li
                class="item"
                :class="{
                  active: usePrivacyStore.currentSection === 'section-10',
                }"
                @click="goToSection('section-10')"
              >
                Retention of Personal Data
              </li>
              <li
                class="item"
                :class="{
                  active: usePrivacyStore.currentSection === 'section-11',
                }"
                @click="goToSection('section-11')"
              >
                Children’s Personal Data
              </li>
              <li
                class="item"
                :class="{
                  active: usePrivacyStore.currentSection === 'section-12',
                }"
                @click="goToSection('section-12')"
              >
                WhoisID's Demo app and testing WhoisID's session flow
              </li>
              <li
                class="item"
                :class="{
                  active: usePrivacyStore.currentSection === 'section-13',
                }"
                @click="goToSection('section-13')"
              >
                Contact details and information
              </li>
              <li
                class="item"
                :class="{
                  active: usePrivacyStore.currentSection === 'section-14',
                }"
                @click="goToSection('section-14')"
              >
                Availability of and changes to the Privacy Notice
              </li>
            </ol>
          </div>
        </transition>
      </div>
    </div>
    <div class="hidden lg:block">
      <div
        class="item"
        :class="{ active: usePrivacyStore.currentSection === 'intro' }"
        @click="goToSection('intro')"
      >
        Introduction
      </div>
      <ol class="" type="1">
        <li
          class="item"
          :class="{
            active: usePrivacyStore.currentSection === 'section-1',
          }"
          @click="goToSection('section-1')"
        >
          Our Privacy Notice in a nutshell
        </li>
        <li
          class="item"
          :class="{
            active: usePrivacyStore.currentSection === 'section-2',
          }"
          @click="goToSection('section-2')"
        >
          Definitions
        </li>
        <li
          class="item"
          :class="{
            active: usePrivacyStore.currentSection === 'section-3',
          }"
          @click="goToSection('section-3')"
        >
          Our main privacy principles
        </li>
        <li
          class="item"
          :class="{
            active: usePrivacyStore.currentSection === 'section-4',
          }"
          @click="goToSection('section-4')"
        >
          The content of personal data we process
        </li>
        <li
          class="item"
          :class="{
            active: usePrivacyStore.currentSection === 'section-5',
          }"
          @click="goToSection('section-5')"
        >
          Legal grounds and purposes of processing
        </li>
        <li
          class="item"
          :class="{
            active: usePrivacyStore.currentSection === 'section-6',
          }"
          @click="goToSection('section-6')"
        >
          Technological aspects of our Service provision and development
        </li>
        <li
          class="item"
          :class="{
            active: usePrivacyStore.currentSection === 'section-7',
          }"
          @click="goToSection('section-7')"
        >
          Data subject’s right in relation to personal data
        </li>
        <li
          class="item"
          :class="{
            active: usePrivacyStore.currentSection === 'section-8',
          }"
          @click="goToSection('section-8')"
        >
          Disclosure and transfer of Personal Data
        </li>
        <li
          class="item"
          :class="{
            active: usePrivacyStore.currentSection === 'section-9',
          }"
          @click="goToSection('section-9')"
        >
          Security of Personal Data
        </li>
        <li
          class="item"
          :class="{
            active: usePrivacyStore.currentSection === 'section-10',
          }"
          @click="goToSection('section-10')"
        >
          Retention of Personal Data
        </li>
        <li
          class="item"
          :class="{
            active: usePrivacyStore.currentSection === 'section-11',
          }"
          @click="goToSection('section-11')"
        >
          Children’s Personal Data
        </li>
        <li
          class="item"
          :class="{
            active: usePrivacyStore.currentSection === 'section-12',
          }"
          @click="goToSection('section-12')"
        >
          WhoisID's Demo app and testing WhoisID's session flow
        </li>
        <li
          class="item"
          :class="{
            active: usePrivacyStore.currentSection === 'section-13',
          }"
          @click="goToSection('section-13')"
        >
          Contact details and information
        </li>
        <li
          class="item"
          :class="{
            active: usePrivacyStore.currentSection === 'section-14',
          }"
          @click="goToSection('section-14')"
        >
          Availability of and changes to the Privacy Notice
        </li>
      </ol>
    </div>
  </aside>
</template>

<style scoped>
.dropdown::-webkit-scrollbar {
  width: 8px;
}

.dropdown::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

.item {
  cursor: pointer;
  font-size: 16px;
  line-height: 29px;
  color: #000000;
  margin-bottom: 8px;
  transition: all 0.3s ease-in-out;
}
.item.active {
  font-weight: 700;
  color: #0f595c;
}
.item:hover {
  color: #0f595c;
}

ol {
  list-style: none;
  counter-reset: my-awesome-counter;
}
ol li {
  counter-increment: my-awesome-counter;
}
ol li::before {
  content: counter(my-awesome-counter) ". ";
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

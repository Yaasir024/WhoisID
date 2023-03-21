<script setup>
import { ref } from "vue";

import { privacyStore } from "@/stores/privacy";

import Intro from "@/components/PrivacyPolicy/Section/Intro.vue";
import Section01 from "@/components/PrivacyPolicy/Section/01.vue";
import Section02 from "@/components/PrivacyPolicy/Section/02.vue";
import Section03 from "@/components/PrivacyPolicy/Section/03.vue";
import Section04 from "@/components/PrivacyPolicy/Section/04.vue";
import Section05 from "@/components/PrivacyPolicy/Section/05.vue";
import Section06 from "@/components/PrivacyPolicy/Section/06.vue";
import Section07 from "@/components/PrivacyPolicy/Section/07.vue";
import Section08 from "@/components/PrivacyPolicy/Section/08.vue";
import Section09 from "@/components/PrivacyPolicy/Section/09.vue";
import Section10 from "@/components/PrivacyPolicy/Section/10.vue";
import Section11 from "@/components/PrivacyPolicy/Section/11.vue";
import Section12 from "@/components/PrivacyPolicy/Section/12.vue";
import Section13 from "@/components/PrivacyPolicy/Section/13.vue";
import Section14 from "@/components/PrivacyPolicy/Section/14.vue";

const usePrivacyStore = privacyStore();

const currentSection = ref("");

const handleSectionInViewport = (sectionId) => {
  usePrivacyStore.currentSection = sectionId;
};
</script>

<template>
  <main class="sections w-full pl-[8px] pb-[30px]">
    <Intro sectionId="intro" @section-in-viewport="handleSectionInViewport" />
    <Section01
      sectionId="section-1"
      @section-in-viewport="handleSectionInViewport"
    />
    <Section02
      sectionId="section-2"
      @section-in-viewport="handleSectionInViewport"
    />
    <Section03
      sectionId="section-3"
      @section-in-viewport="handleSectionInViewport"
    />
    <Section04
      sectionId="section-4"
      @section-in-viewport="handleSectionInViewport"
    />
    <Section05
      sectionId="section-5"
      @section-in-viewport="handleSectionInViewport"
    />
    <Section06
      sectionId="section-6"
      @section-in-viewport="handleSectionInViewport"
    />
    <Section07
      sectionId="section-7"
      @section-in-viewport="handleSectionInViewport"
    />
    <Section08
      sectionId="section-8"
      @section-in-viewport="handleSectionInViewport"
    />
    <Section09
      sectionId="section-9"
      @section-in-viewport="handleSectionInViewport"
    />
    <Section10
      sectionId="section-10"
      @section-in-viewport="handleSectionInViewport"
    />
    <Section11
      sectionId="section-11"
      @section-in-viewport="handleSectionInViewport"
    />
    <Section12
      sectionId="section-12"
      @section-in-viewport="handleSectionInViewport"
    />
    <Section13
      sectionId="section-13"
      @section-in-viewport="handleSectionInViewport"
    />
    <Section14
      sectionId="section-14"
      @section-in-viewport="handleSectionInViewport"
    />
  </main>
</template>

<style scoped>
section {
  margin-bottom: 32px;
  max-width: 890px;
}
section h1 {
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  color: #000000;
  margin-bottom: 8px;
}
section h3 {
  font-weight: 600;
  font-size: 16px;
  line-height: 29px;
  color: #000000;
  margin-bottom: 8px;
}
section p {
  font-size: 16px;
  line-height: 29px;
  text-align: justify;
  color: #000000;
  margin-bottom: 16px;
}
section li {
  font-weight: 500;
  font-size: 16px;
  line-height: 29px;
  text-align: justify;
  color: #000000;
  margin-bottom: 16px;
}
section li span {
  font-weight: 600;
}
.link {
  text-decoration: underline;
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showFeature1 = ref("2");
let intervalId;

const switchImages = () => {
  if (showFeature1.value == "1") {
    showFeature1.value = "";
    setTimeout(() => {
      showFeature1.value = "2";
    }, "500");
  } else if (showFeature1.value == "2") {
    showFeature1.value = "";
    setTimeout(() => {
      showFeature1.value = "1";
    }, "500");
  }
};

onMounted(() => {
  intervalId = setInterval(switchImages, 5500);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <section
    class="bg-id-green-1 px-[40px] xl:px-[80px] 2xl:px-[112px] pt-[65px] xl:pt-[180px] pb-[175px] flex lg:items-center flex-col xl:flex-row overflow-hidden"
  >
    <div class="max-w-[630px] overflow-hidden order-2 xl:order-1">
      <h1
        class="text-white text-[38px] sm:text-[56px] leading-[48px] sm:leading-[72px] tracking-[-0.02em] font-millik"
      >
        Trust and authenticate your customers with
        <span class="text-id-yellow">digital verification</span>
      </h1>
      <h3
        class="text-id-gray-3 text-[18px] sm:text-[22px] leading-[28px] sm:leading-[30px] mt-[16px]"
      >
        Make informed business decisions by verifying who your customers are and
        where they are located.
      </h3>
      <div class="mt-[24px]">
        <button
          class="bg-id-green-2 text-white text-[16px] leading-[24px] py-[12px] px-[70px] rounded-lg"
        >
          Get started
        </button>
      </div>
    </div>
    <div
      class="w-full hidden xl:flex items-center justify-center relative order-1 xl:order-2"
    >
      <div class="relative scale-100 z-[28] max-w-[270px] h-[278px] ">
        <transition-group name="grow">
          <!-- Main -->
          <img
            src="@/assets/images/Home/hero.png"
            loading="lazy"
            alt=""
            class="max-w-[270px] h-[278px] z-[20]"
            v-if="showFeature1 == '1'"
          />
          <img
            src="@/assets/images/Home/hero-2.png"
            loading="lazy"
            alt=""
            class="max-w-[270px] h-[278px] z-[20]"
            v-if="showFeature1 == '2'"
          />
          <!-- 1 -->
          <button
            class="facial-btn tag-btn flex items-center py-[6px] px-[10px] absolute top-[-45px] left-[-85px] w-max h-max z-[25]"
            v-if="showFeature1 == '1'"
          >
            <img
              src="@/assets/images/Home/hero-tick.svg"
              alt=""
              class="mr-[8px]"
            />
            <span
              class="text-[14px] leading-[20px] text-[#027A48] font-medium font-inter shrink-0"
              >Facial authentication</span
            >
          </button>
          <!-- b -->
          <button
            class="facial-btn tag-btn flex items-center py-[6px] px-[10px] absolute top-[-45px] left-[-75px] w-max h-max z-[25]"
            v-if="showFeature1 == '2'"
          >
            <img
              src="@/assets/images/Home/hero-tick.svg"
              alt=""
              class="mr-[8px]"
            />
            <span
              class="text-[14px] leading-[20px] text-[#027A48] font-medium font-inter shrink-0"
              >State</span
            >
          </button>
          <!-- 2 -->
          <button
            class="tag-btn flex items-center py-[6px] px-[10px] absolute top-[-25px] right-[-120px] w-max z-[25]"
            v-if="showFeature1 == '1'"
          >
            <img
              src="@/assets/images/Home/hero-tick.svg"
              alt=""
              class="mr-[8px]"
            />
            <span
              class="text-[14px] leading-[20px] text-[#027A48] font-medium font-inter shrink-0"
              >Spoof detection</span
            >
          </button>
          <!-- b -->
          <button
            class="tag-btn flex items-center py-[6px] px-[10px] absolute top-[-25px] right-[-40px] w-max z-[25]"
            v-if="showFeature1 == '2'"
          >
            <img
              src="@/assets/images/Home/hero-tick.svg"
              alt=""
              class="mr-[8px]"
            />
            <span
              class="text-[14px] leading-[20px] text-[#027A48] font-medium font-inter shrink-0"
              >Country</span
            >
          </button>
          <!-- 3 -->
          <button
            class="tag-btn flex items-center py-[6px] px-[10px] absolute bottom-[-40px] right-[35px] w-max z-[25]"
            v-if="showFeature1 == '1'"
          >
            <img
              src="@/assets/images/Home/hero-tick.svg"
              alt=""
              class="mr-[8px]"
            />
            <span
              class="text-[14px] leading-[20px] text-[#027A48] font-medium font-inter shrink-0"
              >Deep Fake Detection</span
            >
          </button>
          <!-- b -->
          <button
            class="tag-btn flex items-center py-[6px] px-[10px] absolute bottom-[-20px] right-[50px] w-max z-[25]"
            v-if="showFeature1 == '2'"
          >
            <img
              src="@/assets/images/Home/hero-tick.svg"
              alt=""
              class="mr-[8px]"
            />
            <span
              class="text-[14px] leading-[20px] text-[#027A48] font-medium font-inter shrink-0"
              >House Number</span
            >
          </button>
          <!-- 4 -->
          <button
            class="tag-btn flex items-center py-[6px] px-[10px] absolute bottom-[100px] left-[-145px] w-max z-[25]"
            v-if="showFeature1 == '1'"
          >
            <img
              src="@/assets/images/Home/hero-tick.svg"
              alt=""
              class="mr-[8px]"
            />
            <span
              class="text-[14px] leading-[20px] text-[#027A48] font-medium font-inter shrink-0"
              >Liveness
            </span>
          </button>
          <!-- b -->
          <button
            class="tag-btn flex items-center py-[6px] px-[10px] absolute bottom-[100px] left-[-90px] w-max z-[25]"
            v-if="showFeature1 == '2'"
          >
            <img
              src="@/assets/images/Home/hero-tick.svg"
              alt=""
              class="mr-[8px]"
            />
            <span
              class="text-[14px] leading-[20px] text-[#027A48] font-medium font-inter shrink-0"
              >City
            </span>
          </button>
          <!-- 5 -->
          <button
            class="tag-btn flex items-center py-[6px] px-[10px] absolute bottom-[75px] right-[-90px] w-max z-[25]"
            v-if="showFeature1 == '2'"
          >
            <img
              src="@/assets/images/Home/hero-tick.svg"
              alt=""
              class="mr-[8px]"
            />
            <span
              class="text-[14px] leading-[20px] text-[#027A48] font-medium font-inter shrink-0"
              >Country</span
            >
          </button>
        </transition-group>
      </div>
      <!-- ARCS -->
      <img
        src="@/assets/images/Home/ellipse-1.svg"
        alt=""
        class="rings rotate-1 h-[270px] w-[270px]"
      />
      <img
        src="@/assets/images/Home/ellipse-2.svg"
        alt=""
        class="rings rotate-2 h-[425px] w-[425px]"
      />
      <img
        src="@/assets/images/Home/ellipse-3.svg"
        alt=""
        class="rings rotate-3 h-[530px] !w-[530px]"
      />
    </div>
  </section>
  {{ showFeature1 }} Renne
</template>

<style scoped>
@keyframes spin {
  from {
    transform: translate(-50%, -50%) rotate(0);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@keyframes spin-back {
  from {
    transform: translate(-50%, -50%) rotate(0);
  }
  to {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}
.rings {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.rotate-1 {
  animation: spin 4s linear infinite !important;
}
.rotate-2 {
  animation: spin-back 6s linear infinite !important;
}
.rotate-3 {
  animation: spin 8s linear infinite !important;
}

/* Menu Animation */
.grow-enter-active,
.grow-leave-active {
  transition: transform 0.3s ease;
  transform-origin: center;
}

.grow-enter-from,
.grow-leave-to {
  transform: scale(0);
}

.tag-btn {
  background: #f9fafb;
  box-shadow: 0px 0px 16px rgba(52, 52, 52, 0.1);
  border-radius: 40px;
}
.facial-btn {
  /* animation: facial 24s linear infinite !important; */
}
</style>

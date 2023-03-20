<template>
  <section
    class="bg-id-green-1 px-[112px] py-[154px] flex items-center flex-col lg:flex-row"
  >
    <div class="max-w-[630px]">
      <h1 class="text-white text-[56px] leading-[72px] tracking-[-0.02em]">
        Trust and authenticate your customers with
        <span class="text-id-yellow">digital verification</span>
      </h1>
      <h3 class="text-id-gray-3 text-[22px] leading-[30px] mt-[16px]">
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
    <div class="w-full flex items-center justify-center relative">
      <img
        src="/images/Home/hero.png"
        alt=""
        class="max-w-[270px] h-[278px] z-[20]"
      />
      <img
        src="/images/Home/ellipse-1.svg"
        alt=""
        class="rings rotate-1 h-[270px] w-[270px]"
      />
      <img
        src="/images/Home/ellipse-2.svg"
        alt=""
        class="rings rotate-1 h-[425px] w-[425px]"
      />
      <img
        src="/images/Home/ellipse-3.svg"
        alt=""
        class="rings rotate-1 h-[530px] !w-[530px]"
      />
    </div>
  </section>
</template>

<style scoped>
.rings {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  /* animation: rotation 5s infinite linear; */
  
}
.rotate-1 {
    animation: spin 2s linear infinite !important;
}

@keyframes spin {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@-moz-keyframes rotation {
  0% {
    -moz-transform: rotate(0deg);
  }
  100% {
    -moz-transform: rotate(-360deg);
  }
}

@-webkit-keyframes rotation {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
  }
}
</style>

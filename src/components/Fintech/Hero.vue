<template>
  <section
    class="bg-id-green-1 px-[40px] xl:px-[112px] pt-[45px] lg:pt-[150px] pb-[154px] flex items-center flex-col lg:flex-row overflow-hidden"
  >
    <div class="max-w-[500px] xl:max-w-[550px] order-2 lg:order-1 mt-4 lg:mt-0">
      <button
        class="text-[14px] leading-[20px] font-medium font-inter text-id-yellow py-[4px] px-[12px] bg-white rounded-2xl"
      >
        FINTECH
      </button>
      <h1
        class="text-white text-[48px] leading-[67px] font-millik tracking-[-0.02em] mt-[28px]"
      >
        No more tradeoffs between compliance and conversion
      </h1>
      <h3 class="text-id-gray-3 text-[20px] leading-[30px] mt-[24px]">
        No more tradeoffs between compliance and conversion
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
      class="w-full hidden sm:flex items-center justify-center lg:justify-end relative order-1 lg:order-2"
    >
      <div
        class="img-container p-[25px] lg:p-[30px] xl:p-[45px] rounded-full relative"
      >
        <img
          src="@/assets/images/Industry/Fintech/hero.png"
          alt=""
          class="w-[380px] lg:w-[448px] h-[380px] lg:h-[448px] z-[20]"
        />
        <img
          src="@/assets/images/Industry/waves.svg"
          alt=""
          class="absolute top-[70px] right-[-145px]"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.img-container {
  background: rgba(0, 94, 97, 0.1);
  /* background-opacity: 0.1; */
  border: 6px solid rgba(0, 133, 136/0.9);
  box-shadow: 0px 0px 4px rgba(68, 68, 68, 0.12);
}
</style>

<template>
  <footer class="bg-white px-[20px] md:px-[60px] lg:px-[112px]">
    <div
      class="border-t h-[160px] py-4 sm:py-0 sm:h-[135px] flex items-center justify-between flex-col sm:flex-row"
    >
      <div class="logo">
        <RouterLink to="/">
          <img src="@/assets/images/Logo/black.svg" alt="" class="" />
        </RouterLink>
      </div>
      <nav class="">
        <ul class="flex items-center">
          <li class="mr-[24px] text-[14px] leading-[24px]">
            <RouterLink to="/privacy-policy"> Privacy Policy </RouterLink>
          </li>
          <li class="mr-[24px] text-[14px] leading-[24px]">
            <RouterLink to="/"> Terms of Service </RouterLink>
          </li>
          <li class="mr-[24px] text-[14px] leading-[24px]">
            <RouterLink to="/"> Cookies </RouterLink>
          </li>
        </ul>
      </nav>
      <div class="">
        <span class="text-[14px] leading-[24px]">© 2023 WhoisID</span>
      </div>
    </div>
  </footer>
</template>

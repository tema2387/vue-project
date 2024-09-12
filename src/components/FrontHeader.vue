<script setup>
// Icons
import MoonClearIcon from '@/components/UI/svg/MoonClearIcon.vue';
import ArrowDownSIcon from '@/components/UI/svg/ArrowDownSIcon.vue';
import ShoppingCartIcon from '@/components/UI/svg/ShoppingCartIcon.vue';

// Others
import activeDarkTheme from '@/modules/changeTheme.js';
</script>

<template>
  <div class="header z-[100] fixed bg-paper-bg/[64%] text-text-primary text-15-500 border border-t-0 border-paper-bg/[75%] rounded-b-md top-0 left-0 right-0 container flex items-center py-[12px] px-[32px]">
    <router-link to="/" class="header__left flex gap-[12px] items-center mr-[32px]">
        <img 
          class="max-w-[30px]"
          src="/public/img/logos/materio-logo.png"
          alt="logo" 
        >
      <div div class="logo-name text-logo">MATERIO</div>
    </router-link>
    <nav class="menu flex-1">
      <ul class="menu__list flex items-center gap-[8px]">
        <li class="menu__item px-[10px]">
          <UiLink :type="'inside'">Home</UiLink>
        </li>
        <li class="menu__item px-[10px]">
          <UiLink :type="'inside'">Features</UiLink>
        </li>
        <li class="menu__item px-[10px]">
          <UiLink :type="'inside'">Team</UiLink>
        </li>
        <li class="menu__item px-[10px]">
          <UiLink :type="'inside'">FAQ</UiLink>
        </li>
        <li class="menu__item px-[10px]">
          <UiLink :type="'inside'">Contact us</UiLink>
        </li>
        <li class="menu__item px-[10px] flex items-center gap-[8px] duration-200 hover:opacity-70 cursor-pointer">
            Pages
            <ArrowDownSIcon />
        </li>
      </ul>
    </nav>
    <div class="header__right flex items-center">
      <MoonClearIcon
        class="cursor-pointer mr-[24px]" 
        @click="activeDarkTheme = !activeDarkTheme" 
      />
      <UiButton :text="'md'">
        <div class="flex items-center gap-[6px]">
          <ShoppingCartIcon />
          Purchase Now
        </div>
      </UiButton>
    </div>
  </div>
</template>
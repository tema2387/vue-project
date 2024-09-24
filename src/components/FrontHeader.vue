<script setup>
import { computed } from 'vue';
// Icons
import MoonClearIcon from '@/components/UI/svg/MoonClearIcon.vue';
import ArrowDownSIcon from '@/components/UI/svg/ArrowDownSIcon.vue';
import ShoppingCartIcon from '@/components/UI/svg/ShoppingCartIcon.vue';

const props = defineProps({
  type: {
    type: String,
    default() {
      return '';
    }
  }
})

const typeFixed = 'fixed border border-t-0 border-paper-bg/[75%] rounded-b-md top-0 left-0 right-0 container';

const setType = computed(() => {
  return props.type === 'fixed' ? typeFixed : '';
})

// Others
import activeDarkTheme from '@/modules/changeTheme.js';
import UiLink from './UI/UiLink.vue';
</script>

<template>
  <div 
    class="header z-[100] bg-paper-bg/[64%] text-text-primary text-15-500 py-[12px] px-[32px]"
    :class="setType"
  >
  <div class="container flex items-center">
    <UiLink to="/" class="header__left flex gap-[12px] items-center mr-[32px]">
        <img 
          class="max-w-[30px]"
          src="/public/img/logos/materio-logo.png"
          alt="logo" 
        >
      <div div class="logo-name text-logo">MATERIO</div>
    </UiLink>
    <nav class="menu flex-1">
      <ul class="menu__list flex items-center gap-[8px]">
        <li class="menu__item px-[10px]">
          <UiLink>Home</UiLink>
        </li>
        <li class="menu__item px-[10px]">
          <UiLink>Features</UiLink>
        </li>
        <li class="menu__item px-[10px]">
          <UiLink>Team</UiLink>
        </li>
        <li class="menu__item px-[10px]">
          <UiLink>FAQ</UiLink>
        </li>
        <li class="menu__item px-[10px]">
          <UiLink>Contact us</UiLink>
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
  </div>
</template>
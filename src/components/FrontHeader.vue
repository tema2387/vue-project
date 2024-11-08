<script setup>
import { ref, computed, watch, onMounted } from 'vue';

// icons
import MoonClearIcon from '@/components/UI/svg/MoonClearIcon.vue';
import ArrowDownSIcon from '@/components/UI/svg/ArrowDownSIcon.vue';
import ShoppingCartIcon from '@/components/UI/svg/ShoppingCartIcon.vue';

// type can be 'fixed' or without value
const props = defineProps({
  type: {
    type: String,
    default() {
      return '';
    }
  }
})

// js
import activeDarkTheme from '@/modules/changeTheme.js';
import { navList, hiddenNavList, loadWindowWidth } from '@/modules/adaptiveHeaderMenu';

onMounted(() => {
  loadWindowWidth();
})

const typeFixed = 'fixed border border-t-0 border-paper-bg/[75%] rounded-b-md top-0 left-0 right-0 m-auto max-w-[1140px]';
const dropdownMenuOpen = ref(false);
const dropdownMenu = ref(null);

function toggleDropdown() {
  dropdownMenuOpen.value = !dropdownMenuOpen.value;
}

function clickOutside(event) {
  if(!dropdownMenu.value.contains(event.target)) {
    dropdownMenuOpen.value = false;
  }
}

watch(dropdownMenuOpen, (newValue) => {
  if(newValue) {
    document.addEventListener('click', clickOutside);
  } else {
    document.removeEventListener('click', clickOutside);
  }
})

const setType = computed(() => {
  return props.type === 'fixed' ? typeFixed : '';
})
</script>
<template>
  <div 
    class="header z-[99] bg-paper-bg/[64%] text-text-primary text-15-500 py-[12px] px-[20px] md:px-[32px]"
    :class="setType"
  >
    <div class="flex items-center gap-[20px] sm:gap-[32px] max-w-[1140px]">
      <UiLink 
        :href="'/'" 
        class="header__left flex gap-[0px] sm:gap-[12px] items-center"
      >
        <img 
          class="max-w-[30px]"
          src="/img/logos/materio-logo.png"
          alt="logo" 
        >
        <div div class="logo-name hidden sm:block text-logo">MATERIO</div>
      </UiLink>
      <nav class="menu flex-grow flex-shrink">
        <ul class="menu__list flex items-center gap-[20px]">
          <li 
            v-for="nav in navList" 
            class="menu__item"
          >
            <UiLink :href="nav.link">{{ nav.name }}</UiLink>
          </li>
          <li 
            v-if="hiddenNavList.length" 
            class="menu__item relative duration-200 cursor-pointer"
            ref="dropdownMenu"
          > 
            <div @click="toggleDropdown" class="flex items-center gap-[8px]">
              Pages
              <ArrowDownSIcon class="duration-200" :class="{'rotate-180': dropdownMenuOpen}" />
            </div>
              <div v-if="dropdownMenuOpen" class="w-max rounded-md border py-[10px] flex flex-col border-devider absolute bg-paper-bg top-[150%]">
                <UiLink v-for="nav in hiddenNavList" :href="nav.link" class="px-[20px] py-[10px] hover:bg-secondary-opacity/[16%] hover:opacity-100">{{ nav.name }}</UiLink>
              </div>
          </li>
        </ul>
      </nav>
      <div class="header__right flex-shrink-0 flex justify-end items-center">
        <MoonClearIcon
          class="cursor-pointer mr-[24px]" 
          @click="activeDarkTheme = !activeDarkTheme" 
        />
        <UiButton :text="'md'">
          <div class="flex items-center gap-[6px]">
            <ShoppingCartIcon />
            <span class="hidden sm:block">Purchase Now</span>
          </div>
        </UiButton>
      </div>
    </div>
  </div>
</template>
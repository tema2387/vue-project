<script lang="ts" setup>
import { ref, onMounted, watch, provide, onUnmounted } from 'vue';
// Компоненты
import BlockAdminNav from '@/components/blocks/BlockAdminNav.vue';
import AdminHeader from '@/components/AdminHeader.vue';
import AdminFooter from '@/components/AdminFooter.vue';
// Иконки
import CloseLineIcon from '@/components/UI/svg/CloseLineIcon.vue';
// Иконки: Основной верхний раздел навигации
import HomeSmileIcon from '@/components/UI/svg/HomeSmileIcon.vue';
import PagesTitleIcon from '@/components/UI/svg/PagesTitleIcon.vue';
// Иконки: Раздел Apps & Pages
import ShoppingBagIcon from '@/components/UI/svg/ShoppingBagIcon.vue';
import GraduationCapIcon from '@/components/UI/svg/GraduationCapIcon.vue';
import CarIcon from '@/components/UI/svg/CarIcon.vue';
import MailOpenIcon from '@/components/UI/svg/MailOpenIcon.vue';
import WechatIcon from '@/components/UI/svg/WechatIcon.vue';
import CalendarIcon from '@/components/UI/svg/CalendarIcon.vue';
import DragDropIcon from '@/components/UI/svg/DragDropIcon.vue';
import BillIcon from '@/components/UI/svg/BillIcon.vue';
import UserLineIcon from '@/components/UI/svg/UserLineIcon.vue';
import LockLine from '@/components/UI/svg/LockLine.vue';
// Хранилище
import { mainNav, appsAndPages } from '@/store/adminNavStore';

const mainNavIcons = [HomeSmileIcon, PagesTitleIcon];
const appsAndPagesIcons = [ShoppingBagIcon, GraduationCapIcon, CarIcon, MailOpenIcon, WechatIcon, CalendarIcon, DragDropIcon, BillIcon, UserLineIcon, LockLine];

const layoutChanged = ref<boolean>(false);
const adminMenuHidden = ref<boolean>(false);
const burgerMenuOpened = ref<boolean>(false);
const adminMenu = ref<HTMLElement | null>(null);

provide('menuHidden', adminMenuHidden);

onMounted((): void => {
  adminMenuHidden.value = true;
})

onUnmounted((): void => {
  window.removeEventListener('click', clickOutsideBurgerMenu);
})

window.addEventListener('resize', () => {
  if(window.innerWidth < 1140 && !burgerMenuOpened.value) {
    adminMenuHidden.value = true;
    layoutChanged.value = false;
  } else if (window.innerWidth > 1140) {
    burgerMenuOpened.value = false;
  }
})

function toggleLayout(): void {
  layoutChanged.value ? layoutChanged.value = false : layoutChanged.value = true;
}

function closeBurgerMenu(): void {
  adminMenuHidden.value = true;
  layoutChanged.value = false;
  burgerMenuOpened.value = false;
}

const clickOutsideBurgerMenu = (event: Event): void => {
  const target = (event.target as Node);

  if(adminMenu.value && !adminMenu.value.contains(target)) {
    closeBurgerMenu();
  }
}

watch(burgerMenuOpened, (newValue: boolean): void => {
  if(newValue) {
    window.addEventListener('click', clickOutsideBurgerMenu);
  } else {
    window.removeEventListener('click', clickOutsideBurgerMenu);
  }
})

function showAdminMenuDesktop(): void {
  if(!layoutChanged.value) {
    adminMenuHidden.value = false;
  }
}

function hideAdminMenuDesktop(): void {
  if(!layoutChanged.value) {
    adminMenuHidden.value = true;
  }
}

function openBurgerMenu(): void {
  adminMenuHidden.value = false;
  layoutChanged.value = true;
  burgerMenuOpened.value = true;
}
</script>
<template>
  <div class="admin-layout">
    <div
      ref="adminMenu" 
      @mouseenter="showAdminMenuDesktop" 
      @mouseleave="hideAdminMenuDesktop"
      class="admin-layout-menu translate-x-[-100%] lg:translate-x-0 transition-all duration-500 overflow-hidden max-w-[68px] bg-body-bg fixed z-[100] h-full flex flex-col w-full"
      :class="{ '!max-w-[260px]': !adminMenuHidden, 'shadow-sm': !adminMenuHidden, '!translate-x-0': !adminMenuHidden }"
    >
      <div
        class="logo transition-all duration-500 flex items-center mr-[16px] pl-[22px] py-[21px]"
        :class="{ '!pl-[18px]': adminMenuHidden, '!mr-[0px]': adminMenuHidden }"
      >
        <UiLink
          :link="'/'"
          class="flex flex-grow gap-[12px] items-center"
        >  
          <img 
            class="max-w-[30px]"
            src="/img/logos/materio-logo.png"
            alt="logo" 
          >
          <div v-if="!adminMenuHidden" class="logo-name text-logo">MATERIO</div>
        </UiLink>
        <div 
          v-if="!adminMenuHidden"
          class="w-[20px] h-[20px] hidden lg:block cursor-pointer bg-transparent border-2 border-text-secondary rounded-full relative after:absolute after:content-[''] after:w-[10px] after:h-[10px] after:left-[50%] after:top-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:bg-text-secondary after:hidden after:rounded-full"
          @click="toggleLayout"
          :class="{ 'after:!block': layoutChanged}"
        />
        <CloseLineIcon class="block cursor-pointer lg:hidden" @click="closeBurgerMenu" />
      </div>
      <ul class="admin-layout-menu__list overflow-y-auto transition-all flex flex-col gap-[20px]">
        <li class="admin-layout-menu__item flex flex-col gap-[8px]">
          <BlockAdminNav
            v-for="(el, index) in mainNav"
            :key="index"
            :title="el.title"
            :list="el.list"
            :link="el.link"
            :menuHidden="adminMenuHidden"
          >
            <template v-slot:icon>
              <component :is="mainNavIcons[index]"></component>
            </template>
          </BlockAdminNav>
        </li>
        <li class="admin-layout-menu__item flex flex-col gap-[8px]">
          <div class="admin-layout-menu__item-section flex items-center justify-center text-text-disabled h-[34px]">
            <div v-if="!adminMenuHidden" class="flex items-center w-full gap-[10px]">
              <span class="h-[1px] bg-text-disabled flex-shrink-0 w-[22px]"></span>
              <span class="text-caption flex-shrink-0">APPS & PAGES</span>
              <span class="h-[1px] bg-text-disabled w-full flex-grow"></span>
            </div>
            <span v-else class="h-[1px] bg-text-disabled w-[22px]"></span>
          </div>
          <BlockAdminNav
            v-for="(el, index) in appsAndPages"
            :key="index"
            :title="el.title"
            :list="el.list"
            :link="el.link"
            :menuHidden="adminMenuHidden"
          >
            <template v-slot:icon>
              <component :is="appsAndPagesIcons[index]"></component>
            </template>
          </BlockAdminNav>
        </li>
      </ul>
    </div>
    <div 
      class="admin-layout__wrapper-content transition-all lg:pl-[68px] duration-500" 
      :class="{ '!pl-[260px]': layoutChanged && !burgerMenuOpened }"
    >
      <div class="admin-layout__content px-[20px] lg:px-[24px] flex flex-col bg-body-bg h-[100vh] w-full">
        <AdminHeader @clickOnBurger="openBurgerMenu" />
        <div class="admin-layout__page-content bg-paper-bg rounded-md shadow-sm my-[24px] flex-grow">
          <slot></slot>
        </div>
        <AdminFooter />
      </div>
    </div>
  </div>
</template>
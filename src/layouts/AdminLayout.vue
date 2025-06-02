<script lang="ts" setup>
import { ref, watch, provide, onUnmounted } from 'vue';
// Компоненты
import BlockAdminMenu from '@/components/blocks/BlockAdminMenu.vue';
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
import { mainNav, appsAndPages } from '@/store/adminMenuStore';

const mainNavIcons = [HomeSmileIcon, PagesTitleIcon];
const appsAndPagesIcons = [ShoppingBagIcon, GraduationCapIcon, CarIcon, MailOpenIcon, WechatIcon, CalendarIcon, DragDropIcon, BillIcon, UserLineIcon, LockLine];

const layoutChanged = ref<boolean>(false);
const adminMenuHidden = ref<boolean>(true);
const mobileMenuOpened = ref<boolean>(false);
const adminMenu = ref<HTMLElement | null>(null);

provide('menuHidden', adminMenuHidden);

onUnmounted((): void => {
  window.removeEventListener('click', clickOutsideBurgerMenu);
})

window.addEventListener('resize', () => {
  if(window.innerWidth < 1140 && !mobileMenuOpened.value) {
    adminMenuHidden.value = true;
    layoutChanged.value = false;
  } else if (window.innerWidth > 1140) {
    mobileMenuOpened.value = false;
  }
})

function toggleLayout(): void {
  layoutChanged.value ? layoutChanged.value = false : layoutChanged.value = true;
}

function closeBurgerMenu(): void {
  adminMenuHidden.value = true;
  layoutChanged.value = false;
  mobileMenuOpened.value = false;
}

const clickOutsideBurgerMenu = (event: Event): void => {
  const target = (event.target as Node);

  if(adminMenu.value && !adminMenu.value.contains(target)) {
    closeBurgerMenu();
  }
}

watch(mobileMenuOpened, (newValue: boolean): void => {
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

function openMobileMenu(): void {
  adminMenuHidden.value = false;
  layoutChanged.value = true;
  mobileMenuOpened.value = true;
}
</script>
<template>
  <div class="admin-layout">
    <div
      ref="adminMenu" 
      @mouseenter="showAdminMenuDesktop" 
      @mouseleave="hideAdminMenuDesktop"
      class="admin-layout-menu lg:translate-x-0 duration-200 overflow-hidden bg-body-bg fixed z-[100] h-full flex flex-col w-full max-sm:max-w-full"
      :class="[ !adminMenuHidden ? 'max-w-[260px] shadow-sm' : 'max-w-[68px]', mobileMenuOpened  ? 'translate-x-0' : 'translate-x-[-100%]']"
    >
      <div
        class="logo transition-all duration-200 flex items-center py-[21px]"
        :class="[ adminMenuHidden ? 'pl-[18px] mr-[0px]' : 'pl-[22px] mr-[16px]' ]"
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
          <div v-show="!adminMenuHidden" class="logo-name text-logo">MATERIO</div>
        </UiLink>
        <div 
          v-show="!adminMenuHidden"
          class="layout-dot w-[20px] h-[20px] hidden lg:block cursor-pointer bg-transparent border-2 border-text-secondary rounded-full relative after:absolute after:content-[''] after:w-[10px] after:h-[10px] after:left-[50%] after:top-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:bg-text-secondary after:rounded-full"
          @click="toggleLayout"
          :class="[ layoutChanged ? 'after:block' : 'after:hidden' ]"
        />
        <CloseLineIcon class="block cursor-pointer lg:hidden" @click="closeBurgerMenu" />
      </div>
      <ul class="admin-layout-menu__list overflow-y-auto transition-all flex flex-col gap-[20px]">
        <li class="admin-layout-menu__item flex flex-col gap-[8px]">
          <BlockAdminMenu
            v-for="(item, index) in mainNav"
            :key="index"
            :title="item.title"
            :list="item.list"
            :link="item.link"
          >
            <template v-slot:icon>
              <component :is="mainNavIcons[index]"></component>
            </template>
          </BlockAdminMenu>
        </li>
        <li class="admin-layout-menu__item flex flex-col gap-[8px]">
          <div class="admin-layout-menu__item-section flex items-center justify-center text-text-disabled h-[34px]">
            <div v-show="!adminMenuHidden" class="flex items-center w-full gap-[10px]">
              <span class="h-[1px] bg-text-disabled flex-shrink-0 w-[22px]"></span>
              <span class="text-caption flex-shrink-0">APPS & PAGES</span>
              <span class="h-[1px] bg-text-disabled w-full flex-grow"></span>
            </div>
            <span v-show="adminMenuHidden" class="h-[1px] bg-text-disabled w-[22px]"></span>
          </div>
          <BlockAdminMenu
            v-for="(item, index) in appsAndPages"
            :key="index"
            :title="item.title"
            :list="item.list"
            :link="item.link"
          >
            <template v-slot:icon>
              <component :is="appsAndPagesIcons[index]"></component>
            </template>
          </BlockAdminMenu>
        </li>
      </ul>
    </div>
    <div 
      class="admin-layout__wrapper-content duration-200" 
      :class="[ layoutChanged && !mobileMenuOpened ? 'pl-[260px]' : 'lg:pl-[68px]' ]"
    >
      <div class="admin-layout__content px-[20px] lg:px-[24px] flex flex-col bg-body-bg h-[100vh] w-full">
        <AdminHeader @clickOnBurger="openMobileMenu" />
        <div class="admin-layout__page-content my-[24px] flex-grow">
          <slot></slot>
        </div>
        <AdminFooter />
      </div>
    </div>
  </div>
</template>
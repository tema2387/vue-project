<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
// Иконки
import MoonClearIcon from '@/components/UI/svg/MoonClearIcon.vue';
import ArrowDownSIcon from '@/components/UI/svg/ArrowDownSIcon.vue';
import ShoppingCatIcon from '@/components/UI/svg/ShoppingCartIcon.vue';
import SunIcon from '@/components/UI/svg/SunIcon.vue';
import CloseLineIcon from '@/components/UI/svg/CloseLineIcon.vue';
import CircleIcon from '@/components/UI/svg/CircleIcon.vue';
import PagesTitleIcon from '@/components/UI/svg/PagesTitleIcon.vue';
// Модули
import { activeDarkTheme, changeTheme } from '@/modules/changeTheme.js';
import { home, features, team, faq, contact, visibleSection } from '@/modules/observeSections.js';

const route = useRoute();
const router = useRouter();

const pagesMenuDesktop = ref(false);
const pagesMenu = ref(false);
const burgerMenuOpened = ref(false);

const itemActive = ref(false);
const menuActive = ref(false);

let timeout;

function scrollToSection(section) {
  if(route.path !== '/landing') {
    router.push('/landing');
  }
  
  burgerMenuOpened.value = false;
  section?.scrollIntoView({ behavior: 'smooth' });
}

function openBurgerMenu() {
  burgerMenuOpened.value = true;
}

function closeBurgerMenu() {
  burgerMenuOpened.value = false;
}

function mouseItemEnter() {
  clearTimeout(timeout);

  pagesMenuDesktop.value = true;
  itemActive.value = true;
}

function mouseMenuEnter() {
  clearTimeout(timeout);

  pagesMenuDesktop.value = true;
  menuActive.value = true;
}

function mouseItemLeave() {
  itemActive.value = false;

  timeout = setTimeout(() => {
    if(!itemActive.value && !menuActive.value) {
      pagesMenuDesktop.value = false;
    }
  }, 1000)
}

function mouseMenuLeave() {
  menuActive.value = false;

  timeout = setTimeout(() => {
    if(!itemActive.value && !menuActive.value) {
      pagesMenuDesktop.value = false;
    }
  }, 1000)
}
</script>
<template>
  <div class="header h-[62px] flex items-center z-[100] fixed border border-t-0 border-paper-bg/[75%] rounded-b-md top-0 left-0 right-0 m-auto max-w-[1140px] bg-paper-bg/[64%] text-15-500">
    <div class="header__content flex flex-grow relative items-center gap-[20px] px-[20px] lg:px-[32px]">
      <div @click="openBurgerMenu" class="burger cursor-pointer w-[20px] h-[16px] flex flex-col justify-between lg:hidden">
        <span class="h-[2px] bg-text-primary rounded-md"></span>
        <span class="h-[2px] bg-text-primary rounded-md"></span>
        <span class="h-[2px] bg-text-primary rounded-md"></span>
      </div>
      <UiLink 
        :link="'/'"
        class="header__left flex gap-[0px] sm:gap-[12px] items-center max-lg:flex-1"
      >
        <img 
          class="max-w-[30px]"
          src="/img/logos/materio-logo.png"
          alt="logo" 
        >
        <div class="logo-name hidden sm:block text-logo">MATERIO</div>
      </UiLink>
      <nav class="menu flex-grow flex-shrink hidden lg:block">
        <ul class="menu__list flex items-center gap-[20px]">
          <li 
            class="menu__item cursor-pointer" 
            @click="scrollToSection(home)" 
            :class="{ 'text-primary-500': visibleSection?.target === home }"
          >
            Home
          </li>
          <li 
            class="menu__item cursor-pointer" 
            @click="scrollToSection(features)" 
            :class="{ 'text-primary-500': visibleSection?.target === features }"
          >
            Features
          </li>
          <li 
            class="menu__item cursor-pointer" 
            @click="scrollToSection(team)" 
            :class="{ 'text-primary-500': visibleSection?.target === team }"
          >
            Team
          </li>
          <li 
            class="menu__item cursor-pointer" 
            @click="scrollToSection(faq)" :class="{ 'text-primary-500': visibleSection?.target === faq }"
          >
            FAQ
          </li>
          <li 
            class="menu__item cursor-pointer" 
            @click="scrollToSection(contact)" 
            :class="{ 'text-primary-500': visibleSection?.target === contact }"
          >
            Contact us
          </li>
          <li 
            @mouseenter="mouseItemEnter" 
            @mouseleave="mouseItemLeave" 
            class="menu__item flex items-center cursor-pointer"
          >
            <div>Pages</div>
            <ArrowDownSIcon :class="{'rotate-180': pagesMenuDesktop}" />
          </li>
        </ul>
      </nav>
      <div class="header__right flex-shrink-0 flex justify-end gap-[20px] sm:gap-[24px] items-center">
        <UiButton 
          :type="'inline-text'" 
          class="flex items-center"
          @click="changeTheme"
        >
          <MoonClearIcon v-if="activeDarkTheme" />
          <SunIcon v-else />
        </UiButton>
        <div class="header__right-btns flex items-center gap-[20px] lg:gap-[10px]">
          <UiLink :link="'#'" class="hover:!opacity-100">
            <UiButton :size="'md'" :text="'md'">
              <ShoppingCatIcon />
              <span class="hidden lg:block">Purchase Now</span>
            </UiButton>
          </UiLink>
        </div>
      </div>
    </div>
    <Transition name="opacity">
      <div  
        @mouseenter="mouseMenuEnter"
        @mouseleave="mouseMenuLeave"
        v-if="pagesMenuDesktop" 
        class="pages-menu-desktop flex gap-[70px] left-[50%] top-[100%] translate-x-[-50%] absolute w-full p-[20px] rounded-md bg-paper-bg"
      >
        <div class="pages">
          <div class="flex items-center gap-[8px]">
            <div class="bg-primary-500 p-[5px] rounded-md">
              <PagesTitleIcon class="text-paper-bg" />
            </div>
            <span>Pages</span>
          </div>
          <ul class="list mt-[20px] flex flex-col gap-[20px]">
            <li class="item">
              <UiLink :link="'/landing'" class="flex items-center">
                <CircleIcon />
                <span>Landing</span>
              </UiLink>
            </li>
            <li class="item">
              <UiLink :link="'/payment'" class="flex items-center">
                <CircleIcon />
                <span>Payment</span>
              </UiLink>
            </li>
            <li class="item">
              <UiLink :link="'/pricing'" class="flex items-center">
                <CircleIcon />
                <span>Pricing</span>
              </UiLink>
            </li>
            <li class="item">
              <UiLink :link="'/help'" class="flex items-center">
                <CircleIcon />
                <span>Help center</span>
              </UiLink>
            </li>
            <li class="item">
              <UiLink :link="'/checkout'" class="flex items-center">
                <CircleIcon />
                <span>Checkout</span>
              </UiLink>
            </li>
          </ul>
        </div>
        <div class="auth-demo-pages">
          <div class="flex items-center gap-[8px]">
            <div class="bg-primary-500 p-[5px] rounded-md">
              <PagesTitleIcon class="text-paper-bg" />
            </div>
            <span>Auth pages</span>
          </div>
          <ul class="list mt-[20px] flex flex-col gap-[20px]">
            <li class="item">
              <UiLink :link="'/auth-demo'" class="flex items-center">
                <CircleIcon />
                <span>Auth demo</span>
              </UiLink>
            </li>
            <li class="item">
              <UiLink :link="'/registration-demo'" class="flex items-center">
                <CircleIcon />
                <span>Registration demo</span>
              </UiLink>
            </li>
          </ul>
        </div>
        <div class="other-pages">
          <div class="flex items-center gap-[8px]">
            <div class="bg-primary-500 p-[5px] rounded-md">
              <PagesTitleIcon class="text-paper-bg" />
            </div>
            <span>Other pages</span>
          </div>
          <ul class="list mt-[20px] flex flex-col gap-[20px]">
            <li class="item">
              <UiLink :link="'/not-found'" class="flex items-center">
                <CircleIcon />
                <span>Not found page</span>
              </UiLink>
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </div>
  <Transition name="burger-menu">
    <div v-if="burgerMenuOpened" class="burger-menu overflow-y-auto fixed flex justify-between gap-[20px] p-[20px] left-0 top-0 h-[100vh] max-w-[100%] sm:max-w-[300px] w-full bg-paper-bg z-[100]">
      <ul class="menu__list flex flex-col top-[200px] gap-[20px]">
        <li @click="scrollToSection(home)" class="menu__item flex items-center cursor-pointer">
          <CircleIcon></CircleIcon>
          <div :class="{ 'text-primary-500': visibleSection?.target === home }">Home</div>
        </li>
        <li @click="scrollToSection(features)" class="menu__item flex items-center cursor-pointer">
          <CircleIcon></CircleIcon>
          <div :class="{ 'text-primary-500': visibleSection?.target === features }">Features</div>
        </li>
        <li @click="scrollToSection(team)" class="menu__item flex items-center cursor-pointer">
          <CircleIcon></CircleIcon>
          <div :class="{ 'text-primary-500': visibleSection?.target === team }">Team</div>
        </li>
        <li @click="scrollToSection(faq)" class="menu__item flex items-center cursor-pointer">
          <CircleIcon></CircleIcon>
          <div :class="{ 'text-primary-500': visibleSection?.target === faq }">FAQ</div>
        </li>
        <li @click="scrollToSection(contact)" class="menu__item flex items-center cursor-pointer">
          <CircleIcon></CircleIcon>
          <div :class="{ 'text-primary-500': visibleSection?.target === contact }">Contact us</div>
        </li>
        <li class="menu__item">
          <div @click="pagesMenu = !pagesMenu" class="flex items-center cursor-pointer">
            <CircleIcon></CircleIcon>
            <div>Pages</div>
            <ArrowDownSIcon :class="{'rotate-180': pagesMenu}" />
          </div>
          <div v-if="pagesMenu" class="pages-menu mt-[20px] flex flex-col gap-[20px]">
            <div class="pages">
              <div class="flex items-center gap-[8px]">
                <div class="bg-primary-500 p-[5px] rounded-md">
                  <PagesTitleIcon class="text-paper-bg" />
                </div>
                <span>Pages</span>
              </div>
              <ul class="list mt-[20px] flex flex-col gap-[20px]">
                <li class="item">
                  <UiLink :link="'/landing'" class="flex items-center">
                    <CircleIcon />
                    <span>Landing</span>
                  </UiLink>
                </li>
                <li class="item">
                  <UiLink :link="'/payment'" class="flex items-center">
                    <CircleIcon />
                    <span>Payment</span>
                  </UiLink>
                </li>
                <li class="item">
                  <UiLink :link="'/pricing'" class="flex items-center">
                    <CircleIcon />
                    <span>Pricing</span>
                  </UiLink>
                </li>
                <li class="item">
                  <UiLink :link="'/help'" class="flex items-center">
                    <CircleIcon />
                    <span>Help center</span>
                  </UiLink>
                </li>
                <li class="item">
                  <UiLink :link="'/checkout'" class="flex items-center">
                    <CircleIcon />
                    <span>Checkout</span>
                  </UiLink>
                </li>
              </ul>
            </div>
            <div class="auth-pages">
              <div class="flex items-center gap-[8px]">
                <div class="bg-primary-500 p-[5px] rounded-md">
                  <PagesTitleIcon class="text-paper-bg" />
                </div>
                <span>Auth pages</span>
              </div>
              <ul class="list mt-[20px] flex flex-col gap-[20px]">
                <li class="item">
                    <UiLink :link="'/auth-demo'" class="flex items-center">
                    <CircleIcon />
                    <span>Auth demo</span>
                  </UiLink>
                </li>
                <li class="item">
                  <UiLink :link="'/registration-demo'" class="flex items-center">
                    <CircleIcon />
                    <span>Registration demo</span>
                  </UiLink>
                </li>
              </ul>
            </div>
            <div class="other-pages">
              <div class="flex items-center gap-[8px]">
                <div class="bg-primary-500 p-[5px] rounded-md">
                  <PagesTitleIcon class="text-paper-bg" />
                </div>
                <span>Other pages</span>
              </div>
              <ul class="list mt-[20px] flex flex-col gap-[20px]">
                <li class="item">
                  <UiLink :link="'/not-found'" class="flex items-center">
                    <CircleIcon />
                    <span>Not found page</span>
                  </UiLink>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
      <CloseLineIcon @click="closeBurgerMenu" class="cursor-pointer"></CloseLineIcon>
    </div>
  </Transition>
</template>
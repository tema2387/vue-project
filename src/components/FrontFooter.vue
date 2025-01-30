<script lang="ts" setup>
// Компоненты
import UiInputText from '@/components/UI/UiInputText.vue';
// Иконки
import FacebookIcon from '@/components/UI/svg/FacebookIcon.vue';
import GithubIcon from '@/components/UI/svg/GithubIcon.vue';
import GoogleIcon from '@/components/UI/svg/GoogleIcon.vue';
import TwitterIcon from '@/components/UI/svg/TwitterIcon.vue';
</script>
<template>
  <div class="footer m-0 dark">
    <div class="footer__top px-[20px] bg-footer-bg bg-no-repeat bg-center-top bg-cover">
      <div class="footer__top-content container flex justify-between flex-col lg:flex-row py-[48px] gap-[64px]">
        <div class="footer__left">
          <div class="footer__left-content flex flex-col gap-[24px]">
            <UiLink 
              :link="'/'" 
              class="header__left flex gap-[12px] items-center mr-[32px]"
            >
              <img 
                class="max-w-[30px]"
                src="/img/logos/materio-logo.png"
                alt="logo" 
              >
              <div div class="logo-name text-logo text-white">MATERIO</div>
            </UiLink>
            <p class="footer__description max-w-[372px] text-white/[78%]">
              Most Powerful & Comprehensive 🤩 React NextJS Admin Template with Elegant Material Design & Unique Layouts.
            </p>
            <div class="footer__form flex gap-[16px] max-sm:flex-col">
              <UiInputText 
                :id="'footer-mail'" 
                :type="'outlined'" 
                :label="'Subscribe to newsletter'" 
                :placeholder="'test@mail'"
                :size="'sm'"
                class="flex-1"
              />
              <UiButton>Subscribe</UiButton>
            </div>
          </div>
        </div>
        <div class="footer__right flex gap-[64px] justify-between">
          <div class="footer__pages min-w-[184px] hidden lg:block">
            <div class="footer__pages-title text-white">
              Pages
            </div>
            <ul class="footer__pages-list mt-[24px] flex flex-col gap-[16px] text-white/[78%]">
              <li class="footer__pages-item">
                <UiLink :link="'/front/pricing'">
                  Pricing
                </UiLink>
              </li>
              <li class="footer__pages-item">
                <UiLink :link="'/front/payment'">
                  Payment
                </UiLink>
              </li>
              <li class="footer__pages-item">
                <UiLink  iLink :link="'/front/help-center'">
                  Help Center
                </UiLink>
              </li>
              <li class="footer__pages-item">
                <UiLink :link="'/front/checkout'">
                  Checkout
                </UiLink>
              </li>
            </ul>
          </div>
          <div class="footer__products min-w-[184px] hidden lg:block">
            <div class="footer__products-title text-white">
              Products
            </div>
            <ul class="footer__products-list mt-[24px] flex flex-col gap-[16px] text-white/[78%]">
              <li class="footer__products-item">
                <UiLink :link="'#'">Test</UiLink>
              </li>
              <li class="footer__products-item">
                <UiLink :link="'#'">Test</UiLink>
              </li>
              <li class="footer__products-item">
                <UiLink :link="'#'">Test</UiLink>
              </li>
              <li class="footer__products-item">
                <UiLink :link="'#'">Test</UiLink>
              </li>
            </ul>
          </div>
          <div class="footer__download">
            <div class="footer__download-title text-white">
              Download our app
            </div>
            <div class="footer__download-btns mt-[24px] flex flex-col gap-[16px] text-white/[78%]">
              <UiButton>
                <div class="flex items-center max-w-max gap-[24px]">
                  <img 
                    src="/icon/apple-icon.svg" 
                    alt="apple-icon"
                  >
                  <div class="text-start text-13">
                    Download on the<br>
                    <span class="text-white/[92%] text-15-500">App Store</span>
                  </div>
                </div>
              </UiButton>
              <UiButton>
                <div class="flex items-center max-w-max gap-[24px]">
                  <img 
                    src="/icon/google-play-icon.svg" 
                    alt="google-play-icon"
                  >
                  <div class="text-start text-13">
                    Download on the<br>
                    <span class="text-white/[92%] text-15-500">Google Play</span>
                  </div>
                </div>
              </UiButton>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom px-[20px] bg-footer-bg-color py-[19px]">
      <div class="footer__bottom-content container flex justify-end text-white/[82%]">
        <div class="footer__socials text-white/[78%] flex items-center gap-[24px]">
          <UiLink 
            :type="'outside'" 
            :link="'#'"
          >
            <GithubIcon />
          </UiLink>
          <UiLink 
            :type="'outside'" 
            :link="'#'"
          >
            <FacebookIcon />
          </UiLink>
          <UiLink 
            :type="'outside'" 
            :link="'#'"
          >
            <TwitterIcon />
          </UiLink>
          <UiLink 
            :type="'outside'" 
            :link="'#'"
          >
            <GoogleIcon />
          </UiLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// Components
import UiInputText from '@/components/UI/UiInputText.vue';

// Icons
import FacebookIcon from '@/components/UI/svg/FacebookIcon.vue';
import GithubIcon from '@/components/UI/svg/GithubIcon.vue';
import GoogleIcon from '@/components/UI/svg/GoogleIcon.vue';
import TwitterIcon from '@/components/UI/svg/TwitterIcon.vue';

</script>
<template>
  <div class="footer m-0 dark">
    <div class="footer__top bg-footer-bg-color">
      <div class="footer__top-content container flex justify-between py-[48px] gap-[64px]">
        <div class="footer__left flex flex-col gap-[24px]">
          <UiLink 
            :href="'/'" 
            class="header__left flex gap-[12px] items-center mr-[32px]"
          >
            <img 
              class="max-w-[30px]"
              src="/public/img/logos/materio-logo.png"
              alt="logo" 
            >
            <div div class="logo-name text-logo text-white">MATERIO</div>
          </UiLink>
          <p class="footer__description max-w-[372px] text-white/[78%]">
            Most Powerful & Comprehensive 🤩 React NextJS Admin Template with Elegant Material Design & Unique Layouts.
          </p>
          <div class="footer__form flex gap-[16px]">
            <UiInputText 
              :id="'footer-mail'" 
              :type="'outlined'" 
              :label="'Subscribe to newsletter'" 
              :placeholder="'aboba@mail'"
              :size="'sm'"
              :label-bg-color="'footer'"
              class="max-w-[230px]"
            />
            <UiButton>Subscribe</UiButton>
          </div>
        </div>
        <div class="footer__pages">
          <div class="footer__pages-title text-white">
            Pages
          </div>
          <ul class="footer__pages-list mt-[24px] flex flex-col gap-[16px] text-white/[78%]">
            <li class="footer__pages-item">
              <UiLink>
                Pricing
              </UiLink>
            </li>
            <li class="footer__pages-item">
              <UiLink>
                Payment
              </UiLink>
            </li>
            <li class="footer__pages-item">
              <UiLink>
                Maintenance
              </UiLink>
            </li>
            <li class="footer__pages-item">
              <UiLink>
                Coming Soon
              </UiLink>
            </li>
          </ul>
        </div>
        <div class="footer__products">
          <div class="footer__products-title text-white">
            Products
          </div>
          <ul class="footer__products-list mt-[24px] flex flex-col gap-[16px] text-white/[78%]">
            <li class="footer__products-item">
              <UiLink>Page Builder</UiLink>
            </li>
            <li class="footer__products-item">
              <UiLink>Admin Dashboards</UiLink>
            </li>
            <li class="footer__products-item">
              <UiLink>UI Kits</UiLink>
            </li>
            <li class="footer__products-item">
              <UiLink>Illustrations</UiLink>
            </li>
          </ul>
        </div>
        <div class="footer__download">
          <div class="footer__download-title text-white">
            Download our app
          </div>
          <div class="footer__download-btns mt-[24px] flex flex-col gap-[16px] text-white/[78%]">
            <UiButton>
              <div class="flex items-center w-max gap-[24px]">
                <img 
                  src="/public/icon/apple-icon.svg" 
                  alt="apple-icon"
                >
                <div class="text-start text-13">
                  Download on the<br>
                  <span class="text-white/[92%] text-15-500">App Store</span>
                </div>
              </div>
            </UiButton>
            <UiButton>
              <div class="flex items-center w-max gap-[24px]">
                <img 
                  src="/public/icon/google-play-icon.svg" 
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
    <div class="footer__bottom bg-footer-bg-color py-[19px]">
      <div class="footer__bottom-content container flex justify-between text-white/[82%]">
        <div class="footer__disign text-13">
          © 2024, Made with <span class="text-error-main">❤️</span> by <span class="text-white/[92%] text-15">ThemeSelection</span> 
        </div>
        <div class="footer__socials text-white/[78%] flex items-center gap-[24px]">
          <UiLink>
            <GithubIcon />
          </UiLink>
          <UiLink>
            <FacebookIcon />
          </UiLink>
          <UiLink>
            <TwitterIcon />
          </UiLink>
          <UiLink>
            <GoogleIcon />
          </UiLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
// Компоненты
import AuthLayout from '@/layouts/AuthLayout.vue';
import UiInputText from '@/components/UI/UiInputText.vue';
import UiCheckbox from '@/components/UI/UiCheckbox.vue';

const passwordHidden = ref<boolean>(true);
</script>
<template>
  <AuthLayout>
    <div class="auth-page p-[28px] sm:p-[48px] max-w-[460px] w-full rounded-md shadow-md bg-paper-bg">
      <div class="flex items-center justify-center gap-[12px]">
        <img src="/img/logos/materio-logo.png" class="max-w-[35px]" />
        <div class="text-logo">Materio</div>
      </div>
      <div class="auth__title mt-[24px]">
        <h4>Welcome to Materio! 👋🏻</h4>
        <div class="text-text-secondary">Please sign-in to your account and start the adventure</div>
      </div>
      <div class="auth__form mt-[20px] flex flex-col gap-[20px]">
        <UiInputText 
          :type="'outlined'"
          :id="'email'" 
          :size="'md'" 
          :label="'Email'"
        />
        <UiInputText 
          :type="'outlined'"
          :id="'password'" 
          :size="'md'"
          :eyeIcon="true" 
          :label="'Password'"
          :passwordInput="passwordHidden"
          @toggleInput="passwordHidden = !passwordHidden"
        />
        <div class="flex flex-col sm:flex-row gap-y-[10px] justify-between">
          <UiCheckbox :id="'remember-account'" :name="'remember-account'">Remember Me</UiCheckbox>
          <UiLink :link="'#'" class="text-primary-500">Forgot Password?</UiLink>
        </div>
        <UiButton :size="'md'">Login</UiButton>
      </div>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-[5px] gap-y-[10px] mt-[20px]">
        <span>New on our platform?</span>
        <UiLink 
          :link="'/demo/registration'" 
          class="text-primary-500"
        >
          Create an account
        </UiLink>
      </div>
      <div class="mt-[20px] flex items-center gap-[8px]">
        <span class="h-[1px] bg-devider w-full"></span>
        <span>or</span>
        <span class="h-[1px] bg-devider w-full"></span>
      </div>
      <div class="mt-[20px] flex justify-center items-center gap-[24px]">
        <UiLink :type="'outside'" :link="'#'"><img src="/icon/bxl-facebook.svg" alt="facebook-icon" /></UiLink>
        <UiLink :type="'outside'" :link="'#'"><img src="/icon/bxl-twitter.svg" alt="twitter-icon" /></UiLink>
        <UiLink :type="'outside'" :link="'#'"><img src="/icon/bxl-github.svg" alt="github-icon" /></UiLink>
        <UiLink :type="'outside'" :link="'#'"><img src="/icon/bxl-google.svg" alt="google-icon" /></UiLink>
      </div>
    </div>
  </AuthLayout>
</template>
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
    <div class="registration-page p-[28px] sm:p-[48px] max-w-[460px] w-full rounded-md shadow-md bg-paper-bg">
      <div class="flex items-center justify-center gap-[12px]">
        <img src="/img/logos/materio-logo.png" class="max-w-[35px]" />
        <div class="text-logo">Materio</div>
      </div>
      <div class="registration__title mt-[24px]">
        <h4>Adventure starts here 🚀</h4>
        <div class="text-text-secondary">Make your app management easy and fun!</div>
      </div>
      <div class="registration__form mt-[20px] flex flex-col gap-[20px]">
        <UiInputText
          :type="'outlined'" 
          :id="'username'" 
          :size="'md'"
          :label="'Username'"
        />
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
          :label="'Password'"
          :eyeIcon="true"
          :passwordInput="passwordHidden"
          @toggleInput="passwordHidden = !passwordHidden"
        />
        <div class="flex flex-col sm:flex-row gap-[5px] gap-y-[10px]">
          <UiCheckbox :id="'agree'" :name="'agree'">I agree to</UiCheckbox>
          <UiLink :link="'#'" class="text-primary-500">privacy policy & terms</UiLink>
        </div>
        <UiButton :size="'md'">Sign Up</UiButton>
      </div>
      <div class="flex flex-col text-center sm:flex-row items-center justify-center gap-[5px] gap-y-[10px] mt-[20px]">
        <span>Already have an account?</span>
        <UiLink 
          :link="'/demo/auth'" 
          class="text-primary-500"
        >
          Sign in instead
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
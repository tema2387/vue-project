<script setup>
import { ref, reactive, watch } from 'vue';
import { useRouter } from 'vue-router';
// Компоненты
import CenterLayout from '@/layouts/CenterLayout.vue';
import UiInputText from '@/components/UI/UiInputText.vue';
import UiCheckbox from '@/components/UI/UiCheckbox.vue';
// Модули
import { checkValidAccount } from '@/modules/validateInputs.js';

const router = useRouter();

const authFields = reactive({ email: 'test@test', password: 'test' });
const authAllowed = ref(false);
const authError = ref(false);

watch(authFields,() =>{
  authError.value = false;
}, {deep: true})

function auth() {
  authAllowed.value = checkValidAccount(authFields.email, authFields.password);

  if(authAllowed.value) {
    authError.value = false;
    router.push('/admin');
  } else {
    authError.value = true;
  }
}
</script>
<template>
  <CenterLayout>
    <div class="auth-page p-[48px] max-w-[460px] w-full rounded-md shadow-md bg-paper-bg">
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
          :id="'email'" 
          :size="'md'" 
          :label="'Email'"
          :status="authError ? 'error' : 'default'"
          v-model="authFields.email"
        />
        <UiInputText 
          :id="'password'" 
          :size="'md'" 
          :label="'Password'"
          :status="authError ? 'error' : 'default'"
          v-model="authFields.password"
        />
        <div v-if="authError" class="error-auth text-error-500">Incorrect login or password</div>
        <div class="flex justify-between">
          <UiCheckbox :id="'remember-account'" :name="'remember-account'">Remember Me</UiCheckbox>
          <UiLink :href="'#'" class="text-primary-500">Forgot Password?</UiLink>
        </div>
        <UiButton :size="'md'" @click="auth">Login</UiButton>
      </div>
      <div class="flex justify-center gap-[5px] mt-[20px]">
        <span>New on our platform?</span>
        <UiLink 
          :href="'/registration'" 
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
        <UiLink :href="'#'"><img src="/icon/bxl-facebook.svg" alt="facebook-icon" /></UiLink>
        <UiLink :href="'#'"><img src="/icon/bxl-twitter.svg" alt="twitter-icon" /></UiLink>
        <UiLink :href="'#'"><img src="/icon/bxl-github.svg" alt="github-icon" /></UiLink>
        <UiLink :href="'#'"><img src="/icon/bxl-google.svg" alt="google-icon" /></UiLink>
      </div>
    </div>
  </CenterLayout>
</template>
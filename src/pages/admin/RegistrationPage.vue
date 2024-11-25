<script setup>
import { ref, reactive, watch } from 'vue';
import { useRouter } from 'vue-router';
// Компоненты
import CenterLayout from '@/layouts/CenterLayout.vue';
import UiInputText from '@/components/UI/UiInputText.vue';
import UiCheckbox from '@/components/UI/UiCheckbox.vue';
// Импортирование функций для валидации регистрационных данных
import { checkRegistrationUsername, checkRegistrationEmail, checkRegistrationPassword } from '@/modules/validateInputs.js';

const router = useRouter();

const passwordHidden = ref(true);

const errorUsername = ref(null);
const errorEmail = ref(null);
const errorPassword = ref(null);

const registrationFields = reactive({ username: null, email: null, password: null });

// Сбросить ошибки у инпутов
watch(registrationFields,() =>{
  errorUsername.value = null;
  errorEmail.value = null;
  errorPassword.value = null;
}, {deep: true})

// Проверка на ошибки введенных данных и переход к след. странице если ошибок не найдено
function signUp() {
  errorUsername.value = checkRegistrationUsername(registrationFields.username);
  errorEmail.value = checkRegistrationEmail(registrationFields.email);
  errorPassword.value = checkRegistrationPassword(registrationFields.password);

  if(!errorUsername.value && !errorEmail.value && !errorPassword.value) {
    router.push('/test');
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
        <h4>Adventure starts here 🚀</h4>
        <div class="text-text-secondary">Make your app management easy and fun!</div>
      </div>
      <div class="auth__form mt-[20px] flex flex-col gap-[20px]">
        <UiInputText 
          :id="'username'" 
          :size="'md'"
          :label="'Username'"
          :status="errorUsername ? 'error' : 'default'"
          :helpText="errorUsername ? errorUsername : ''"
          v-model="registrationFields.username"
        />
        <UiInputText 
          :id="'email'" 
          :size="'md'" 
          :label="'Email'"
          :status="errorEmail ? 'error' : 'default'"
          :helpText="errorEmail ? errorEmail : ''"
          v-model="registrationFields.email"
        />
        <UiInputText 
          :id="'password'" 
          :size="'md'" 
          :label="'Password'"
          :eyeIcon="true"
          :passwordInput="passwordHidden"
          :status="errorPassword ? 'error' : 'default'"
          :helpText="errorPassword ? errorPassword : ''"
          @toggleInput="passwordHidden = !passwordHidden"
          v-model="registrationFields.password"
        />
        <div class="flex gap-[5px]">
          <UiCheckbox :id="'agree'" :name="'agree'">I agree to</UiCheckbox>
          <UiLink class="text-primary-500">privacy policy & terms</UiLink>
        </div>
        <UiButton :size="'md'" @click="signUp">Sign Up</UiButton>
      </div>
      <div class="flex justify-center gap-[5px] mt-[20px]">
        <span>Already have an account?</span>
        <UiLink 
          :href="'/auth'" 
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
        <UiLink :href="'#'"><img src="/icon/bxl-facebook.svg" alt="facebook-icon" /></UiLink>
        <UiLink :href="'#'"><img src="/icon/bxl-twitter.svg" alt="twitter-icon" /></UiLink>
        <UiLink :href="'#'"><img src="/icon/bxl-github.svg" alt="github-icon" /></UiLink>
        <UiLink :href="'#'"><img src="/icon/bxl-google.svg" alt="google-icon" /></UiLink>
      </div>
    </div>
  </CenterLayout>
</template>
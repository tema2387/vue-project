<script lang="ts" setup>
import UiInputText from '@/components/UI/UiInputText.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
</script>
<template>
  <AuthLayout>
    <div class="launch-soon-page">
      <div class="launch-soon-page__title text-center flex flex-col items-center gap-[8px]">
        <h4>We are launching soon 🚀</h4>
        <div class="text-text-secondary">Our website is opening soon. Please register to get notified when it's ready!</div>
      </div>
      <div class="launch-soon-page__form justify-center mt-[40px] flex gap-[16px]">
        <UiInputText
          :id="'launch'"
          :placeholder="'Enter your email or username'"
          :size="'sm'"
          class="flex-1 max-w-[364px]"
        >
        </UiInputText>
        <UiButton :size="'sm'">Notify</UiButton>
      </div>
      <UiImage :src="'/img/launch-soon-img.png'" :alt="'launch-soon-img'" class="mt-[40px] w-[721px] aspect-[4/2.92]"></UiImage>
      <UiLink :src="'/'">
        <UiButton class="max-w-max mt-[40px] m-auto">Back Home</UiButton>
      </UiLink>
    </div>
  </AuthLayout>
</template>
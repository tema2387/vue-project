<script lang="ts" setup>
import UiButton from '@/components/UI/UiButton.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
</script>
<template>
  <AuthLayout>
    <div class="not-found-page">
      <div class="not-found-page__title text-center flex flex-col items-center gap-[8px]">
        <div class="text-error-number">404</div>
        <h2>Page Not Found 🙄️</h2>
        <div class="text-text-secondary">we couldn't find the page you are looking for</div>
      </div>
      <UiImage :src="'/img/not-found-page-img.png'" :alt="'error-img'" class="mt-[40px] w-[849px] aspect-video"></UiImage>
      <UiLink :src="'/'">
        <UiButton class="max-w-max mt-[40px] m-auto">Back Home</UiButton>
      </UiLink>
    </div>
  </AuthLayout>
</template>
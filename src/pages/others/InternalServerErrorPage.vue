<script lang="ts" setup>
import AuthLayout from '@/layouts/AuthLayout.vue';
</script>
<template>
  <AuthLayout>
    <div class="not-found-page">
      <div class="not-found-page__title text-center flex flex-col items-center gap-[8px]">
        <div class="text-error-number">500</div>
        <h2>Internal server error 🔐</h2>
        <div class="text-text-secondary">Oops something went wrong.</div>
      </div>
      <UiImage :src="'/img/internal-server-error-img.png'" :alt="'error-img'" class="mt-[40px] w-[798px] aspect-[4/2.64]"></UiImage>
      <UiLink :src="'/'">
        <UiButton class="max-w-max mt-[40px] m-auto">Back Home</UiButton>
      </UiLink>
    </div>
  </AuthLayout>
</template>